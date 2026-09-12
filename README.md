# Asam Express — Cargo Movers (Next.js App)

A modern, responsive, and performance-optimized Next.js application for **Asam Express Cargo Movers**, migrated from static HTML.

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the landing page.

### 3. Build for Production
```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/
│   ├── globals.css         # Full design tokens, styles & responsive media queries
│   ├── layout.tsx          # Root layout with SEO metadata and Inter font
│   └── page.tsx            # Main Landing page assembling components
├── components/
│   ├── TopBar.tsx          # Top bar with location, slogan & contact hours
│   ├── Navbar.tsx          # Sticky navigation with responsive mobile menu
│   ├── Hero.tsx            # Hero section with animated route vector & live tracker card
│   ├── Stats.tsx           # 4-metric key differentiator stats bar
│   ├── Services.tsx        # 6 core logistics service cards
│   ├── About.tsx           # "Why Asam Express" visual route map & value points
│   ├── Process.tsx         # 4-step workflow process section
│   ├── CTA.tsx             # Conversion quote call-to-action banner
│   ├── Footer.tsx          # Multi-column footer with links & company info
│   └── ScrollReveal.tsx    # Intersection Observer scroll animation client component
├── public/
│   └── images/
│       └── logo.png        # Brand logo asset
├── next.config.mjs
├── tsconfig.json
└── package.json
```
