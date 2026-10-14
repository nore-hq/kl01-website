# KL-01 CAR SPA & DETAILERS // Official Website

The official, bespoke website for **KL-01 Car Spa & Detailers** (Trivandrum, Kerala), built with **Next.js 16**, **React 19**, and vanilla CSS design tokens inspired by Rolls-Royce editorial luxury aesthetics.

---

## 💎 Features & Architecture

1. **Bespoke Luxury Aesthetic**:
   - Ultra-dark palette (`#050608`) accented with signature racing red (`#E60012`) matching the KL-01 car emblem.
   - Rolls-Royce editorial typography (`Cinzel`, `Cormorant Garamond`, `Space Mono`).
   - Cinematic background video with custom ambient overlays and play/pause/mute audio controls.
   - Per-character magnetic cursor tracking physics on hero headline.

2. **Core Sections**:
   - **Cinematic Video Hero**: Ultra-thin typography *"IN PURSUIT OF PERFECTION."* with direct WhatsApp concierge and atelier exploration.
   - **Machine Polishing Showcase**: Dedicated section and `/polish` route featuring genuine workshop footage, dual-action swirl mark removal, clearcoat preservation, and high-gloss mirror depth.
   - **15 Curated Commissions**: Categorized into *Coatings & PPF*, *Detailing & Clarity*, and *Body & Mechanical*:
     1. PPF (Paint Protection Film)
     2. Borophene Coating
     3. Graphene Coating
     4. Ceramic Coating
     5. Teflon Coating
     6. Foam Wash
     7. Interior Fabric Cleaning
     8. Head Light Restoration
     9. Windshield Glass Polish
     10. Water Mark Removing
     11. Under Body 3M Coating
     12. Silencer Coating
     13. Car Denting & Painting
     14. Car A/C Work
     15. Car Mechanical Work
   - **Interactive Studio Location**: Embedded dark-mode Google Maps with GPS coordinates, exact address landmarks in Kallumoodu, and 1-tap navigation directions.
   - **Mobile-Optimized UX**:
     - Full-screen frosted-glass mobile navigation drawer.
     - Horizontal swipeable tabs for quick service filtering on touchscreens.
     - Floating quick-action bottom bar with 1-tap direct call (`+91 95675 12720`) and instant WhatsApp booking.

---

## 📍 Studio Information

- **Brand**: KL-01 Car Spa & Detailers
- **Address**: TC 68/1098/13, Manacaud - Muttathara Road, Near New Rajasthan Marbles & Indian Oil Petrol Pump, Kallumoodu, Trivandrum – 695008
- **Phone / WhatsApp**: +91 95675 12720
- **Location**: Kallumoodu, Muttathara, Thiruvananthapuram, Kerala

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Production Build

```bash
npm run build
```

---

## ☁️ Deployment to Cloudflare Pages

Configured for static export (`output: 'export'`) in `next.config.ts`, generating pure edge-cached static assets in `out/`.

### Cloudflare Pages Git Settings:
- **Framework Preset**: `None` *(Do NOT select "Next.js", which runs @cloudflare/next-on-pages and conflicts with Next 16)*
- **Root directory**: `/` *(Leave blank/root)*
- **Build command**: `npm run build`
- **Build output directory**: `out`
- **Environment variables**: `NODE_VERSION` = `20`

### 1-Click CLI Deployment:
```bash
npm run deploy
```
