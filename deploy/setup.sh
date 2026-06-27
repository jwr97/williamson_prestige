#!/usr/bin/env bash
# One-time GCP setup for Williamson Prestige.
# Run this once per project. Safe to re-run (commands are idempotent).
set -euo pipefail

# ── Edit these ────────────────────────────────────────────────────────────────
PROJECT_ID="williamson-prestige"
REGION="europe-west2"
REPO="williamson-prestige"
# ──────────────────────────────────────────────────────────────────────────────

gcloud config set project "$PROJECT_ID"

echo "→ Enabling APIs (this can take a minute)…"
gcloud services enable \
    run.googleapis.com \
    artifactregistry.googleapis.com \
    cloudbuild.googleapis.com \
    secretmanager.googleapis.com

echo "→ Creating Artifact Registry repo (ignored if it already exists)…"
gcloud artifacts repositories create "$REPO" \
    --repository-format=docker \
    --location="$REGION" \
    2>/dev/null || echo "  repo already exists, skipping"

echo "→ Storing the Gmail app password in Secret Manager…"
if gcloud secrets describe gmail-app-password >/dev/null 2>&1; then
    echo "  secret 'gmail-app-password' already exists — leaving it as-is"
    echo "  (to rotate it: printf '%s' 'NEW_PASSWORD' | gcloud secrets versions add gmail-app-password --data-file=-)"
else
    # Prompt without echoing to the terminal; value never touches disk or history.
    read -rsp "  Paste the Gmail App Password (input hidden), then press Enter: " GMAIL_APP_PASSWORD
    echo
    printf '%s' "$GMAIL_APP_PASSWORD" | gcloud secrets create gmail-app-password --data-file=-
    unset GMAIL_APP_PASSWORD
fi

echo "→ Granting Cloud Run's runtime service account access to the secret…"
PROJECT_NUMBER="$(gcloud projects describe "$PROJECT_ID" --format='value(projectNumber)')"
gcloud secrets add-iam-policy-binding gmail-app-password \
    --member="serviceAccount:${PROJECT_NUMBER}-compute@developer.gserviceaccount.com" \
    --role="roles/secretmanager.secretAccessor" \
    >/dev/null

echo "✓ Setup complete. Now run ./deploy/deploy.sh"
