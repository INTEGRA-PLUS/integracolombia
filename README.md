# istinge_main_page

Black-and-white landing page for **Integra Colombia — Software Especializado para ISP**, built with Next.js 15 (App Router), TypeScript and Tailwind CSS.

## Stack

- Next.js 15 / React 19 (App Router)
- TypeScript
- Tailwind CSS 3.4 (custom theme: `ink` palette, glow shadows, custom keyframes)
- Pure SVG illustrations (no external image deps)

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Structure

```
app/
├── layout.tsx           # Root layout, fonts, metadata
├── page.tsx             # Composes the landing page
├── globals.css          # Theme tokens, scrollbars, utilities
└── components/
    ├── Navbar.tsx       # Sticky animated navigation
    ├── Logo.tsx         # SVG INTEGRA mark
    ├── Hero.tsx         # "SOFTWARE ESPECIALIZADO PARA ISP"
    ├── AntennaScene.tsx # SVG antenna field (replaces neon photo)
    ├── About.tsx        # Conoce nuestra empresa + Misión y Visión
    ├── Services.tsx     # Nuestros Servicios (6 cards + CTA)
    ├── Footer.tsx       # Copyright + Integra Colombia attribution
    └── Reveal.tsx       # IntersectionObserver scroll-reveal helper
```

## Design

Pure black & white with a deep `ink` neutral scale. Heavy use of:

- Layered radial glows + grid backgrounds
- Animated SVG signal arcs and pulsing beacons
- Glassmorphism on the navbar and stat chips
- Reveal-on-scroll with staggered delays
- Hover states that shift weight, glow, and slide accents
- Soft "elevated" shadows for cards
```
