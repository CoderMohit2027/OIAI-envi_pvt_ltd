import { useState, useEffect, useCallback } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { NAV_LINKS } from '../data/siteData';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);

    // Active section detection
    const sections = NAV_LINKS.map(l => l.href.replace('#', '')).filter(Boolean);
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el && window.scrollY >= el.offsetTop - 120) {
        setActiveSection(sections[i]);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="banner">
        <div className="container navbar__inner">
          {/* Logo */}
          <a
            href="#home"
            className="navbar__logo"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            aria-label="OIAI — Go to homepage"
          >
            <div className="navbar__logo-mark" aria-hidden="true">
              <Zap size={18} strokeWidth={2.5} />
            </div>
            <span className="navbar__logo-text">
              <span className="navbar__logo-o">OI</span>AI
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="navbar__links" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`navbar__link${activeSection === link.href.replace('#', '') ? ' navbar__link--active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="navbar__actions">
            <a
              href="#courses"
              className="btn btn-primary btn-sm navbar__cta"
              id="navbar-explore-cta"
              onClick={(e) => { e.preventDefault(); handleNavClick('#courses'); }}
            >
              Explore Courses
            </a>
            <button
              className="navbar__hamburger"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              id="hamburger-btn"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-overlay${isOpen ? ' mobile-overlay--open' : ''}`}
        aria-hidden={!isOpen}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <nav
        id="mobile-menu"
        className={`mobile-menu${isOpen ? ' mobile-menu--open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
      >
        <div className="mobile-menu__header">
          <div className="navbar__logo">
            <div className="navbar__logo-mark" aria-hidden="true">
              <Zap size={18} strokeWidth={2.5} />
            </div>
            <span className="navbar__logo-text">
              <span className="navbar__logo-o">OI</span>AI
            </span>
          </div>
          <button
            className="navbar__hamburger"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <div className="mobile-menu__links">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className={`mobile-menu__link${activeSection === link.href.replace('#', '') ? ' mobile-menu__link--active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              style={{ animationDelay: isOpen ? `${i * 50}ms` : '0ms' }}
              tabIndex={isOpen ? 0 : -1}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="mobile-menu__footer">
          <a
            href="#courses"
            className="btn btn-primary"
            id="mobile-explore-cta"
            onClick={(e) => { e.preventDefault(); handleNavClick('#courses'); }}
            tabIndex={isOpen ? 0 : -1}
          >
            Explore Courses
          </a>
        </div>
      </nav>
    </>
  );
}
