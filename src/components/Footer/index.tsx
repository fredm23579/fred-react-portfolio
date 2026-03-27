import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiCode,
  FiHeart,
} from 'react-icons/fi';
import type { IconType } from 'react-icons';
import profile from '../../data/profile';
import './Footer.css';

interface SocialLink {
  icon: IconType;
  href: string;
  label: string;
}

interface NavLink {
  path: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  { icon: FiGithub, href: profile.github, label: 'GitHub' },
  { icon: FiLinkedin, href: profile.linkedin, label: 'LinkedIn' },
  { icon: FiTwitter, href: profile.twitter, label: 'Twitter' },
  { icon: FiMail, href: `mailto:${profile.email}`, label: 'Email' },
];

const navLinks: NavLink[] = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/resume', label: 'Resume' },
  { path: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top container">
        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-icon"><FiCode size={16} /></span>
            <span className="footer__logo-text">
              <span>Fred</span><span className="footer__logo-dot">.</span><span className="footer__logo-dev">dev</span>
            </span>
          </div>
          <p className="footer__tagline">{profile.tagline}</p>
          <div className="footer__social">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="footer__social-link"
                whileHover={{ y: -3, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Nav */}
        <nav className="footer__nav" aria-label="Footer navigation">
          <h4 className="footer__nav-title">Navigation</h4>
          <ul className="footer__nav-list">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="footer__nav-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div className="footer__contact">
          <h4 className="footer__nav-title">Get In Touch</h4>
          <p className="footer__contact-text">
            Available for full-time roles, freelance, and open source collaboration.
          </p>
          <a href={`mailto:${profile.email}`} className="footer__email">
            {profile.email}
          </a>
          <Link to="/contact" className="btn btn-outline footer__cta">
            Start a Conversation
          </Link>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">
            © {new Date().getFullYear()} Fred Motta. All rights reserved.
          </p>
          <p className="footer__made-with">
            Built with <FiHeart size={12} className="footer__heart" /> using React & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
