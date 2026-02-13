# SalesTouch.io - AI-Powered Sales Enablement Platform

SalesTouch is a comprehensive B2B sales enablement platform with 25+ modules: Smart CRM, AI content generation, sales training, voice practice, and MAX AI agent. This repository contains the international landing page for [touch.long-arena.com](https://touch.long-arena.com).

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Frontend | Vue 3 (Composition API) + TypeScript | 3.5 / 5.9 |
| Build | Vite | 7.x |
| i18n | vue-i18n (legacy: false) | 9.x |
| Backend | Express + TypeScript + MySQL2 | 5.x |
| Languages | English, Chinese, French, German, Spanish | 5 |

## Landing Page Architecture

The landing page follows a 9-section narrative funnel designed for B2B SaaS conversion:

```
HeroSection          → Platform positioning + dual CTA + trust badges
ProblemStatement     → 4 quantified sales pain points
PlatformOverview     → 6 core capabilities (CRM / AI Content / Training / MAX / Analytics / Medical)
MaxShowcase          → MAX AI 3-step interactive demo (Read → Recommend → Execute)
WorkflowJourney      → 5-step sales workflow timeline
UseCases             → 4 role-based tabs (B2B Sales / Managers / Trainers / Medical)
SocialProof          → Key metrics + customer testimonials
CTASection           → Final conversion "Start Free Trial"
FooterSection        → 4-column professional footer
```

### Component Structure

```
frontend/src/
├── components/
│   ├── sections/                     # 9 page sections
│   │   ├── HeroSection.vue
│   │   ├── ProblemStatement.vue
│   │   ├── PlatformOverview.vue
│   │   ├── MaxShowcase.vue
│   │   ├── WorkflowJourney.vue
│   │   ├── UseCases.vue
│   │   ├── SocialProof.vue
│   │   ├── CTASection.vue
│   │   └── FooterSection.vue
│   └── shared/                       # Reusable components
│       ├── FeatureCard.vue           # Generic feature card
│       └── AnimatedSection.vue       # Scroll-reveal wrapper (Intersection Observer)
├── i18n/
│   ├── index.ts                      # i18n config
│   └── locales/
│       ├── en.ts                     # English (274 keys, baseline)
│       ├── zh.ts                     # Chinese
│       ├── fr.ts                     # French
│       ├── de.ts                     # German
│       └── es.ts                     # Spanish
├── App.vue                           # Main app (navbar + sections + CSS design tokens)
└── main.ts
```

### Image Assets (`public/images/`)

| File | Size | Usage |
|------|------|-------|
| `hero-team.jpg` | 299KB | Hero + CTA background (Ken Burns animation) |
| `testimonial-1.jpg` | 12KB | SocialProof testimonial avatar |
| `testimonial-2.jpg` | 8KB | SocialProof testimonial avatar |
| `usecase-sales.jpg` | 84KB | UseCases sales scenario |
| `usecase-managers.jpg` | 51KB | UseCases management scenario |
| `usecase-trainers.jpg` | 72KB | UseCases training scenario |
| `usecase-medical.jpg` | 43KB | UseCases medical scenario |

### Design System

- **Theme**: Dark (#0f0f1e / #1a1a2e) with purple gradient (#667eea -> #764ba2)
- **Icons**: Inline SVGs via `v-html` from i18n files, sized with CSS `:deep(svg)` rules
- **Glass morphism**: `backdrop-filter: blur()` + semi-transparent backgrounds
- **CSS Custom Properties**: Design tokens for colors, gradients, shadows, radii, transitions
- **Background Effects**: Ken Burns animation, floating gradient orbs, vignette overlay
- **Animations**: Scroll-reveal (Intersection Observer), hover lift, pulse effects
- **Responsive**: 480px / 768px / 1024px / 1400px breakpoints
- **Accessibility**: `prefers-reduced-motion` support

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Frontend

```bash
cd frontend
npm install
npm run dev       # Development server (HMR)
npm run build     # Production build (vue-tsc + vite)
npm run preview   # Preview production build
```

### Backend

```bash
cd backend
npm install
cp .env.example .env   # Configure environment variables
npm run dev            # Development server (port 3100)
```

## Build Output

```
dist/
├── index.html                    0.48 kB
├── assets/index-*.css           35.25 kB  (gzip: 5.92 kB)
└── assets/index-*.js           195.10 kB  (gzip: 66.85 kB)
```

66 modules, 0 TypeScript errors, builds in ~500ms.

## Development History

| Phase | Date | Description |
|-------|------|-------------|
| 1. Initial Build | 2026-01-28 | Vue 3 + Vite + i18n base, 7 components |
| 2. Max-Focused | 2026-02-12 | Simplified to 3 components (HeroMax / MaxInAction / WhyMax) |
| 3. Full Platform | 2026-02-13 | Complete redesign: 9 sections, 274 i18n keys, scroll animations, design tokens |
| 3.6 Visual Upgrade | 2026-02-13 | Emoji → SVG icons, real people photos, hero background redesign |

Phase 3 changes: 45 files, +4,394 / -10,467 lines (cleaned ~37 legacy files, added 11 new components).
Phase 3.6: Replaced all emoji with inline SVG icons (15 i18n + component inline), added 7 professional photos (Unsplash), redesigned hero background (Ken Burns + floating orbs), enhanced UseCases with two-column photo layout.

## Roadmap

- [x] Multi-language base (5 languages, 274 keys each)
- [x] 9-section landing page with full platform showcase
- [x] Scroll-reveal animations (Intersection Observer)
- [x] CSS design token system
- [x] Production build passing (0 errors)
- [x] SVG icon system (emoji → inline SVG with `:deep(svg)` sizing)
- [x] Professional photos (7 images, Unsplash)
- [x] Hero background redesign (Ken Burns + gradient orbs)
- [ ] Cross-browser testing (Chrome / Safari / Firefox)
- [ ] Mobile device testing (iOS / Android)
- [ ] Lighthouse performance audit (target >90)
- [ ] Analytics integration (GA4)
- [ ] SEO optimization (meta tags, Schema.org)
- [ ] Production deployment

---
*SalesTouch: AI-powered sales enablement for modern B2B teams.*
