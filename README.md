# Fred Motta — React Portfolio

[![Live Site](https://img.shields.io/badge/Live_Site-GitHub_Pages-0969da?logo=github&logoColor=white)](https://fredm23579.github.io/fred-react-portfolio/)
[![Deploy](https://github.com/fredm23579/fred-react-portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/fredm23579/fred-react-portfolio/actions/workflows/deploy.yml)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0080?logo=framer&logoColor=white)](https://www.framer.com/motion)
[![React Router](https://img.shields.io/badge/React_Router-6.30-CA4245?logo=reactrouter&logoColor=white)](https://reactrouter.com)
[![Vitest](https://img.shields.io/badge/Vitest-2.x-6E9F18?logo=vitest&logoColor=white)](https://vitest.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## Live Site

**[https://fredm23579.github.io/fred-react-portfolio/](https://fredm23579.github.io/fred-react-portfolio/)**

> **Full-Stack Developer & AI Engineer** — Building intelligent, scalable applications at the intersection of modern web and artificial intelligence.

Personal portfolio for **Fred Motta** showcasing AI/ML integrations, full-stack MERN projects, and modern web engineering. Built with React 18, Vite 5, and Framer Motion 11.

---

## Features

- **Animated UI** — Smooth page transitions and scroll-triggered animations via Framer Motion 11
- **Typewriter Hero** — Dynamic role cycling with PropTypes-validated component
- **Filterable Portfolio** — Projects filtered by category (AI/ML, Full-Stack, Frontend)
- **Animated Skill Bars** — Viewport-triggered progress bars across 6 skill categories
- **Responsive Design** — Mobile-first layout with animated hamburger drawer
- **Dark Theme** — Modern dark aesthetic with gradient accents and glassmorphism
- **Tech Marquee** — Continuously scrolling technology strip
- **Contact Form** — Client-side validated contact form with async UX
- **Accessible** — `aria-current="page"`, `aria-expanded`, `aria-label`, focus-visible styles

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18.3 + React Router 6.30 |
| Build Tool | Vite 5.4 + esbuild |
| Animations | Framer Motion 11 |
| Icons | React Icons 5.5 |
| Testing | Vitest 2 + @testing-library/react 16 + happy-dom |
| Linting | ESLint 8 with eslint-plugin-react, react-hooks, react-refresh |
| Type Hints | PropTypes 15 + JSDoc |
| Deployment | Netlify / Render / GitHub Pages |

---

## Project Structure

```
fred-react-portfolio/
├── public/
│   ├── manifest.json         # PWA manifest with correct branding
│   ├── robots.txt
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header/           # Sticky nav, scroll glassmorphism, mobile drawer
│   │   ├── Footer/           # Brand, nav links, social links
│   │   ├── Navigation/       # Re-exports Header (legacy compat)
│   │   └── Project/          # Reusable project card with PropTypes
│   ├── data/                 # ALL content lives here — edit these, not components
│   │   ├── profile.js        # Bio, stats, social links, education (JSDoc annotated)
│   │   ├── projects.js       # Portfolio project entries (JSDoc annotated)
│   │   └── skills.js         # Skill categories, tools, certifications (JSDoc annotated)
│   ├── pages/
│   │   ├── Home/             # Hero, typewriter, AI providers strip, stats, marquee
│   │   ├── About/            # Avatar, bio, quick info, interests, education
│   │   ├── Portfolio/        # Filter tabs + project grid
│   │   ├── Resume/           # Animated skill bars + tools grid + cert cards
│   │   └── Contact/          # Info panel + validated contact form
│   ├── App.js                # Router shell with v7 future flags
│   ├── main.jsx              # Vite entry point (ReactDOM.createRoot)
│   ├── reportWebVitals.js    # Web Vitals v4 reporter (optional, opt-in)
│   └── setupTests.js         # Vitest + jest-dom global setup
├── .eslintrc.cjs             # ESLint 8 config (react, react-hooks, react-refresh)
├── vite.config.js            # Vite 5 + Vitest 2 unified config
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js ≥ 18.0.0
- npm ≥ 9.0.0

### Install & Run

```bash
# Clone
git clone https://github.com/fredm23579/fred-react-portfolio.git
cd fred-react-portfolio

# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev
```

### Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start Vite 5 dev server on port 3000 |
| `npm run build` | Production build → `dist/` with source maps |
| `npm run preview` | Preview production build locally |
| `npm test` | Run Vitest in watch mode |
| `npm run test:run` | Run Vitest once (CI mode) |
| `npm run coverage` | Generate V8 coverage report |
| `npm run lint` | ESLint with zero-warning policy |

---

## Customization

All content is driven by three data files — no component edits needed:

| File | Controls |
|---|---|
| `src/data/profile.js` | Name, bio, location, social links, stats, education |
| `src/data/projects.js` | Portfolio projects (title, description, tech, links) |
| `src/data/skills.js` | Skill categories with proficiency levels, tools, certifications |

---

## Deployment

### GitHub Pages (automated)

The site auto-deploys to **[https://fredm23579.github.io/fred-react-portfolio/](https://fredm23579.github.io/fred-react-portfolio/)** on every push to `master` via `.github/workflows/deploy.yml`.

The workflow runs lint → tests → build → deploy. A `public/404.html` redirect + script in `index.html` handle SPA deep-link routing on GitHub Pages.

### Manual / Other Hosts

```bash
npm run build
# Deploy dist/ to Netlify, Render, Vercel, etc.
```

For React Router to work on page reload, configure your host to serve `index.html` for all 404s.

**Netlify** — add `public/_redirects`:
```
/* /index.html 200
```

---

## Testing

```bash
npm run test:run     # one-off run
npm run coverage     # HTML coverage report in coverage/
```

Tests live next to source files (`*.test.js`). The setup uses:
- **Vitest 2** — zero-config, shares the Vite pipeline
- **@testing-library/react 16** — component rendering utilities
- **@testing-library/jest-dom** — DOM assertion matchers
- **happy-dom** — lightweight DOM environment (faster than jsdom)

---

## About

**Fred Motta** — Full-Stack Developer & AI Engineer, Riverside, California.

- **Education:** UCLA — Full-Stack Web Development (MERN Stack)
- **Specialties:** MERN stack · GraphQL · LLM integration · Multi-provider AI · PWA
- **AI Providers Integrated:** OpenAI · Anthropic Claude · Google Gemini · Perplexity · xAI Grok · Meta Llama
- **GitHub:** [@fredm23579](https://github.com/fredm23579) — 78+ repos · 240+ stars
- **Philosophy:** *Write code that humans can read, not just machines.*

| | |
|---|---|
| Email | fredm23579@gmail.com |
| LinkedIn | [in/fred-motta](https://linkedin.com/in/fred-motta) |
| Dev.to | [fredm23579](https://dev.to/fredm23579) |
| Twitter/X | [@fredm23579](https://twitter.com/fredm23579) |

---

## License

[MIT](LICENSE) © 2024 Fred Motta
