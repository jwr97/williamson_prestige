import json
import logging
import os
import smtplib
from datetime import datetime
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS

app = Flask(__name__, static_folder="../frontend/dist", static_url_path="")
CORS(app, resources={r"/api/*": {"origins": "*"}})

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
log = logging.getLogger(__name__)


@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve(path):
    full = os.path.join(app.static_folder, path)
    if path and os.path.exists(full):
        return send_from_directory(app.static_folder, path)
    return send_from_directory(app.static_folder, "index.html")


@app.route("/api/contact", methods=["POST"])
def contact():
    data = request.get_json(silent=True) or {}

    errors = [f for f in ("name", "email", "message") if not data.get(f, "").strip()]
    if errors:
        return jsonify({"error": f"{errors[0].capitalize()} is required"}), 400

    submission = {
        "timestamp": datetime.utcnow().isoformat(),
        "name": data.get("name", "").strip(),
        "email": data.get("email", "").strip(),
        "phone": data.get("phone", "").strip(),
        "vehicle": data.get("vehicle", "").strip(),
        "service": data.get("service", "").strip(),
        "preferred_date": data.get("date", "").strip(),
        "message": data.get("message", "").strip(),
    }

    log.info("Contact form submission:\n%s", json.dumps(submission, indent=2))
    _send_notification(submission)

    return jsonify({"success": True, "message": "Thank you for your enquiry — we'll be in touch shortly."}), 200


def _send_notification(submission):
    gmail_user = os.environ.get("GMAIL_USER")
    gmail_password = os.environ.get("GMAIL_APP_PASSWORD")
    notify_email = os.environ.get("NOTIFY_EMAIL")

    if not all([gmail_user, gmail_password, notify_email]):
        log.warning("Email env vars not set — skipping notification email")
        return

    subject = f"New enquiry from {submission['name']}"

    body_lines = [
        f"Name:           {submission['name']}",
        f"Email:          {submission['email']}",
        f"Phone:          {submission['phone'] or '—'}",
        f"Vehicle:        {submission['vehicle'] or '—'}",
        f"Service:        {submission['service'] or '—'}",
        f"Preferred date: {submission['preferred_date'] or '—'}",
        f"Submitted:      {submission['timestamp']}",
        "",
        "Message:",
        submission['message'],
    ]

    msg = MIMEMultipart()
    msg["From"] = gmail_user
    msg["To"] = notify_email
    msg["Subject"] = subject
    msg["Reply-To"] = submission["email"]
    msg.attach(MIMEText("\n".join(body_lines), "plain"))

    try:
        with smtplib.SMTP("smtp.gmail.com", 587) as server:
            server.starttls()
            server.login(gmail_user, gmail_password)
            server.sendmail(gmail_user, notify_email, msg.as_string())
        log.info("Notification email sent to %s", notify_email)
    except Exception:
        log.exception("Failed to send notification email")


if __name__ == "__main__":
    app.run(debug=True, port=5000)
