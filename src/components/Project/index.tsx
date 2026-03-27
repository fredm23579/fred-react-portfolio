import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import type { Project as ProjectType } from '../../data/projects';
import './Project.css';

interface CategoryColors {
  bg: string;
  text: string;
  border: string;
}

const categoryColors: Record<string, CategoryColors> = {
  'AI/ML':      { bg: 'rgba(139, 92, 246, 0.12)', text: '#a78bfa', border: 'rgba(139, 92, 246, 0.3)' },
  'Full-Stack': { bg: 'rgba(99, 102, 241, 0.12)',  text: '#818cf8', border: 'rgba(99, 102, 241, 0.3)' },
  Frontend:     { bg: 'rgba(6, 182, 212, 0.12)',   text: '#67e8f9', border: 'rgba(6, 182, 212, 0.3)' },
};

interface ProjectProps {
  project: ProjectType;
  index?: number;
}

export default function Project({ project, index = 0 }: ProjectProps) {
  const [expanded, setExpanded] = useState(false);

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
      {/* Header: category badge + external links */}
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

      {/* Title & short description */}
      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__description">{project.description}</p>

      {/* Collapsible highlights list */}
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

      {/* Tech tag strip */}
      <div className="project-card__tech" aria-label="Technologies used">
        {project.tech
          .slice(0, expanded ? project.tech.length : 5)
          .map((t) => (
            <span key={t} className="project-card__tech-tag">{t}</span>
          ))}
        {!expanded && project.tech.length > 5 && (
          <span
            className="project-card__tech-more"
            aria-label={`${project.tech.length - 5} more technologies`}
          >
            +{project.tech.length - 5}
          </span>
        )}
      </div>

      {/* Expand / collapse toggle */}
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
