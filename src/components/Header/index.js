/**
 * @file Header/index.js
 * @description Sticky site header with scroll-aware glassmorphism background,
 * Framer Motion active-link indicator, and an animated mobile drawer.
 *
 * Accessibility notes:
 * - Active nav link receives aria-current="page" for screen readers.
 * - Mobile toggle reflects open/closed state via aria-expanded.
 * - Decorative icon elements carry aria-hidden="true".
 * - Mobile drawer is wrapped in a <nav> with aria-label for landmark navigation.
 */
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiCode } from 'react-icons/fi';
import './Header.css';

/** Navigation link definitions — order determines render order */
const navLinks = [
  { path: '/',          label: 'Home' },
  { path: '/about',     label: 'About' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/resume',    label: 'Resume' },
  { path: '/contact',   label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Add a glassmorphism background once the user scrolls past 20 px
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the mobile drawer whenever the route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      className={`header ${scrolled ? 'header--scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="header__inner container">
        {/* ── Logo ──────────────────────────────────────────────────── */}
        <Link to="/" className="header__logo" aria-label="Fred Motta — home">
          <span className="header__logo-icon" aria-hidden="true">
            <FiCode size={18} />
          </span>
          <span className="header__logo-text">
            <span className="header__logo-name">Fred</span>
            <span className="header__logo-dot">.</span>
            <span className="header__logo-dev">dev</span>
          </span>
        </Link>

        {/* ── Desktop navigation ────────────────────────────────────── */}
        <nav className="header__nav" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`header__nav-link ${isActive ? 'header__nav-link--active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
                {/* Shared layout animation creates a sliding underline */}
                {isActive && (
                  <motion.span
                    className="header__nav-indicator"
                    layoutId="nav-indicator"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* ── CTA button + mobile hamburger ─────────────────────────── */}
        <div className="header__actions">
          <Link to="/contact" className="btn btn-primary header__cta">
            Hire Me
          </Link>
          <button
            className="header__mobile-toggle"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen
              ? <FiX size={22} aria-hidden="true" />
              : <FiMenu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="header__mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <nav id="mobile-nav" className="header__mobile-nav" aria-label="Mobile navigation">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      to={link.path}
                      className={`header__mobile-link ${isActive ? 'header__mobile-link--active' : ''}`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Link to="/contact" className="btn btn-primary header__mobile-cta">
                  Hire Me
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
