# Deployment Guide

## Option 1: Vercel (recommended)

Vercel is built by the Next.js team and requires zero configuration for this project.

1. Push this project to a GitHub, GitLab, or Bitbucket repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — leave the default build settings:
   - **Build command:** `next build`
   - **Output directory:** `.next`
   - **Install command:** `npm install`
4. Add any environment variables from `.env.example` under
   **Project Settings → Environment Variables** (only needed if you've wired
   up the contact form to an email provider).
5. Click **Deploy**. Every push to your main branch redeploys automatically;
   every pull request gets its own preview URL.
6. Add your custom domain under **Project Settings → Domains** and update
   `url` in `lib/site.ts` to match.

## Option 2: Self-hosted (Node server)

```bash
npm install
npm run build
npm run start   # serves on port 3000 by default
```

Put this behind a reverse proxy (nginx, Caddy) for TLS termination, or run it
directly on a platform that provides HTTPS (Railway, Render, Fly.io, a VPS
with Caddy).

Example `systemd` service:

```ini
[Unit]
Description=Portfolio site
After=network.target

[Service]
WorkingDirectory=/var/www/portfolio
ExecStart=/usr/bin/npm run start
Restart=always
Environment=NODE_ENV=production
Environment=PORT=3000

[Install]
WantedBy=multi-user.target
```

## Option 3: Static export

This project uses a dynamic API route (`app/api/contact/route.ts`) for the
contact form, so a fully static `next export` isn't compatible out of the
box. To deploy statically (e.g., GitHub Pages, S3 + CloudFront):

1. Replace the contact form's `fetch("/api/contact")` call with a third-party
   form endpoint (e.g., Formspree, Getform) or a serverless function hosted
   separately.
2. Add `output: "export"` to `next.config.mjs`.
3. Run `npm run build` — static files are written to `out/`.

## Post-deploy checklist

- [ ] Update `url` in `lib/site.ts` to the live domain
- [ ] Confirm `/sitemap.xml` and `/robots.txt` resolve correctly
- [ ] Verify the resume PDF downloads from `/resume`
- [ ] Test the contact form end-to-end (and confirm email delivery if wired up)
- [ ] Run Lighthouse in Chrome DevTools against the production URL
- [ ] Submit the sitemap to Google Search Console
