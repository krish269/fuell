# Fuel — Screen Time Control · Marketing Site

Marketing landing page for the [Fuel iOS app](https://apps.apple.com/in/app/fuel-screen-time-control/id6768048960).

---

## Tech Stack

- **React 19** + **react-router-dom 7**
- **Tailwind CSS 3** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **CRA + craco** as the build tool
- **Yarn** for package management

---

## Run locally

```bash
# 1. Install dependencies
cd frontend
yarn install

# 2. Create a .env file
echo "REACT_APP_BACKEND_URL=http://localhost:8001" > .env

# 3. Start the dev server
yarn start
```

The site opens at **http://localhost:3000** with hot reload.

### Prerequisites

- Node.js 18 or 20
- Yarn 1.22+

### Production build

```bash
yarn build         # output → frontend/build/
npx serve -s build # preview locally
```
