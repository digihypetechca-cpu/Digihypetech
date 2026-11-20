# DigiHypeTech Website

Official website for **DigiHypeTech** — AI Automation, Voice Agents & Business Integration (`https://digihypetech.ca`).

## Project Overview

- **Business**: DigiHypeTech (Montreal, Quebec, Canada)
- **Email**: hello@digihypetech.ca
- **Phone**: (204) 800-0335
- **Booking**: https://cal.com/digihypetech/30min

## Local Development

```bash
npm install
npm run dev
```

## Production Build & GitHub Pages Deployment

1. Build the static production bundle:
   ```bash
   npm run build
   ```
   This outputs pure static files (`index.html`, `assets/`, `CNAME`, `robots.txt`, `sitemap.xml`) into the `dist/` directory with zero backend server requirements.

2. Deploy `dist/` to GitHub Pages:
   - Push the repository to GitHub (`digihypetech-website`).
   - Either deploy the `dist/` folder via GitHub Actions (`actions/deploy-pages`) or configure GitHub Pages to serve from the `gh-pages` branch.
   - `public/CNAME` is automatically copied into `dist/CNAME` with `digihypetech.ca`.
   - Enable **Enforce HTTPS** in GitHub Repository Settings → Pages once DNS propagates.

## Contact Form Endpoint (Optional Upgrade)

The enquiry form currently validates all fields in the browser, prepares a formatted email draft via `mailto:hello@digihypetech.ca`, and provides one-click copy-to-clipboard so enquiries are never silently dropped on a static host. To enable direct server-free HTTP submission via Formspree or Web3Forms, set `FORM_ENDPOINT` in `src/components/ContactSection.tsx`.
