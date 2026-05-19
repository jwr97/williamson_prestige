# Williamson Prestige

Website for Williamson Prestige, a mobile valeting and detailing company.

**Stack:** Flask (Python) backend + React/Vite frontend monolith.

## Structure

```
williamson_prestige/
├── backend/
│   ├── app.py          ← Flask app + POST /api/contact endpoint
│   └── requirements.txt
└── frontend/
    ├── index.html
    ├── vite.config.js  ← proxies /api → Flask in dev
    └── src/
        ├── App.jsx
        ├── index.css   ← all styles (dark/gold theme, CSS vars)
        └── components/
            ├── Navbar.jsx       fixed, scrolled-state aware, mobile hamburger
            ├── Hero.jsx         full-screen, grid bg, gold glow, stats strip
            ├── Services.jsx     6 service cards with hover gold bar
            ├── WhyUs.jsx        4 feature cards with inline SVG icons
            ├── Testimonials.jsx 6 review cards
            ├── Contact.jsx      split layout, 7-field form, success/error states
            └── Footer.jsx
```

## Running locally (dev)

**Terminal 1 — Flask:**
```bash
cd backend
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
python app.py
```

**Terminal 2 — Vite:**
```bash
cd frontend
npm install
npm run dev
```

Visit `http://localhost:5173`. The contact form proxies to Flask at `:5000` and logs submissions to the console.

## Production build

```bash
cd frontend && npm run build
cd ../backend && python app.py
```

Flask will serve the built `frontend/dist/` folder at `http://localhost:5000`.

## Deploying to GCP (Cloud Run)

The site is containerised with a multi-stage Dockerfile (Node builds the React app, Python serves it via gunicorn). Deployment targets Cloud Run in `europe-west2` (London).

### One-time setup

```bash
# Authenticate
gcloud auth login
gcloud config set project YOUR_PROJECT_ID

# Enable required APIs
gcloud services enable run.googleapis.com \
    artifactregistry.googleapis.com \
    cloudbuild.googleapis.com

# Create Artifact Registry repository
gcloud artifacts repositories create williamson-prestige \
    --repository-format=docker \
    --location=europe-west2
```

### Manual deploy

```bash
# Build and push image
gcloud builds submit --config cloudbuild.yaml \
    --substitutions=_REGION=europe-west2,_REPO=williamson-prestige,_SERVICE=williamson-prestige
```

Or build and deploy in a single command without Cloud Build:

```bash
gcloud run deploy williamson-prestige \
    --source . \
    --region europe-west2 \
    --allow-unauthenticated
```

### CI/CD via Cloud Build trigger

Connect your GitHub repo in the GCP Console under **Cloud Build → Triggers**, point it at `cloudbuild.yaml`, and every push to `master` will build, push, and redeploy automatically.

### Test the container locally

```bash
docker build -t williamson-prestige .
docker run -p 8080:8080 williamson-prestige
# Visit http://localhost:8080
```

## Things to fill in before going live

- `Contact.jsx` — replace `[Your Area]`, phone number, and email address
- `Hero.jsx` — update the stat numbers to real figures once you have them
- Add a real hero background image (currently uses a CSS gradient + grid)
- Wire up SMTP in `backend/app.py` when you're ready to receive email notifications
