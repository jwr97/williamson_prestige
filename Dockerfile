# ── Stage 1: Build React frontend ─────────────────────────────────────────────
FROM node:20-alpine AS frontend
WORKDIR /build
COPY frontend/package*.json ./
RUN npm ci --prefer-offline
COPY frontend/ ./
RUN npm run build

# ── Stage 2: Python runtime ───────────────────────────────────────────────────
FROM python:3.12-slim AS runtime

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

WORKDIR /app

COPY backend/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY backend/ ./backend/
COPY --from=frontend /build/dist ./frontend/dist

# Run as non-root user
RUN addgroup --system app && adduser --system --ingroup app app
USER app

EXPOSE 8080

# Cloud Run injects PORT at runtime; default to 8080 locally
CMD gunicorn \
    --bind "0.0.0.0:${PORT:-8080}" \
    --workers 2 \
    --timeout 120 \
    --chdir /app/backend \
    app:app
