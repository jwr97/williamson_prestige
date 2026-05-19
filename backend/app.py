import json
import logging
import os
from datetime import datetime

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

    return jsonify({"success": True, "message": "Thank you for your enquiry — we'll be in touch shortly."}), 200


if __name__ == "__main__":
    app.run(debug=True, port=5000)
