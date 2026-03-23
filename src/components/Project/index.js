/**
 * @file Project/index.js
 * @description Animated project card used on the Portfolio page.
 *
 * Renders a card with category badge, GitHub/live links, description, tech tags,
 * and an expand toggle that reveals bullet-point highlights plus the full tech list.
 */
import { useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import './Project.css';

/** Per-category badge color tokens — bg/text/border triple */
const categoryColors = {
  'AI/ML':      { bg: 'rgba(139, 92, 246, 0.12)', text: '#a78bfa', border: 'rgba(139, 92, 246, 0.3)' },
  'Full-Stack': { bg: 'rgba(99, 102, 241, 0.12)',  text: '#818cf8', border: 'rgba(99, 102, 241, 0.3)' },
  Frontend:     { bg: 'rgba(6, 182, 212, 0.12)',   text: '#67e8f9', border: 'rgba(6, 182, 212, 0.3)' },
};

/**
 * ProjectCard component.
 *
 * @param {Object} props
 * @param {import('../../data/projects').Project} props.project - Project data
 * @param {number} [props.index=0] - Grid index used to stagger entrance animation
 */
export default function Project({ project, index = 0 }) {
  const [expanded, setExpanded] = useState(false);

  // Fall back to Full-Stack colors for any unlisted category
  const colors = categoryColors[project.category] ?? categoryColors['Full-Stack'];

  return (
    <motion.article
      className={`project-card ${project.featured ? 'project-card--featured' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      aria-label={`${project.title} — ${project.category} project`}
    >
      {/* ── Header: category badge + external links ──────────────────── */}
      <div className="project-card__header">
        <div className="project-card__meta">
          <span
            className="project-card__category"
            style={{ background: colors.bg, color: colors.text, borderColor: colors.border }}
          >
            {project.category}
          </span>
          {project.featured && (
            <span className="project-card__featured-badge" aria-label="Featured project">
              Featured
            </span>
          )}
        </div>

        <div className="project-card__links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code on GitHub`}
              className="project-card__link"
            >
              <FiGithub size={17} aria-hidden="true" />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} live demo`}
              className="project-card__link project-card__link--live"
            >
              <FiExternalLink size={17} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>

      {/* ── Title & short description ────────────────────────────────── */}
      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__description">{project.description}</p>

      {/* ── Collapsible highlights list ──────────────────────────────── */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            id={`project-details-${project.id}`}
            className="project-card__details"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="project-card__highlights" aria-label="Project highlights">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="project-card__highlight">
                  <span className="project-card__highlight-dot" aria-hidden="true" />
                  {highlight}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Tech tag strip ───────────────────────────────────────────── */}
      <div className="project-card__tech" aria-label="Technologies used">
        {project.tech
          .slice(0, expanded ? project.tech.length : 5)
          .map((t) => (
            <span key={t} className="project-card__tech-tag">{t}</span>
          ))}
        {/* Show an overflow count when collapsed */}
        {!expanded && project.tech.length > 5 && (
          <span
            className="project-card__tech-more"
            aria-label={`${project.tech.length - 5} more technologies`}
          >
            +{project.tech.length - 5}
          </span>
        )}
      </div>

      {/* ── Expand / collapse toggle ─────────────────────────────────── */}
      <button
        className="project-card__toggle"
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
        aria-controls={`project-details-${project.id}`}
      >
        {expanded ? (
          <><FiChevronUp size={14} aria-hidden="true" /> Show less</>
        ) : (
          <><FiChevronDown size={14} aria-hidden="true" /> View details</>
        )}
      </button>
    </motion.article>
  );
}

Project.propTypes = {
  /** Full project data object — see src/data/projects.js for shape */
  project: PropTypes.shape({
    id:              PropTypes.number.isRequired,
    title:           PropTypes.string.isRequired,
    description:     PropTypes.string.isRequired,
    longDescription: PropTypes.string,
    tech:            PropTypes.arrayOf(PropTypes.string).isRequired,
    category:        PropTypes.oneOf(['AI/ML', 'Full-Stack', 'Frontend']).isRequired,
    github:          PropTypes.string,
    live:            PropTypes.string,
    highlights:      PropTypes.arrayOf(PropTypes.string).isRequired,
    featured:        PropTypes.bool,
  }).isRequired,
  /** Grid position used to stagger entrance animations (default 0) */
  index: PropTypes.number,
};
