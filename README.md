# Sentral — Q3 2026 Overview

A company overview site built from Sentral's Q3 2026 board/investor deck —
network scale, leadership, the value-creation model, resident experience,
operational and co-development case studies, NOI track record, and Sentral
Strategic Partners terms.

**Private & Strictly Confidential** — source deck contains property-level
financial data; sensitivity confirmed with the requester before publishing.

## Stack

- **Next.js** (App Router) — `next@16`
- Plain CSS design system (Sentral Brand System v1.0, shared with the
  `sentral-development` site) — Georgia (display) + Aptos (body)
- Deployed on **Vercel**

## Develop

```bash
npm install
npm run dev      # http://localhost:3100
npm run build    # production build
npm run start    # serve the production build
```

## Structure

- `app/page.js` — composes every section of the overview
- `app/components/` — `Nav`, `RevealObserver` (scroll-reveal), `CaseStudyCard`,
  `NoiTrackRecord` (NOI bar chart + table, reused across the three track-record
  sections)
- `app/lib/content.js` — all copy, stats, and case-study data sourced from the
  deck
- `public/images/` — leadership headshots, property photography, and app/UI
  mockups cropped from the source deck's rendered slides, plus a few reused
  clean assets from the sibling `Claude` (case-studies) site
