/**
 * @file profile.js
 * @description Personal profile data for Fred Motta.
 *
 * Single source of truth for bio copy, contact links, GitHub stats, education,
 * and availability status. Edit here — all components pull data via import.
 *
 * @typedef {Object} ProfileStat
 * @property {string} label - Human-readable stat label
 * @property {string} value - Formatted stat value (e.g. "78+")
 *
 * @typedef {Object} Education
 * @property {string} institution - Full institution name
 * @property {string} degree     - Program or certificate name
 * @property {string} focus      - Key technologies / focus areas
 * @property {string} email      - Institutional email address
 */

/** @type {Object} */
const profile = {
  name: 'Fred Motta',
  title: 'Full-Stack Developer & AI Engineer',
  tagline:
    'Building intelligent, scalable applications at the intersection of modern web and artificial intelligence.',

  // ── Contact ──────────────────────────────────────────────────────────────
  email: 'fredm23579@gmail.com',
  location: 'Riverside, California',

  // ── Social / profile links ────────────────────────────────────────────────
  github: 'https://github.com/fredm23579',
  linkedin: 'https://linkedin.com/in/fred-motta',
  twitter: 'https://twitter.com/fredm23579',
  devto: 'https://dev.to/fredm23579',

  // ── Bio paragraphs — rendered in order on the About page ─────────────────
  bio: [
    "I'm a full-stack developer and AI engineer based in Riverside, California, passionate about building intelligent applications that push the boundaries of what's possible on the web.",
    'With a background from UCLA and deep expertise in the MERN stack, I specialize in integrating modern AI/ML capabilities — including LLMs, multi-modal APIs, and autonomous agents — into production-ready web applications.',
    "I believe in writing code that humans can read, not just machines. My approach combines clean architecture, performance optimization, and thoughtful UX to create software that truly matters.",
  ],

  /** Signature philosophy — displayed as a blockquote on the About page */
  philosophy: 'Write code that humans can read, not just machines.',

  // ── Interests — rendered as chips on the About page ──────────────────────
  interests: [
    'Large Language Models & Prompt Engineering',
    'Distributed Systems Architecture',
    'Progressive Web Applications',
    'Open Source Contributions',
    'Quantum Computing Theory',
    'Data Science & Visualization',
  ],

  // ── Education ────────────────────────────────────────────────────────────
  /** @type {Education} */
  education: {
    institution: 'University of California, Los Angeles (UCLA)',
    degree: 'Full-Stack Web Development',
    focus: 'JavaScript, MERN Stack, Modern Web Technologies',
    email: 'motta@g.ucla.edu',
  },

  // ── Stats strip — shown on the Home hero and About page ──────────────────
  /** @type {ProfileStat[]} */
  stats: [
    { label: 'GitHub Repositories', value: '78+' },
    { label: 'GitHub Stars', value: '240+' },
    { label: 'Live Projects', value: '10+' },
    { label: 'AI Providers Integrated', value: '6' },
  ],

  /** Short availability line shown in the About quick-info card */
  availability: 'Open to full-time roles, freelance, and collaboration',
};

export default profile;
