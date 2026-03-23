# CLAUDE.md — AI Context for fred-react-portfolio

This file provides Claude Code with everything needed to work effectively in this codebase.

---

## Project Identity

**Owner:** Fred Motta
**Role:** Full-Stack Developer & AI Engineer
**Location:** Riverside, California
**Education:** UCLA — Full-Stack Web Development (MERN Stack)
**Contact:** fredm23579@gmail.com | [github.com/fredm23579](https://github.com/fredm23579)
**Philosophy:** *Write code that humans can read, not just machines.*

**What this repo is:** A personal portfolio SPA built with React 18 + Vite, showcasing Fred's AI/ML work, full-stack projects, and skills to modern employers.

---

## Commands

```bash
npm run dev        # Vite dev server → http://localhost:3000
npm run build      # Production build → dist/
npm run preview    # Preview production build locally
npm test           # Vitest unit tests
npm run lint       # ESLint (zero-warning policy, fails CI if any warnings)
```

---

## Architecture

Single-page React application with client-side routing. No SSR. No backend. Static export.

```
src/
├── App.js              # BrowserRouter + Routes shell
├── main.jsx            # ReactDOM.createRoot entry
├── index.css           # Global CSS variables & resets
├── App.css             # App-level layout styles
├── components/
│   ├── Header/         # Sticky header, scroll detection, mobile menu
│   ├── Footer/         # Brand + nav + social + contact CTA
│   ├── Navigation/     # Thin re-export of Header (backward compat only)
│   └── Project/        # Project card (used by Portfolio page)
├── data/               # ALL content lives here — edit these, not components
│   ├── profile.js      # Bio, stats, social URLs, education, philosophy
│   ├── projects.js     # Portfolio projects array
│   └── skills.js       # Skill categories (name/level/color), tools, certs
└── pages/
    ├── Home/           # Hero + typewriter + AI providers strip + stats + marquee
    ├── About/          # Avatar + bio + quick info + interests + education
    ├── Portfolio/      # Filter tabs + project grid (uses Project component)
    ├── Resume/         # Animated skill bars + tools grid + cert cards
    └── Contact/        # Info panel + validated contact form
```

---

## Key Patterns

### Data-Driven Content
All portfolio content lives in `src/data/`. Components consume it via named imports. To update content, **edit data files only** — do not hardcode strings in components.

```js
// Correct: pull from data
import profile from '../../data/profile';
<h1>{profile.name}</h1>

// Wrong: hardcode in component
<h1>Fred Motta</h1>
```

### Animation Conventions
- Use `framer-motion` for all enter/exit animations
- Standard stagger pattern: `staggerChildren: 0.1`, `delayChildren: 0.2`
- Standard item variant: `{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }`
- Scroll-triggered: `whileInView` + `viewport={{ once: true }}` — never re-trigger
- Easing: `[0.22, 1, 0.36, 1]` (custom ease-out) for most transitions

### CSS Architecture
- BEM naming: `.component__element--modifier`
- Each component owns a co-located `.css` file
- Global design tokens are CSS custom properties in `index.css`
- Use `--skill-color`, `--badge-color`, `--stat-color`, `--detail-color` pattern for dynamic per-item theming via inline `style` props

### Routing
React Router 6 with `<Routes>` / `<Route>`. Routes:
- `/` — Home
- `/about` — About
- `/portfolio` — Portfolio
- `/resume` — Resume
- `/contact` — Contact

Header uses `useLocation()` to highlight active nav link with an animated underline indicator (`layoutId="nav-indicator"`).

### Component File Conventions
- All components use `export default function ComponentName()`
- Prop validation via `prop-types` (installed, use it for new components)
- `.js` extension for components (Vite is configured to treat `.js` as JSX via esbuild loader)
- Co-locate `Component.css` next to `index.js` — never use global styles for component-specific rules

---

## Developer Profile Data Reference

### profile.js fields
```
name, title, tagline, email, location
github, linkedin, twitter, devto
bio[]              — array of paragraph strings
philosophy         — single quote string
interests[]        — array of interest strings
education { institution, degree, focus, email }
stats[]            — [{ label, value }]
availability       — short string
```

### projects.js fields
```
id, title, description, longDescription
tech[]             — array of tech name strings
category           — 'AI/ML' | 'Full-Stack' | 'Frontend'
github             — URL string or null
live               — URL string or null
highlights[]       — array of bullet strings
featured           — boolean
```

### skills.js fields
```
categories[]       — [{ name, icon, color, skills: [{ name, level }] }]
tools[]            — flat array of tool name strings
certifications[]   — [{ name, issuer, year, focus }]
```

---

## Fred's Background (for AI context)

**AI / LLM Skills:**
- Integrated 6 AI providers: OpenAI GPT-4o, Anthropic Claude, Google Gemini, Perplexity, xAI Grok, Meta Llama
- Prompt engineering, LLM integration, AI agent design, RAG systems
- Built a universal CLI assistant aggregating all 6 providers under one interface with web search, file attachments, persistent memory, and Google Drive/Gmail OAuth2

**Full-Stack (MERN):**
- React 18, React Router 6, Apollo Client 3, Vite 6
- Node.js, Express 4, Apollo Server 4, GraphQL
- MongoDB + Mongoose, MySQL + Sequelize ORM
- JWT auth, bcrypt, Stripe payments, PWA + Workbox

**Other Skills:**
- TypeScript, Python (FastAPI), R, Java
- Docker, AWS, GitHub Actions CI/CD
- Netlify, Render, Heroku, GitHub Pages

**Key Projects:**
1. `openai-chat-commandline` — Multi-provider AI CLI (OpenAI, Claude, Gemini, Grok, Llama, Perplexity)
2. `e-commerce-site` — Full MERN + GraphQL + Stripe + PWA e-commerce platform
3. `mern-book-search` — REST→GraphQL migration with Google Books API
4. `tech-blog-mvc` — Express MVC blog (live on Heroku)
5. `pets-bytes` — Google Maps + Places API real-time pet service finder
6. `travel-tales-exchange` — Social travel blogging platform

**GitHub:** 78+ repos, 240+ stars, UCLA email: motta@g.ucla.edu

---

## What NOT to Do

- Do not add a backend — this is a static SPA
- Do not install CSS frameworks (Tailwind, Bootstrap) — the project uses custom CSS vars
- Do not hardcode personal info in components — always use `src/data/` files
- Do not use class components — functional components only
- Do not use `useEffect` for animations — use Framer Motion's `whileInView`
- Do not skip `viewport={{ once: true }}` on scroll animations — re-triggering looks broken
- Do not rename `.js` → `.jsx` without updating import paths and vite config

---

## Deployment Notes

- Build: `npm run build` → static files in `dist/`
- SPA routing requires server-side redirect of all 404s → `index.html`
- Netlify: add `public/_redirects` with `/* /index.html 200`
- No environment variables required for current build (contact form is client-only simulation)
