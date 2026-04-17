# Sagar Infotech — Marketing Site PRD

## Problem Statement
Build the sexiest possible dark-themed landing page + inner pages for Sagar Infotech, Rajkot — a hardware-focused business (gaming PCs, PC building, laptop sales & repair). Display address in UPPERCASE.

## User Choices (Dec 2025)
- Business focus: Gaming PCs, PC building, laptop sales & repair (hardware-based)
- Pages: Home, About, Services, Contact
- Visual vibe: Luxury dark — blue / white / black palette
- No contact form / email integration
- Logo asset provided by user (circuit board "SI")
- Phone: 9408488855
- Address: SAGAR INFOTECH, DARSHAN ARCADE, UNIVERSITY RD, NR. HP PETROL PUMP, OPP. SHANTI MULTISPECIALITY HOSPITAL, ARCHANA SOCIETY, PANCHAYAT NAGAR, RAJKOT, GUJARAT 360005

## Architecture
- Frontend: React 19 + React Router 7, Tailwind, framer-motion, @phosphor-icons/react
- Backend: FastAPI + MongoDB (unchanged template — no backend features needed for this static marketing site)
- Fonts: Outfit (display), Manrope (body) via Google Fonts
- Design: Archetype 5 (Jewel & Luxury - Tech), deep obsidian #05050A, cobalt blue #1E73BE accent, glass-morphism header, grain texture, fade-bottom masks

## Personas
- Gamers looking for custom PC builds in Rajkot
- Students/professionals buying premium laptops
- Existing PC/laptop owners needing repair or upgrades

## Completed (Dec 2025)
- 4 routed pages: Home, About, Services, Contact
- Components: Layout, Header (glass, scroll-aware), Footer, WhatsAppFloat
- Home: hero (cinematic motherboard imagery) → marquee → stats → services preview (3 cards) → showcase split w/ testimonial → CTA band
- About: hero, story, stats, 4 values, CTA
- Services: 5 alternating rows (Gaming PC, PC Assembly, Laptop Sales, Repair, Upgrades) + 4-step process + CTA
- Contact: 4 info cards (address, phone, whatsapp, hours), dark-tinted Google Maps iframe, no form
- Uppercase address displayed in footer and on contact page
- All CTAs link to tel:+919408488855 or https://wa.me/919408488855
- data-testid across all interactive elements
- Testing agent iteration 1: 100% pass

## Completed — Iteration 2 (Dec 2025)
- **Gallery page** (/gallery) with 29 real studio photos from client (25 custom builds + 4 component shots) served from /public/gallery/
- Category filters: All Work / Custom Builds / Components & Gear
- Full-screen lightbox with keyboard navigation (Esc / arrows), page counter, body scroll lock
- Home page: new Gallery Teaser section (8 builds) + new Testimonials section (6 curated reviews + 4.9/5 Google rating + "View All" link to Google Maps)
- Header + Footer + Mobile nav: added Gallery link
- SEO: custom title, description, favicon (SI logo), Open Graph + Twitter Card meta tags for WhatsApp/LinkedIn previews
- Testing agent iteration 2: 100% pass

## Backlog / Next Action Items (P1)
- Optional: Gallery/Portfolio page showing real PC builds (photos from studio)
- Optional: Testimonials section with client logos/reviews
- Optional: Inquiry form + email notification (Resend/SendGrid)
- Optional: Structured data (LocalBusiness JSON-LD) for SEO + Google My Business embed
- Optional: OG image + favicon matching the brand logo
