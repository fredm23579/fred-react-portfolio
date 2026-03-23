import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiArrowRight } from 'react-icons/fi';
import Project from '../../components/Project';
import projects from '../../data/projects';
import profile from '../../data/profile';
import './Portfolio.css';

const categories = ['All', 'AI/ML', 'Full-Stack', 'Frontend'];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="portfolio section">
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">{'// portfolio'}</span>
          <h2>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A selection of projects spanning AI integration, full-stack development,
            and modern web experiences.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="portfolio__filters"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`portfolio__filter-btn ${activeFilter === cat ? 'portfolio__filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
              <span className="portfolio__filter-count">
                {cat === 'All' ? projects.length : projects.filter((p) => p.category === cat).length}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="portfolio__grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {filtered.map((project, i) => (
              <Project key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div
          className="portfolio__github-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="portfolio__github-card">
            <div className="portfolio__github-icon">
              <FiGithub size={28} />
            </div>
            <div className="portfolio__github-text">
              <h3>More on GitHub</h3>
              <p>Explore 78+ repositories including algorithms, open source contributions, and experiments.</p>
            </div>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline portfolio__github-btn"
            >
              View All <FiArrowRight size={15} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
