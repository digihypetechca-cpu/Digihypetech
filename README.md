# DigiHypeTech Website

Official website for **DigiHypeTech** — AI Automation, Voice Agents & Business Integration (`https://digihypetech.ca`).

## Why GitHub Pages Needs Built Static Files (Not Uncompiled `src/main.tsx`)

This project is written in TypeScript + React + Tailwind CSS and compiles into pure static HTML/CSS/JS inside `dist/` (and `docs/`). GitHub Pages cannot execute uncompiled `.tsx` files directly from `/root`.

## Deploying to GitHub Pages (Pick Any One Method)

### Option 1 — Automatic Deployment via GitHub Actions (Recommended)
This repository includes `.github/workflows/deploy.yml`.
1. Push all files to the `main` branch on GitHub.
2. Open **Repository Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. GitHub will automatically run `npm ci && npm run build` and publish `dist/` to `https://digihypetech.ca` (or your `github.io` URL).

### Option 2 — Deploy from Branch (`/docs` folder, Zero Setup)
If you prefer **Deploy from a branch** instead of GitHub Actions:
1. Run `npm run build` (or use the included pre-built `docs/` folder).
2. Open **Repository Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**, select branch `main` and folder **`/docs`**, and save.

### Option 3 — Manual Static Upload
Run `npm run build` locally and upload the contents of `dist/` (`index.html`, `assets/`, `CNAME`, `robots.txt`, `sitemap.xml`, `favicon.svg`) to your hosting branch or static host.

## Local Development

```bash
npm install
npm run dev
```

## Contact Form Endpoint (Optional Upgrade)

The enquiry form validates all fields in the browser, prepares a formatted email draft via `mailto:hello@digihypetech.ca`, and provides one-click copy-to-clipboard so enquiries are never silently dropped on a static host. To enable direct HTTP submission via Formspree or Web3Forms, set `FORM_ENDPOINT` in `src/components/FinalCtaAndContact.tsx`.
