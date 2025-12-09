# Cloudflare Pages Deployment Guide

## Prerequisites

1. Cloudflare account
2. Domain `www.usebastian.com` configured in Cloudflare DNS

## Deployment Steps

### Option 1: Deploy via Cloudflare Dashboard

1. Go to Cloudflare Dashboard → Pages
2. Click "Create a project"
3. Connect your Git repository (GitHub, GitLab, etc.)
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node version**: 20
5. Click "Save and Deploy"

### Option 2: Deploy via Wrangler CLI

```bash
# Install Wrangler globally
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy to Cloudflare Pages
wrangler pages deploy dist --project-name=usebastian-portfolio
```

## Custom Domain Configuration

1. In Cloudflare Dashboard → Pages → Your Project
2. Go to "Custom domains" tab
3. Add `www.usebastian.com`
4. Cloudflare will automatically configure DNS and SSL

## Environment Variables

If you need to add environment variables:

1. Go to Settings → Environment Variables
2. Add any necessary variables (API keys, etc.)

## Build Settings

- **Framework preset**: Astro
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Node version**: 20 (specified in `.node-version`)

## Continuous Deployment

Cloudflare Pages automatically deploys on every push to your main branch. Preview deployments are created for pull requests.

## Performance Optimizations

- Cloudflare CDN automatically enabled
- HTTP/3 and Brotli compression enabled by default
- Auto-minification of HTML, CSS, and JS
- Image optimization via Cloudflare Polish (if enabled)

## SSL/TLS

- Free SSL certificate automatically provisioned
- HTTPS enforced by default
- HTTP/2 and HTTP/3 enabled

## Monitoring

Monitor your deployment at:

- Cloudflare Dashboard → Analytics
- Real User Monitoring (RUM) available
- Web Analytics can be enabled in Cloudflare Dashboard
