# Fuel — Screen Time Control · Marketing Landing Page

## Original Problem Statement
User shared App Store link for "Fuel - Screen Time Control" (id6768048960), attached app description copy and 4 screenshots showing app's brand identity. Request: build an **attractive marketing website** detailing what the app can do.

## App Brand Identity
- Primary: Neon lime yellow (#D4FF00) on Obsidian black (#0A0A0A)
- Accent: Crimson red (#FF2D2D)
- Type: Anton (display) + Outfit (body) + JetBrains Mono (eyebrow labels)
- Aesthetic: Brutalism / Punk poster — hard 0-blur shadows, thick borders, all-caps headlines, marker highlights, grain & scanline overlays

## Architecture
- **Type:** Static single-page React marketing site (no backend logic, no auth, no database)
- **Stack:** React 19 + Tailwind + Framer Motion + Lucide icons
- **Routes:** `/` → `Landing.jsx`
- **External links:** App Store, Privacy Policy (usefuelapp.com), EULA (apple)

## What's Been Implemented (Jan 2026)
- ✅ Sticky nav with app icon, anchor links (Features, Method, Who, Trajectory) and primary "Get Fuel" CTA
- ✅ Hero: massive Anton headline ("STOP DOOMSCROLLING. START WINNING."), badge, App Store CTA, 4-phone screenshot showcase grid, scrolling marquee strip
- ✅ Problem section (red diagonal block) — "THE ALGORITHM IS HIJACKING YOUR BRAIN"
- ✅ Bento Feature Grid — 6 features with iPhone screenshot crops:
  - Targeted Distraction Blocking (large)
  - Earn Fuel For Focus
  - Spend Fuel To Browse
  - Choose Your Go-To Habits
  - Auto-Count Reps With Camera
  - Commit With Built-In Challenges (large)
- ✅ How It Works — 3-step flow (Block → Earn → Level Up) with outline numerals
- ✅ Who Is Fuel For — 4 persona cards (Students, Professionals, ADHD Minds, You)
- ✅ Trajectory section — massive $54,750 figure, stats (1,825h wasted, 1,095h reclaimed, 75-day ready), trajectory phone mock
- ✅ Privacy-first card with on-device / no-tracking badges
- ✅ Final CTA section + footer with Privacy Policy, EULA, App Store links
- ✅ Custom typography (Anton/Outfit/JetBrains Mono via Google Fonts), grain texture, marker-skew highlight effect, lime scrollbar, branded text selection
- ✅ data-testid on every interactive element

## Asset Map
- App icon: `2801rdtu_image.png`
- Screenshot set A (Stop Doom/Spend Fuel/Clean Feeds/Habits): `tdxmxcpi_image.png`
- Screenshot set B (Habits/Reps/Challenges/Trajectory): `2zajq520_image.png`
- Phone panels cropped via CSS background-position (4 panels per collage)

## Backlog / Next Action Items
- P1: Email capture / waitlist form for Android version interest
- P1: Customer testimonial / press quote section
- P2: FAQ accordion (How is this different from Apple Screen Time? Does it work with social apps' updates? etc.)
- P2: Comparison table vs basic screen-time apps
- P2: Pricing / IAP transparency section
- P2: Open Graph / Twitter card meta tags + favicon update
- P2: Mobile nav drawer (currently nav links hidden on mobile)
- P3: Light analytics (Plausible/Umami) and App Store conversion tracking

## Notes
- No backend used — purely static marketing page (server.py is unchanged, untouched).
- No authentication, no database storage, no third-party API integration required for this iteration.
