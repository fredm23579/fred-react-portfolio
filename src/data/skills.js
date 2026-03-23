/**
 * @file skills.js
 * @description Skills, tools, and certifications data for Fred Motta.
 *
 * Drives the Resume page skill-bar grid, tools tag cloud, and cert cards.
 * Skill `level` is a 0–100 integer used as a progress-bar percentage.
 *
 * @typedef {Object} Skill
 * @property {string} name  - Skill display name
 * @property {number} level - Proficiency 0–100
 *
 * @typedef {Object} SkillCategory
 * @property {string}  name   - Category display name (must match categoryIcons key in Resume page)
 * @property {string}  icon   - Icon hint string (resolved to a react-icon in Resume/index.js)
 * @property {string}  color  - Hex color used for icon backgrounds and progress bars
 * @property {Skill[]} skills - Ordered list of skills in this category
 *
 * @typedef {Object} Certification
 * @property {string} name   - Certificate / program name
 * @property {string} issuer - Issuing organization
 * @property {string} year   - Year completed
 * @property {string} focus  - Key topics covered
 */

const skills = {
  /** @type {SkillCategory[]} */
  categories: [
    // ── AI & Machine Learning ─────────────────────────────────────────────
    {
      name: 'AI & Machine Learning',
      icon: 'brain',
      color: '#8b5cf6',
      skills: [
        { name: 'OpenAI API', level: 95 },
        { name: 'Anthropic Claude', level: 92 },
        { name: 'Prompt Engineering', level: 93 },
        { name: 'LLM Integration', level: 90 },
        { name: 'AI Agent Design', level: 85 },
        { name: 'Google Gemini', level: 88 },
        { name: 'RAG Systems', level: 80 },
        { name: 'xAI Grok / Meta Llama', level: 82 },
      ],
    },

    // ── Frontend ──────────────────────────────────────────────────────────
    {
      name: 'Frontend',
      icon: 'monitor',
      color: '#06b6d4',
      skills: [
        { name: 'React 18', level: 95 },
        { name: 'React Router 6', level: 93 },
        { name: 'Vite', level: 90 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'TypeScript', level: 82 },
        { name: 'Progressive Web Apps', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'Framer Motion', level: 78 },
      ],
    },

    // ── Backend ───────────────────────────────────────────────────────────
    {
      name: 'Backend',
      icon: 'server',
      color: '#10b981',
      skills: [
        { name: 'Node.js', level: 95 },
        { name: 'Express.js', level: 93 },
        { name: 'REST APIs', level: 95 },
        { name: 'JWT Authentication', level: 92 },
        { name: 'GraphQL', level: 88 },
        { name: 'Apollo Server 4', level: 87 },
        { name: 'FastAPI (Python)', level: 78 },
        { name: 'WebSockets', level: 75 },
      ],
    },

    // ── Languages ─────────────────────────────────────────────────────────
    {
      name: 'Languages',
      icon: 'code',
      color: '#6366f1',
      skills: [
        { name: 'JavaScript (ES2024)', level: 97 },
        { name: 'HTML5 / CSS3', level: 95 },
        { name: 'SQL', level: 88 },
        { name: 'Python', level: 85 },
        { name: 'TypeScript', level: 82 },
        { name: 'Bash/Shell', level: 75 },
        { name: 'R', level: 72 },
        { name: 'Java', level: 70 },
      ],
    },

    // ── Databases ─────────────────────────────────────────────────────────
    {
      name: 'Databases',
      icon: 'database',
      color: '#f59e0b',
      skills: [
        { name: 'MongoDB', level: 92 },
        { name: 'Mongoose ODM', level: 90 },
        { name: 'MySQL', level: 88 },
        { name: 'Sequelize ORM', level: 87 },
        { name: 'IndexedDB', level: 78 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'Redis', level: 70 },
      ],
    },

    // ── DevOps & Cloud ────────────────────────────────────────────────────
    {
      name: 'DevOps & Cloud',
      icon: 'cloud',
      color: '#ef4444',
      skills: [
        { name: 'Git / GitHub', level: 95 },
        { name: 'Heroku', level: 90 },
        { name: 'Render', level: 88 },
        { name: 'Netlify', level: 88 },
        { name: 'Docker', level: 80 },
        { name: 'GitHub Actions (CI/CD)', level: 78 },
        { name: 'AWS', level: 75 },
        { name: 'Linux / CLI', level: 85 },
      ],
    },
  ],

  // ── Tools & Technologies tag cloud ───────────────────────────────────────
  tools: [
    'VS Code', 'Claude Code', 'GitHub Copilot', 'Postman', 'Insomnia', 'Figma',
    'ESLint', 'Prettier', 'Vitest', 'Webpack', 'Babel',
    'npm / yarn', 'Workbox', 'Stripe', 'Google OAuth2',
  ],

  // ── Certifications ────────────────────────────────────────────────────────
  /** @type {Certification[]} */
  certifications: [
    {
      name: 'Full-Stack Web Development',
      issuer: 'UCLA Extension',
      year: '2024',
      focus: 'MERN Stack, JavaScript, Modern Web Technologies',
    },
  ],
};

export default skills;
