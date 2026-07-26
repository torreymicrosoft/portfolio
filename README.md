# Torrey — Portfolio (V1)

A fast, **dependency-free static portfolio** that showcases my AI projects, product work,
and developer-evangelism content. Hosted on **Azure Static Web Apps (Free tier)** and
**auto-deployed on every push to `main`** via GitHub Actions.

> Positioning: **Developer Evangelist / Product Manager** bridging **hardware → cloud → AI**.

---

## ✨ Why this stack

- **Zero build step** — plain HTML/CSS/JS. Nothing to compile, nothing to break.
- **Free forever** — Azure Static Web Apps Free tier (custom domain + SSL included).
- **Refresh = `git push`** — the GitHub Action redeploys automatically.
- **Data-driven** — all content lives in arrays in `js/main.js`; edit and push.

## 📁 Structure

```
portfolio/
├── index.html                 # Page markup + sections
├── css/styles.css             # Theme, layout, responsive (dark/light)
├── js/main.js                 # ← EDIT content arrays here (PROJECTS, EXPERIENCE, ...)
├── assets/
│   ├── favicon.svg
│   └── resume.pdf             # ← drop your resume here (linked in nav)
├── staticwebapp.config.json   # SPA fallback, headers, caching
└── .github/workflows/
    └── azure-static-web-apps.yml   # CI/CD → Azure
```

## ✏️ How to update content

Open `js/main.js` and edit the clearly-marked arrays:

- `PROJECTS` — your AI projects (icon, title, year, category, desc, tags, links)
- `EXPERIENCE` — career timeline
- `SPEAKING` — talks / videos / writing
- `CONTACT` — email + social links

Then in `index.html` update the hero copy/bio, and drop your real `assets/resume.pdf`.
Commit + push → live in ~1 minute.

## 🧪 Run locally

Any static server works:

```bash
# Python (no install needed)
python3 -m http.server 8080
# then open http://localhost:8080
```

## 🚀 Deploy to Azure (one-time setup)

1. Push this repo to GitHub (`main` branch).
2. In the Azure Portal → **Create a resource → Static Web App** (Free plan).
3. Connect it to this GitHub repo/branch. Build presets:
   - **App location:** `/`
   - **Api location:** *(empty)*
   - **Output location:** *(empty)*
4. Azure adds the deploy token as a repo secret and commits a workflow.
   - This repo already ships a workflow expecting the secret
     **`AZURE_STATIC_WEB_APPS_API_TOKEN`** — either rename Azure's secret to match,
     or update the secret name in `.github/workflows/azure-static-web-apps.yml`.
5. Every push to `main` now redeploys automatically. 🎉

See `DEPLOY.md` for the full CLI-based alternative.

## 📝 License

Personal portfolio — content © Torrey.
