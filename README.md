# MariaPoS Website with Hardware

Marketing website for MariaPoS (JAAN Network), built with Next.js (App Router), TypeScript and CSS Modules.

This project mirrors the structure of the original MariaPoS website. It is currently a **skeleton**: every route, component and data file exists, but pages render nothing yet and the UI still needs to be built.

## Getting started

Requires Node.js 20.9+.

```bash
npm install      # install dependencies
npm run dev      # dev server at http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # ESLint
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in the values:

| Variable | Purpose |
| --- | --- |
| `CLOUD_PANEL_URL` | Cloud panel base URL used by website sign-up / sign-in |
| `CLOUD_API_KEY` | API key for the cloud panel |

## Project structure

```
src/
  app/                              # Routes (one folder per page)
    layout.tsx                      # Root layout
    globals.css                     # Global styles
    page.tsx                        # /
    about/ contact/ features/ hardware/ pricing/ product/
    industries/[slug]/              # Industry landing pages (data: lib/industries.ts)
    pos-system/[country]/[region]/  # Country + region landing pages (data: lib/geo.ts)
    sign-in/ sign-up/               # Account pages
    api/account/signin|signup/      # Account API routes (proxy to the cloud panel)
    privacy-policy/ refund-policy/ terms-and-conditions/
    sitemap.ts robots.ts manifest.ts opengraph-image.tsx
  components/
    layout/                         # Header, Footer, FloatingContact
    sections/                       # Shared sections (TrialCta, TrialForm, FaqBlock, ServiceAreas)
    home/ features/ product/ hardware/ pricing/ contact/ about/ industries/ landing/ legal/ auth/
    motion/MotionProvider.tsx       # Scroll / reveal animations
    seo/JsonLd.tsx                  # schema.org structured data
    ui/                             # Small shared pieces (icons)
  lib/
    site.ts                         # Site URL, contact details, nav + footer links
    seo.ts                          # Metadata + JSON-LD helpers
    cloudApi.ts                     # Cloud panel API client
    featureCatalog.ts plans.ts pricingFaqs.ts industries.ts geo.ts geoContent.ts locations.ts
  assets/images/                    # Images (served through next/image)
```

## Status

- [ ] Build page UIs and component styles
- [ ] Fill in data files in `src/lib/`
- [ ] Wire up sign-in / sign-up API routes to the cloud panel
- [ ] Restore `/pos-system/<city>` redirects in `next.config.ts` once `lib/locations.ts` is populated
