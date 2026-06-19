# Fuel — Screen Time Control · Marketing Site

> Stop doomscrolling. Start winning.

Official marketing website for the **Fuel — Screen Time Control** iOS app ([App Store →](https://apps.apple.com/in/app/fuel-screen-time-control/id6768048960)). A single-page, bold brutalist landing site built to convert visitors into App Store downloads.

![Brand](https://customer-assets.emergentagent.com/job_fuel-timer-1/artifacts/jq5cgrzk_fuel_logo.png)

---

## ✦ About the App

**Fuel** is the dopamine detox engine. Instead of guilt-tripping you with weekly reports or blocking apps entirely, Fuel uses cognitive behavioral psychology to **selectively lock the addictive features inside your apps** — Reels, Shorts, Explore, For-You feeds — while keeping the utility (DMs, search, messaging) intact.

Reclaimed hours become **Fuel currency** you can spend to "unlock" short browsing sessions, build habit streaks, and beat 30/75-day challenges like 75 Hard.

---

## ✦ What This Repo Is

A polished single-page React landing site that markets the iOS app. Built to mirror the app's distinctive **lime-yellow / black / crimson brutalist** brand identity.

### Sections

| Section | Purpose |
|---|---|
| **Hero** | Massive "Stop Doomscrolling. Start Winning." headline + App Store CTA + 4-phone screenshot showcase + scrolling marquee |
| **Problem** | Red diagonal block — "The algorithm is hijacking your brain" |
| **Features (Bento Grid)** | 6 cards: Targeted Blocking, Earn Fuel, Spend Fuel, Habits, Auto-Count Reps, Challenges |
| **How It Works** | 3-step method (Block → Earn → Level Up) |
| **Who Is Fuel For** | 4 persona cards: Students / Professionals / ADHD Minds / You |
| **Trajectory** | $54,750 reclaimed-time stat + wasted vs reclaimed numbers |
| **Privacy** | On-device, no-tracking trust card |
| **Final CTA + Footer** | Get Fuel button + Privacy Policy / EULA / App Store links |

---

## ✦ Tech Stack

| Layer | Stack |
|---|---|
| **Frontend** | React 19, react-router-dom 7, Tailwind CSS 3.4, Framer Motion 11, Lucide React icons |
| **Build tool** | CRA + craco |
| **Fonts** | Anton (display) · Outfit (body) · JetBrains Mono (eyebrow labels) — via Google Fonts |
| **Backend** | FastAPI + MongoDB (scaffold only — **not used by this static landing**) |
| **Process manager** | Supervisor |
| **Hosting** | Emergent (Kubernetes) |

> ℹ️ **Backend is not exercised by the landing page.** It exists from the Emergent template but the site is purely static client-rendered React. You can safely deploy the frontend alone.

---

## ✦ Project Structure

```
/app
├── frontend/
│   ├── public/
│   │   └── index.html                # Title, favicon, OG meta, Apple touch icon
│   ├── src/
│   │   ├── App.js                    # Router → Landing
│   │   ├── App.css                   # Minimal root styles
│   │   ├── index.css                 # Fonts, brand utilities, marquee, grain, scanlines
│   │   └── pages/
│   │       └── Landing.jsx           # ← All landing-page sections live here
│   ├── tailwind.config.js
│   ├── craco.config.js
│   └── package.json
├── backend/
│   ├── server.py                     # FastAPI boilerplate (unused by site)
│   ├── requirements.txt
│   └── .env
├── design_guidelines.json            # Output from the design agent (brand spec)
├── memory/
│   ├── PRD.md                        # Product requirement doc
│   └── …
└── README.md                         # This file
```

---

## ✦ Brand System

Defined in `/app/design_guidelines.json` and implemented in `/app/frontend/src/index.css`.

### Colors

| Token | Hex | Use |
|---|---|---|
| `primary` | `#D4FF00` | Neon lime — backgrounds, CTAs, accents |
| `background` | `#0A0A0A` | Obsidian black — page bg |
| `accent_red` | `#FF2D2D` | Crimson — hover, emphasis, hard shadows |
| `text.primary` | `#FFFFFF` | Body text on dark |
| `text.secondary` | `#A3A3A3` | Subdued labels |

### Type

- **Display:** `Anton` (uppercase, tight tracking, all headlines)
- **Body:** `Outfit` (300–900 weights)
- **Mono labels:** `JetBrains Mono` (eyebrow tags like `[ THE METHOD ]`)

### Visual Effects

- Hard-zero-blur shadows (`shadow-[8px_8px_0px_0px_#D4FF00]`)
- Marker-skew highlights (`.marker-lime`, `.marker-red`, `.marker-black`)
- SVG grain overlay (`.grain::before`)
- Repeating scanlines (`.scanlines::after`)
- CSS-only marquee strip (`.animate-marquee`)
- Text-stroke outline numerals (`.text-stroke`)
- Lime branded text selection + scrollbar

---

## ✦ Local Development

### Prerequisites

- Node.js 18+
- Yarn 1.22+
- (Optional) Python 3.11+ if you want to run the FastAPI scaffold

### Install & Run

```bash
# Frontend
cd /app/frontend
yarn install
yarn start                # → http://localhost:3000

# Backend (optional, not used by the site)
cd /app/backend
pip install -r requirements.txt
uvicorn server:app --reload --host 0.0.0.0 --port 8001
```

### Managed by Supervisor (production-like)

Inside the Emergent container both services are auto-managed:

```bash
sudo supervisorctl status
sudo supervisorctl restart frontend
sudo supervisorctl restart backend
```

Frontend has **hot reload** — code edits under `/app/frontend/src` reflect instantly.

---

## ✦ Environment Variables

### `/app/frontend/.env`

| Key | Purpose |
|---|---|
| `REACT_APP_BACKEND_URL` | External backend URL (auto-injected by Emergent) |

### `/app/backend/.env`

| Key | Purpose |
|---|---|
| `MONGO_URL` | MongoDB connection string |
| `DB_NAME` | Database name |
| `CORS_ORIGINS` | Comma-separated allowed origins (default `*`) |

> ⚠️ Do not delete the seed keys — they are pre-wired for Emergent's ingress and Mongo.

---

## ✦ Editing the Landing Page

Everything visible on the site lives in **one file**:

```
/app/frontend/src/pages/Landing.jsx
```

The file is composed of small section components — find the one you want to change by name:

| Component | What it controls |
|---|---|
| `Nav` | Top sticky navbar + Get Fuel button |
| `Hero` | Headline, subtitle, hero phone gallery, marquee strip |
| `ProblemSection` | Red "hijacking your brain" block |
| `FeaturesGrid` + `FeatureCard` | The 6-card bento grid |
| `HowItWorks` | 3-step Block → Earn → Level Up flow |
| `WhoForSection` | Persona cards (Students/Professionals/ADHD/You) |
| `TrajectorySection` | $54,750 / stats / trajectory phone mock |
| `PrivacySection` | On-device trust card |
| `FinalCTA` | Closing "Start living." with download button |
| `Footer` | Privacy / EULA / App Store links |

### Assets

All app screenshots and the logo are hosted on the Emergent CDN and referenced via the `ASSETS` map at the top of `Landing.jsx`:

```js
const ASSETS = {
  appIcon:   "…/jq5cgrzk_fuel_logo.png",   // The lime-yellow Fuel logo
  screensA:  "…/tdxmxcpi_image.png",       // Doomscroll · Spend Fuel · Clean Feeds · Habits
  screensB:  "…/2zajq520_image.png",       // Habits · Reps · Challenges · Trajectory
};
```

The screenshot collages contain 4 iPhone panels horizontally. The `<PhoneCrop>` helper crops to a single panel via CSS `background-size` + `background-position` — change the `panel={0|1|2|3}` prop to swap which phone shows in each card.

---

## ✦ Test IDs

Every interactive element has a stable `data-testid` for automated testing. Naming convention: kebab-case, scoped by section (e.g. `hero-cta-download`, `nav-cta-download`, `feature-targeted-blocking`, `final-cta-download`, `footer-privacy`).

---

## ✦ Deploy

This project has passed Emergent's deployment readiness check.

1. Hit **Deploy** in the Emergent UI.
2. After deploy, validate:
   - All App Store buttons resolve to `apps.apple.com/in/app/fuel-screen-time-control/id6768048960`
   - Privacy link → `usefuelapp.com/privacy`
   - EULA link → Apple's standard EULA
   - Favicon + page title load correctly
3. (Optional) Add analytics — recommended: **Plausible** or **Umami** snippet in `public/index.html` to track `Download on App Store` click-through rate.

---

## ✦ Links

- 📱 **App Store:** [Fuel — Screen Time Control](https://apps.apple.com/in/app/fuel-screen-time-control/id6768048960)
- 🔒 **Privacy Policy:** [usefuelapp.com/privacy](https://www.usefuelapp.com/privacy)
- 📜 **EULA:** [Apple Standard EULA](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/)

---

## ✦ Backlog

Tracked in `/app/memory/PRD.md`. Highlights:

- [ ] Interactive "Reclaim Your Hours" calculator on the hero (visitor types daily scroll time → sees personalised $/hours-reclaimed number)
- [ ] Email-capture / Android waitlist form
- [ ] FAQ accordion (How is this different from Apple Screen Time? etc.)
- [ ] Comparison table vs basic screen-time apps
- [ ] Mobile hamburger nav drawer
- [ ] Plausible / Umami analytics
- [ ] Pricing / IAP transparency section

---

## ✦ Credits

- Brand & app: **Fuel** team — [usefuelapp.com](https://www.usefuelapp.com)
- Site built on **Emergent** (E1 agent)
- Fonts: Anton, Outfit, JetBrains Mono — Google Fonts
- Icons: Lucide React

---

© 2026 Fuel — Built to break the cycle.
