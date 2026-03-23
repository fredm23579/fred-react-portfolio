import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import './Project.css';

const categoryColors = {
  'AI/ML': { bg: 'rgba(139, 92, 246, 0.12)', text: '#a78bfa', border: 'rgba(139, 92, 246, 0.3)' },
  'Full-Stack': { bg: 'rgba(99, 102, 241, 0.12)', text: '#818cf8', border: 'rgba(99, 102, 241, 0.3)' },
  Frontend: { bg: 'rgba(6, 182, 212, 0.12)', text: '#67e8f9', border: 'rgba(6, 182, 212, 0.3)' },
};

export default function Project({ project, index = 0 }) {
  const [expanded, setExpanded] = useState(false);
  const colors = categoryColors[project.category] || categoryColors['Full-Stack'];

  return (
    <motion.article
      className={`project-card ${project.featured ? 'project-card--featured' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Header */}
      <div className="project-card__header">
        <div className="project-card__meta">
          <span
            className="project-card__category"
            style={{ background: colors.bg, color: colors.text, borderColor: colors.border }}
          >
            {project.category}
          </span>
          {project.featured && (
            <span className="project-card__featured-badge">Featured</span>
          )}
        </div>
        <div className="project-card__links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source code on GitHub"
              className="project-card__link"
            >
              <FiGithub size={17} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View live demo"
              className="project-card__link project-card__link--live"
            >
              <FiExternalLink size={17} />
            </a>
          )}
        </div>
      </div>

      {/* Title & Description */}
      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__description">{project.description}</p>

      {/* Highlights */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            className="project-card__details"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="project-card__highlights">
              {project.highlights.map((h, i) => (
                <li key={i} className="project-card__highlight">
                  <span className="project-card__highlight-dot" />
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tech Stack */}
      <div className="project-card__tech">
        {project.tech.slice(0, expanded ? project.tech.length : 5).map((t) => (
          <span key={t} className="project-card__tech-tag">
            {t}
          </span>
        ))}
        {!expanded && project.tech.length > 5 && (
          <span className="project-card__tech-more">+{project.tech.length - 5}</span>
        )}
      </div>

      {/* Expand toggle */}
      <button
        className="project-card__toggle"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        {expanded ? (
          <><FiChevronUp size={14} /> Show less</>
        ) : (
          <><FiChevronDown size={14} /> View details</>
        )}
      </button>
    </motion.article>
  );
}
