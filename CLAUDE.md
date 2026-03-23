# CLAUDE.md — AI Context for fred-react-portfolio

This file provides Claude Code with all context needed to work effectively in this codebase.

---

## Project Identity

**Owner:** Fred Motta
**Role:** Full-Stack Developer & AI Engineer
**Location:** Riverside, California
**Education:** UCLA — Full-Stack Web Development (MERN Stack)
**Contact:** fredm23579@gmail.com | [github.com/fredm23579](https://github.com/fredm23579)
**Philosophy:** *Write code that humans can read, not just machines.*

**What this repo is:** A personal portfolio SPA built with React 18 + Vite 5, showcasing Fred's AI/ML work, full-stack projects, and skills to modern employers. No backend. Static export.

---

## Commands

```bash
npm run dev          # Vite 5 dev server → http://localhost:3000
npm run build        # Production build → dist/ (with source maps)
npm run preview      # Preview production build locally
npm run lint         # ESLint (zero-warning policy — must pass clean)
npm test             # Vitest watch mode
npm run test:run     # Vitest one-shot (CI)
npm run coverage     # V8 coverage report → coverage/
```

---

## Stack Versions (as of 2025)

| Package | Version |
|---|---|
| React | 18.3.x |
| React Router | 6.30.x |
| Vite | 5.4.x |
| Framer Motion | 11.x |
| Vitest | 2.x |
| @testing-library/react | 16.x |
| ESLint | 8.x |
| Node.js (required) | ≥ 18 |

> **framer-motion:** Stays at v11. v12 has breaking API changes (motion() API).
> **React Router:** Stays at v6. v7 is a full framework (like Remix), not a drop-in upgrade.
> **React:** Stays at v18. v19 has breaking changes in concurrent features.
> **Vite:** 5.x is the current stable LTS. v8 would fix the esbuild dev-server advisory but requires migration effort.

---

## Architecture

```
src/
├── App.js              # BrowserRouter with v7 future flags + Routes shell
├── main.jsx            # ReactDOM.createRoot entry point
├── reportWebVitals.js  # Web Vitals v4 reporter (onCLS, onINP, onFCP, onLCP, onTTFB)
├── setupTests.js       # Vitest: imports @testing-library/jest-dom/vitest
├── index.css           # Global CSS custom properties & resets
├── App.css             # App-level flex layout (header + main + footer)
├── components/
│   ├── Header/         # Sticky header, scroll glassmorphism, mobile drawer, aria-current
│   ├── Footer/         # Brand + nav + social links + contact CTA
│   ├── Navigation/     # Thin re-export of Header (backward compat — do not delete)
│   └── Project/        # Project card with PropTypes, expand/collapse, aria attrs
├── data/               # ← ALL content lives here. Edit these, not components.
│   ├── profile.js      # Bio, stats, social URLs, education, philosophy
│   ├── projects.js     # Portfolio projects array with JSDoc @typedef
│   └── skills.js       # Skill categories (name/level/color), tools, certs
└── pages/
    ├── Home/           # Hero + TypewriterText (PropTypes) + AI strip + stats + marquee
    ├── About/          # Avatar + bio + quick info + interests + education
    ├── Portfolio/      # Filter tabs (All / AI/ML / Full-Stack / Frontend) + project grid
    ├── Resume/         # Animated skill bars + tools tag cloud + cert cards
    └── Contact/        # Info panel + validated contact form (client-only)
```

---

## Key Patterns

### Data-Driven Content
All portfolio content lives in `src/data/`. Components import and render it. **Never hardcode personal info in components.**

```js
// Correct
import profile from '../../data/profile';
<h1>{profile.name}</h1>

// Wrong — hardcoded content breaks the data/component separation
<h1>Fred Motta</h1>
```

### Animation Conventions (Framer Motion 11)
- Standard entrance: `initial={{ opacity: 0, y: 20 }}` → `animate={{ opacity: 1, y: 0 }}`
- Standard easing: `ease: [0.22, 1, 0.36, 1]` (custom ease-out)
- Stagger: `staggerChildren: 0.1`, `delayChildren: 0.2`
- Scroll-triggered: `whileInView` + `viewport={{ once: true }}` — never re-triggers on scroll back
- Spring indicators: `type: 'spring', stiffness: 380, damping: 30`

### CSS Architecture
- BEM naming: `.component__element--modifier`
- Each component/page owns a co-located `.css` file — no cross-file style leakage
- Global design tokens live in `src/index.css` as CSS custom properties
- Dynamic per-item theming via inline `style` props and CSS custom properties:
  ```jsx
  <div style={{ '--skill-color': category.color }}>
  ```
  Then in CSS: `background: color-mix(in srgb, var(--skill-color) 12%, transparent);`

### Routing (React Router 6)
Routes:
- `/` → Home
- `/about` → About
- `/portfolio` → Portfolio
- `/resume` → Resume
- `/contact` → Contact

The `BrowserRouter` has `future={{ v7_startTransition: true, v7_relativeSplatPath: true }}` to opt in to v7 behaviour and silence upgrade warnings.

### PropTypes
All components that accept props must define `ComponentName.propTypes`. The ESLint rule `react/prop-types: 'warn'` enforces this. Use `PropTypes.shape({})` for complex object props.

### JSX in .js Files
The codebase uses `.js` extension for component files (not `.jsx`). Vite 5 is configured to handle this via:
1. `react({ include: /\.(jsx|js)$/ })` plugin option
2. `esbuild.loader: 'jsx'` + `include: /src\/.*\.[jt]sx?$/` for the build pipeline
3. `optimizeDeps.esbuildOptions.loader: { '.js': 'jsx' }` for pre-bundling

**Do not rename component files to `.jsx`** without updating all three config sections.

### Accessibility Checklist
When modifying nav or interactive elements:
- Active nav links: `aria-current="page"`
- Toggle buttons: `aria-expanded={bool}` + `aria-controls="target-id"`
- Icon-only elements: `aria-hidden="true"` on SVG/icon spans
- Links with icon content: explicit `aria-label` describing the destination
- Focus ring: `:focus-visible` styles in `index.css` (do not remove)

---

## Test Setup

```
Vitest 2 → happy-dom environment → @testing-library/react 16
setupFiles: src/setupTests.js (imports @testing-library/jest-dom/vitest)
globals: true (describe/it/expect available without import)
```

Tests live next to source (`src/App.test.js`). Run `npm run test:run` for CI.

---

## Fred's Background (for AI context)

**AI / LLM Skills:**
- Integrated 6 AI providers: OpenAI GPT-4o, Anthropic Claude, Google Gemini, Perplexity, xAI Grok, Meta Llama
- Prompt engineering, LLM integration, AI agent design, RAG systems
- Built a universal CLI assistant (openai-chat-commandline) aggregating all 6 providers with web search, file attachments, persistent memory, and Google Drive/Gmail OAuth2

**Full-Stack (MERN):**
- React 18, React Router 6, Apollo Client 3, Vite 5
- Node.js, Express 4, Apollo Server 4, GraphQL
- MongoDB + Mongoose, MySQL + Sequelize ORM
- JWT auth, bcrypt, Stripe payments, PWA + Workbox

**Other Skills:**
- TypeScript, Python (FastAPI), R, Java
- Docker, AWS, GitHub Actions CI/CD
- Netlify, Render, Heroku, GitHub Pages

**Key Projects:**
1. `openai-chat-commandline` — Multi-provider AI CLI
2. `e-commerce-site` — Full MERN + GraphQL + Stripe + PWA
3. `mern-book-search` — REST → GraphQL migration
4. `tech-blog-mvc` — Express MVC blog (live on Heroku)
5. `pets-bytes` — Google Maps + Places real-time pet finder
6. `travel-tales-exchange` — Social travel blogging platform

**GitHub:** 78+ repos, 240+ stars

---

## What NOT to Do

- Do not add a backend — this is a static SPA
- Do not install Tailwind, Bootstrap, or other CSS frameworks — uses CSS custom properties
- Do not hardcode personal info in components — always use `src/data/` files
- Do not use class components — functional components with hooks only
- Do not use `useEffect` for animations — use Framer Motion `whileInView`
- Do not omit `viewport={{ once: true }}` on scroll animations
- Do not rename `.js` → `.jsx` without updating all three Vite esbuild config sections
- Do not upgrade framer-motion to v12 (breaking API changes)
- Do not upgrade to React Router v7 (it becomes a full framework, not a router)
- Do not run `npm audit fix --force` — it would install Vite 8 (breaking)
- Do not skip the `react/prop-types` ESLint rule — new components must define PropTypes

---

## Known Acceptable Issues

- **6 moderate audit advisories** — all are the esbuild dev-server GHSA-67mh-4wv8-2f99 advisory bundled with Vite 5. Only affects `npm run dev`, not production. Fix requires Vite 8.
- **"CJS build of Vite's Node API is deprecated"** warning — cosmetic, from Vitest internals calling Vite's CJS API. Does not affect functionality.

---

## Deployment Notes

- Build: `npm run build` → static files in `dist/`
- SPA routing requires server-side catch-all: redirect all 404s → `index.html`
- Netlify: add `public/_redirects` → `/* /index.html 200`
- No environment variables required (contact form is client-only simulation)
- Source maps are emitted to `dist/` — consider `.gitignore`-ing `dist/` if size is a concern
