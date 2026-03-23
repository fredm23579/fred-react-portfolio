import { motion } from 'framer-motion';
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiBookOpen,
  FiZap,
  FiAward,
  FiArrowRight,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import profile from '../../data/profile';
import './About.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  return (
    <div className="about section">
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">// about me</span>
          <h2>
            Developer &amp; <span className="gradient-text">AI Engineer</span>
          </h2>
          <p className="section-subtitle">
            Passionate about building intelligent, human-centered applications at the
            intersection of modern web and artificial intelligence.
          </p>
        </motion.div>

        {/* Main content grid */}
        <motion.div
          className="about__grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left: Avatar + Info */}
          <motion.div className="about__left" variants={itemVariants}>
            {/* Avatar */}
            <div className="about__avatar">
              <div className="about__avatar-inner">
                <div className="about__avatar-initials">FM</div>
                <div className="about__avatar-ring" />
                <div className="about__avatar-ring about__avatar-ring--2" />
              </div>
            </div>

            {/* Quick info */}
            <div className="about__quick-info">
              <div className="about__info-item">
                <FiMapPin size={14} />
                <span>{profile.location}</span>
              </div>
              <div className="about__info-item">
                <FiBookOpen size={14} />
                <span>{profile.education.institution}</span>
              </div>
              <div className="about__info-item">
                <FiMail size={14} />
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
              <div className="about__info-item">
                <FiZap size={14} />
                <span className="about__availability">{profile.availability}</span>
              </div>
            </div>

            {/* Social */}
            <div className="about__social">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="about__social-link">
                <FiGithub size={18} />
                <span>GitHub</span>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="about__social-link">
                <FiLinkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a href={`mailto:${profile.email}`} className="about__social-link">
                <FiMail size={18} />
                <span>Email</span>
              </a>
            </div>
          </motion.div>

          {/* Right: Bio + Content */}
          <motion.div className="about__right" variants={itemVariants}>
            {/* Philosophy quote */}
            <blockquote className="about__quote">
              <span className="about__quote-mark">&ldquo;</span>
              {profile.philosophy}
              <span className="about__quote-mark">&rdquo;</span>
            </blockquote>

            {/* Bio */}
            <div className="about__bio">
              {profile.bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Stats */}
            <div className="about__stats">
              {profile.stats.map((stat) => (
                <div key={stat.label} className="about__stat">
                  <span className="about__stat-value">{stat.value}</span>
                  <span className="about__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Education */}
        <motion.div
          className="about__education"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="about__section-title">
            <FiBookOpen size={20} />
            Education
          </h3>
          <div className="about__edu-card">
            <div className="about__edu-icon">
              <FiAward size={24} />
            </div>
            <div className="about__edu-content">
              <h4 className="about__edu-institution">{profile.education.institution}</h4>
              <p className="about__edu-degree">{profile.education.degree}</p>
              <p className="about__edu-focus">{profile.education.focus}</p>
            </div>
            <div className="about__edu-badge">
              <span>Completed</span>
            </div>
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div
          className="about__interests"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="about__section-title">
            <FiZap size={20} />
            Passions &amp; Interests
          </h3>
          <div className="about__interests-grid">
            {profile.interests.map((interest, i) => (
              <motion.div
                key={interest}
                className="about__interest"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ scale: 1.03 }}
              >
                <span className="about__interest-dot" />
                {interest}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="about__cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/resume" className="btn btn-primary">
            View Full Resume <FiArrowRight size={16} />
          </Link>
          <Link to="/portfolio" className="btn btn-outline">
            See My Work <FiArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
