import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiTerminal,
  FiCpu,
  FiLayers,
  FiZap,
  FiCode,
} from 'react-icons/fi';
import type { IconType } from 'react-icons';
import profile from '../../data/profile';
import './Home.css';

const roles = [
  'Full-Stack Developer',
  'AI Engineer',
  'MERN Specialist',
  'LLM Integrator',
  'Open Source Contributor',
];

interface AiProvider {
  name: string;
  color: string;
}

const aiProviders: AiProvider[] = [
  { name: 'OpenAI', color: '#10b981' },
  { name: 'Claude', color: '#8b5cf6' },
  { name: 'Gemini', color: '#06b6d4' },
  { name: 'Perplexity', color: '#6366f1' },
  { name: 'Grok', color: '#f59e0b' },
  { name: 'Llama', color: '#ef4444' },
];

interface Highlight {
  icon: IconType;
  label: string;
  value: string;
  color: string;
}

const highlights: Highlight[] = [
  { icon: FiCpu, label: 'AI Integration', value: '6 Providers', color: '#8b5cf6' },
  { icon: FiLayers, label: 'MERN Stack', value: 'Full-Stack', color: '#6366f1' },
  { icon: FiGithub, label: 'Open Source', value: '78+ Repos', color: '#06b6d4' },
  { icon: FiZap, label: 'Live Projects', value: '10+ Deployed', color: '#10b981' },
];

interface TypewriterTextProps {
  texts: string[];
  speed?: number;
  pause?: number;
}

function TypewriterText({ texts, speed = 80, pause = 2000 }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIndex < current.length) {
          setDisplayText(current.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setDeleting(true), pause);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(current.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      }
    }, deleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, textIndex, texts, speed, pause]);

  return (
    <span className="typewriter">
      {displayText}
      <span className="typewriter__cursor" aria-hidden="true" />
    </span>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Home() {
  return (
    <div className="home">
      {/* Background */}
      <div className="home__bg">
        <div className="home__bg-grid" />
        <div className="home__bg-orb home__bg-orb--1" />
        <div className="home__bg-orb home__bg-orb--2" />
        <div className="home__bg-orb home__bg-orb--3" />
      </div>

      {/* Hero */}
      <section className="home__hero container">
        <motion.div
          className="home__hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status badge */}
          <motion.div variants={itemVariants} className="home__status">
            <span className="home__status-dot" />
            <span>Available for opportunities</span>
          </motion.div>

          {/* Greeting */}
          <motion.p variants={itemVariants} className="home__greeting">
            <FiTerminal size={14} />
            Hello, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1 variants={itemVariants} className="home__name">
            {profile.name}
          </motion.h1>

          {/* Typewriter */}
          <motion.div variants={itemVariants} className="home__role">
            <TypewriterText texts={roles} speed={75} pause={2200} />
          </motion.div>

          {/* Tagline */}
          <motion.p variants={itemVariants} className="home__tagline">
            {profile.tagline}
          </motion.p>

          {/* AI Providers pill */}
          <motion.div variants={itemVariants} className="home__ai-strip">
            <span className="home__ai-label">
              <FiCpu size={12} />
              AI providers integrated:
            </span>
            <div className="home__ai-badges">
              {aiProviders.map((p) => (
                <span
                  key={p.name}
                  className="home__ai-badge"
                  style={{ '--badge-color': p.color } as React.CSSProperties}
                >
                  {p.name}
                </span>
              ))}
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="home__ctas">
            <Link to="/portfolio" className="btn btn-primary home__cta-primary">
              View My Work <FiArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Let&apos;s Talk
            </Link>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline home__github-btn"
              aria-label="GitHub"
            >
              <FiGithub size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline home__github-btn"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={18} />
            </a>
          </motion.div>
        </motion.div>

        {/* Code Panel */}
        <motion.div
          className="home__code-panel"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="code-panel">
            <div className="code-panel__header">
              <div className="code-panel__dots">
                <span />
                <span />
                <span />
              </div>
              <span className="code-panel__filename">
                <FiCode size={12} />
                fred.config.js
              </span>
            </div>
            <pre className="code-panel__body">
              <code>{`const developer = {
  name: "${profile.name}",
  location: "${profile.location}",

  stack: ["React", "Node.js",
          "MongoDB", "GraphQL"],

  ai: {
    models: ["GPT-4o", "Claude 3.5",
             "Gemini", "Grok"],
    skills: ["Prompt Engineering",
             "LLM Integration",
             "Agent Design",
             "RAG Systems"],
  },

  education: "UCLA",
  openToWork: true,

  passion: "Build things that matter.",
};`}</code>
            </pre>
          </div>
        </motion.div>
      </section>

      {/* Stats Strip */}
      <motion.section
        className="home__stats container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {highlights.map((item, i) => (
          <motion.div
            key={item.label}
            className="home__stat"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            style={{ '--stat-color': item.color } as React.CSSProperties}
          >
            <div className="home__stat-icon">
              <item.icon size={20} />
            </div>
            <div>
              <div className="home__stat-value">{item.value}</div>
              <div className="home__stat-label">{item.label}</div>
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* Tech Marquee */}
      <section className="home__marquee">
        <div className="home__marquee-track">
          {[
            'React', 'Node.js', 'MongoDB', 'GraphQL', 'TypeScript',
            'Python', 'Docker', 'AWS', 'Vite', 'Tailwind',
            'OpenAI', 'Anthropic', 'Express', 'PostgreSQL', 'JWT',
            'Framer Motion', 'Apollo', 'Stripe', 'PWA', 'Next.js',
          ].concat([
            'React', 'Node.js', 'MongoDB', 'GraphQL', 'TypeScript',
            'Python', 'Docker', 'AWS', 'Vite', 'Tailwind',
          ]).map((tech, i) => (
            <span key={i} className="home__marquee-item">{tech}</span>
          ))}
        </div>
      </section>
    </div>
  );
}
