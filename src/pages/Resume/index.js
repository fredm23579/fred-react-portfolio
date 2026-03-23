import { motion } from 'framer-motion';
import {
  FiDownload,
  FiCpu,
  FiMonitor,
  FiServer,
  FiDatabase,
  FiCode,
  FiCloud,
  FiAward,
  FiTool,
} from 'react-icons/fi';
import skills from '../../data/skills';
import './Resume.css';

const categoryIcons = {
  'AI & Machine Learning': FiCpu,
  Frontend: FiMonitor,
  Backend: FiServer,
  Databases: FiDatabase,
  Languages: FiCode,
  'DevOps & Cloud': FiCloud,
};

const categoryOrder = [
  'AI & Machine Learning',
  'Frontend',
  'Backend',
  'Languages',
  'Databases',
  'DevOps & Cloud',
];

const sortedCategories = categoryOrder
  .map((name) => skills.categories.find((c) => c.name === name))
  .filter(Boolean);

export default function Resume() {
  return (
    <div className="resume section">
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">{'// resume'}</span>
          <h2>
            Skills &amp; <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-subtitle">
            Full-stack developer with deep AI/ML integration experience and modern tooling expertise.
          </p>
          <a
            href="#"
            className="btn btn-primary resume__download"
            onClick={(e) => e.preventDefault()}
            title="PDF download coming soon"
          >
            <FiDownload size={16} />
            Download Resume (PDF)
          </a>
        </motion.div>

        {/* Skills categories */}
        <div className="resume__categories">
          {sortedCategories.map((category, catIndex) => {
            const Icon = categoryIcons[category.name] || FiCode;
            return (
              <motion.div
                key={category.name}
                className="resume__category"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: catIndex * 0.06 }}
              >
                {/* Category header */}
                <div className="resume__category-header">
                  <div
                    className="resume__category-icon"
                    style={{ background: `${category.color}18`, color: category.color, border: `1px solid ${category.color}30` }}
                  >
                    <Icon size={18} />
                  </div>
                  <h3 className="resume__category-name">{category.name}</h3>
                </div>

                {/* Skills */}
                <div className="resume__skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="resume__skill"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.04 }}
                    >
                      <div className="resume__skill-info">
                        <span className="resume__skill-name">{skill.name}</span>
                        <span className="resume__skill-level">{skill.level}%</span>
                      </div>
                      <div className="resume__skill-bar">
                        <motion.div
                          className="resume__skill-fill"
                          style={{ '--skill-color': category.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: 0.2 + skillIndex * 0.04,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tools section */}
        <motion.div
          className="resume__tools"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="resume__tools-title">
            <FiTool size={20} />
            Tools &amp; Technologies
          </h3>
          <div className="resume__tools-grid">
            {skills.tools.map((tool, i) => (
              <motion.span
                key={tool}
                className="resume__tool-tag"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                whileHover={{ scale: 1.05 }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="resume__certs"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="resume__tools-title">
            <FiAward size={20} />
            Education &amp; Certifications
          </h3>
          <div className="resume__certs-grid">
            {skills.certifications.map((cert) => (
              <div key={cert.name} className="resume__cert-card">
                <div className="resume__cert-icon">
                  <FiAward size={22} />
                </div>
                <div>
                  <h4 className="resume__cert-name">{cert.name}</h4>
                  <p className="resume__cert-issuer">{cert.issuer} · {cert.year}</p>
                  <p className="resume__cert-focus">{cert.focus}</p>
                </div>
                <span className="resume__cert-badge">Certified</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
