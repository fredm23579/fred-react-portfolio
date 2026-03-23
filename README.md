# Fred Motta — React Portfolio

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-4.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0080?logo=framer&logoColor=white)](https://www.framer.com/motion)
[![React Router](https://img.shields.io/badge/React_Router-6-CA4245?logo=reactrouter&logoColor=white)](https://reactrouter.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> **Full-Stack Developer & AI Engineer** — Building intelligent, scalable applications at the intersection of modern web and artificial intelligence.

Live portfolio for **Fred Motta** showcasing AI/ML integrations, full-stack MERN projects, and modern web engineering. Built with React 18, Vite, and Framer Motion.

---

## Features

- **Animated UI** — Smooth page transitions and scroll-triggered animations via Framer Motion
- **Typewriter Hero** — Dynamic role cycling on the landing page
- **Filterable Portfolio** — Projects filtered by category (AI/ML, Full-Stack, Frontend)
- **Animated Skill Bars** — Viewport-triggered progress bars across 6 skill categories
- **Responsive Design** — Mobile-first layout with animated hamburger menu
- **Dark Theme** — Modern dark aesthetic with gradient accents and glassmorphism
- **Tech Marquee** — Continuously scrolling technology strip
- **Contact Form** — Client-side validated contact form with async UX

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + React Router 6 |
| Build Tool | Vite 4 + esbuild |
| Animations | Framer Motion 11 |
| Icons | React Icons 5 |
| Testing | Vitest + Happy DOM |
| Linting | ESLint 8 (react, react-hooks, react-refresh) |
| Deployment | Netlify / Render / GitHub Pages |

---

## Project Structure

```
fred-react-portfolio/
├── public/               # Static assets & PWA manifest
├── src/
│   ├── components/
│   │   ├── Header/       # Sticky nav with scroll detection & mobile menu
│   │   ├── Footer/       # Brand, nav links, social links
│   │   ├── Navigation/   # Re-exports Header (legacy compat)
│   │   └── Project/      # Reusable project card component
│   ├── data/
│   │   ├── profile.js    # Bio, stats, social links, education
│   │   ├── projects.js   # Portfolio project entries
│   │   └── skills.js     # Skill categories, tools, certifications
│   ├── pages/
│   │   ├── Home/         # Hero, stats strip, tech marquee
│   │   ├── About/        # Bio, education, interests
│   │   ├── Portfolio/    # Filterable project grid
│   │   ├── Resume/       # Animated skill bars + tools + certs
│   │   └── Contact/      # Validated contact form + social links
│   ├── App.js            # Router shell
│   └── main.jsx          # React DOM entry point
├── index.html
├── vite.config.js
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

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
| `npm run dev` | Start Vite dev server on port 3000 |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build locally |
| `npm test` | Run Vitest unit tests |
| `npm run lint` | ESLint with zero-warning policy |

---

## Customization

All content is driven by three data files — no component changes needed for most updates:

| File | Controls |
|---|---|
| `src/data/profile.js` | Name, bio, location, social links, stats, education |
| `src/data/projects.js` | Portfolio projects (title, description, tech, links) |
| `src/data/skills.js` | Skill categories with proficiency levels, tools, certifications |

---

## Deployment

The `dist/` output is a static SPA. Deploy to any static host:

```bash
npm run build
# Deploy dist/ to Netlify, Render, GitHub Pages, Vercel, etc.
```

For React Router to work on reload, configure your host to redirect all 404s to `index.html`.

**Netlify** — add a `public/_redirects` file:
```
/* /index.html 200
```

---

## About

**Fred Motta** is a Full-Stack Developer and AI Engineer based in Riverside, California.

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
