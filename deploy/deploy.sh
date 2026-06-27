#!/usr/bin/env bash
# Build + deploy Williamson Prestige to Cloud Run (low-cost, scale-to-zero).
# Re-run any time you want to ship the current code. Run ./deploy/setup.sh first.
set -euo pipefail

# ── Edit these ────────────────────────────────────────────────────────────────
PROJECT_ID="williamson-prestige"
REGION="europe-west2"
SERVICE="williamson-prestige"
GMAIL_USER="benwilliamson046@gmail.com"        # the Gmail account that SENDS the alert
NOTIFY_EMAIL="Williamson.prestige@outlook.com" # where enquiries should ARRIVE
# ──────────────────────────────────────────────────────────────────────────────

# Build from source (Cloud Build) and deploy in one step.
gcloud run deploy "$SERVICE" \
    --project="$PROJECT_ID" \
    --source=. \
    --region="$REGION" \
    --allow-unauthenticated \
    --min-instances=0 \
    --max-instances=2 \
    --memory=512Mi \
    --cpu=1 \
    --set-env-vars="GMAIL_USER=${GMAIL_USER},NOTIFY_EMAIL=${NOTIFY_EMAIL}" \
    --set-secrets="GMAIL_APP_PASSWORD=gmail-app-password:latest"

echo
echo "✓ Deployed. Service URL:"
gcloud run services describe "$SERVICE" --region="$REGION" \
    --format='value(status.url)'
