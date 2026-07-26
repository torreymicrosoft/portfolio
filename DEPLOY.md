# DEPLOY.md — Ship V1 to Azure Static Web Apps (Free)

Two paths: **Portal** (easiest) or **Azure CLI** (scriptable). Both give you a free
`*.azurestaticapps.net` URL with HTTPS, and auto-redeploy on `git push`.

---

## Prerequisites
- A GitHub repo containing this project on branch `main`.
- An Azure account (Free tier is fine). https://azure.microsoft.com/free
- (CLI path) Azure CLI + the SWA extension.

---

## Option A — Azure Portal (5 minutes)
1. Push this folder to a GitHub repo.
2. Portal → **Create a resource → Static Web App**.
3. Plan type: **Free**.
4. **Deployment details:** Source = GitHub, authorize, pick your repo + `main`.
5. **Build details:**
   - Build Presets: **Custom**
   - App location: `/`
   - Api location: *(leave blank)*
   - Output location: *(leave blank)*
6. **Create.** Azure commits a workflow and injects a deploy-token secret.
7. If you keep the bundled workflow, ensure the repo secret is named
   `AZURE_STATIC_WEB_APPS_API_TOKEN` (rename Azure's, or edit the yml).
8. Wait for the GitHub Action to go green → open the generated URL.

---

## Option B — Azure CLI

```bash
# 0) Login
az login

# 1) Variables
RG="rg-portfolio"
NAME="torrey-portfolio"          # must be globally unique-ish
LOCATION="eastus2"               # SWA free supported region
GH_REPO="https://github.com/<you>/<repo>"
BRANCH="main"

# 2) Resource group
az group create -n "$RG" -l "$LOCATION"

# 3) Create the Static Web App (Free) wired to GitHub.
#    This opens a browser to authorize GitHub and auto-adds the deploy secret + workflow.
az staticwebapp create \
  -n "$NAME" -g "$RG" -l "$LOCATION" \
  --sku Free \
  --source "$GH_REPO" \
  --branch "$BRANCH" \
  --app-location "/" \
  --output-location "" \
  --login-with-github

# 4) Get the live URL
az staticwebapp show -n "$NAME" -g "$RG" --query "defaultHostname" -o tsv
```

### If you created the SWA without GitHub wiring
Grab the deploy token and add it as a GitHub secret named
`AZURE_STATIC_WEB_APPS_API_TOKEN`:

```bash
az staticwebapp secrets list -n "$NAME" -g "$RG" --query "properties.apiKey" -o tsv
# GitHub → repo → Settings → Secrets and variables → Actions → New repository secret
```

---

## Custom domain (optional, free)
```bash
az staticwebapp hostname set -n "$NAME" -g "$RG" --hostname www.yourdomain.com
```
Then add the CNAME/TXT records Azure shows you at your DNS provider.

---

## The refresh loop
```bash
git add -A && git commit -m "Update projects" && git push
```
GitHub Actions redeploys in ~1 minute. That's the whole workflow. 🚀
