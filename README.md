# Sagar Infotech — Website

> **Rajkot's Premium PC & Gaming Hardware Studio** · Est. 2016

Official marketing website for **Sagar Infotech**, a Rajkot-based studio specialising in
custom gaming PC builds, laptop sales, and board-level hardware repair. A fast, animated,
single-page React site.

🔗 **Live:** https://sagarinfotech.co.in

---

## Overview

A five-page single-page application (SPA) presenting the studio's services, work, and
contact details. The site is fully **static** — there is no runtime backend — and contact
actions route directly to WhatsApp.

### Pages
- **Home** — hero, services overview, stats & testimonials
- **About** — story, studio and why Sagar Infotech
- **Services** — the five service lines
- **Gallery** — build & repair showcase
- **Contact** — location, hours and WhatsApp CTA

### Services featured
| # | Service | |
|---|---|---|
| 01 | **Custom Gaming PC Builds** | RTX-powered rigs tuned for 1440p / 4K |
| 02 | **Custom PC Assembly** | Bring your parts, we craft the machine |
| 03 | **Laptops & Gaming Notebooks** | Gaming, creator & business laptops |
| 04 | **Laptop & PC Repair** | Diagnostic-first, board-level repair |
| 05 | **Component Upgrades** | GPU / RAM / NVMe / cooling overhauls |

---

## Tech stack

- **React 19** via [Create React App](https://create-react-app.dev/) + [CRACO](https://craco.js.org/) (for the `@/` path alias)
- **Tailwind CSS** + [shadcn/ui](https://ui.shadcn.com/) components (Radix UI primitives)
- **React Router 7** — client-side routing
- **Framer Motion** — animation
- **Phosphor** & **Lucide** icon sets
- Deployed on **[Vercel](https://vercel.com/)**

---

## Project structure

```
.
├── frontend/             # The website (React SPA) — this is what gets deployed
│   ├── src/
│   │   ├── components/    # Layout, Header, Footer, UI primitives (shadcn)
│   │   ├── pages/         # Home, About, Services, Gallery, Contact
│   │   └── lib/           # constants.js — brand, services, images
│   ├── public/           # Static assets & gallery images
│   └── vercel.json       # Build command + SPA routing for Vercel
└── backend/              # FastAPI scaffold — unused boilerplate, not deployed
```

> **Note:** `backend/` is unused scaffolding (a FastAPI status-check stub). The live site
> is 100% static and never calls it.

---

## Local development

Requires **Node.js 18+** and **Yarn**.

```bash
cd frontend
yarn install
yarn start          # → http://localhost:3000
```

### Production build

```bash
cd frontend
yarn build          # → outputs to frontend/build
```

---

## Deployment

Deployed on **Vercel** from the `frontend/` directory:

| Setting | Value |
|---|---|
| Root directory | `frontend` |
| Build command | `yarn build` (runs `craco build`) |
| Output directory | `build` |
| Routing | all paths rewrite to `index.html` (SPA) — see `frontend/vercel.json` |

The custom domain **sagarinfotech.co.in** is served through Vercel with DNS hosted at Namecheap.

---

## Contact

**Sagar Infotech** — Darshan Arcade, University Rd, Nr. HP Petrol Pump, Rajkot, Gujarat 360005
📞 [9408488855](tel:+919408488855)  ·  💬 [WhatsApp](https://wa.me/919408488855)
