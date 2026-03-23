import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiSend,
  FiMapPin,
  FiClock,
  FiMessageCircle,
} from 'react-icons/fi';
import profile from '../../data/profile';
import './Contact.css';

const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    color: '#6366f1',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: profile.location,
    href: null,
    color: '#8b5cf6',
  },
  {
    icon: FiClock,
    label: 'Availability',
    value: 'Open to opportunities',
    href: null,
    color: '#10b981',
  },
];

const socialLinks = [
  { icon: FiGithub, href: profile.github, label: 'GitHub', handle: '@fredm23579' },
  { icon: FiLinkedin, href: profile.linkedin, label: 'LinkedIn', handle: 'in/fred-motta' },
  { icon: FiTwitter, href: profile.twitter, label: 'Twitter/X', handle: '@fredm23579' },
];

const initialForm = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (!form.message.trim() || form.message.length < 10) e.message = 'Message must be at least 10 characters';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    // Simulate async send
    await new Promise((res) => setTimeout(res, 1200));
    setLoading(false);
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <div className="contact section">
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">{'// contact'}</span>
          <h2>
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle">
            Open to full-time roles, freelance projects, and collaboration on interesting problems.
            Drop me a message — I respond within 24 hours.
          </p>
        </motion.div>

        <div className="contact__grid">
          {/* Left: Info */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="contact__info-title">
              <FiMessageCircle size={20} />
              Get In Touch
            </h3>
            <p className="contact__info-text">
              Whether you have a project idea, job opportunity, or just want to talk tech —
              I&apos;m always excited to connect with fellow developers and innovative teams.
            </p>

            {/* Contact details */}
            <div className="contact__details">
              {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
                <div key={label} className="contact__detail" style={{ '--detail-color': color }}>
                  <div className="contact__detail-icon">
                    <Icon size={18} />
                  </div>
                  <div>
                    <span className="contact__detail-label">{label}</span>
                    {href ? (
                      <a href={href} className="contact__detail-value">{value}</a>
                    ) : (
                      <span className="contact__detail-value">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="contact__socials">
              <h4 className="contact__socials-title">Find me on</h4>
              {socialLinks.map(({ icon: Icon, href, label, handle }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social"
                >
                  <Icon size={18} />
                  <div>
                    <span className="contact__social-label">{label}</span>
                    <span className="contact__social-handle">{handle}</span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="contact__form-wrap"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                className="contact__success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="contact__success-icon">
                  <FiSend size={28} />
                </div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
                <button
                  className="btn btn-outline"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <div className="contact__form-row">
                  <div className="contact__form-group">
                    <label htmlFor="name" className="contact__label">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className={`contact__input ${errors.name ? 'contact__input--error' : ''}`}
                      placeholder="Your name"
                      autoComplete="name"
                    />
                    {errors.name && <span className="contact__error">{errors.name}</span>}
                  </div>
                  <div className="contact__form-group">
                    <label htmlFor="email" className="contact__label">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className={`contact__input ${errors.email ? 'contact__input--error' : ''}`}
                      placeholder="your@email.com"
                      autoComplete="email"
                    />
                    {errors.email && <span className="contact__error">{errors.email}</span>}
                  </div>
                </div>

                <div className="contact__form-group">
                  <label htmlFor="subject" className="contact__label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className={`contact__input ${errors.subject ? 'contact__input--error' : ''}`}
                    placeholder="What's this about?"
                  />
                  {errors.subject && <span className="contact__error">{errors.subject}</span>}
                </div>

                <div className="contact__form-group">
                  <label htmlFor="message" className="contact__label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className={`contact__input contact__textarea ${errors.message ? 'contact__input--error' : ''}`}
                    placeholder="Tell me about your project, role, or idea..."
                    rows={6}
                  />
                  {errors.message && <span className="contact__error">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary contact__submit"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="contact__spinner" />
                  ) : (
                    <FiSend size={16} />
                  )}
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
