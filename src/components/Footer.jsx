import { Zap, Mail, Phone, MessageCircle, Share2, AtSign, Rss, Video, Code } from 'lucide-react';
import { FOOTER_LINKS, WHATSAPP_NUMBER, CONTACT_EMAIL, CONTACT_PHONE } from '../data/siteData';
import './Footer.css';

const CURRENT_YEAR = new Date().getFullYear();

function FooterLinkList({ title, links }) {
  return (
    <div className="footer__link-group">
      <h4 className="footer__link-group-title">{title}</h4>
      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="footer__link"
              onClick={(e) => {
                if (link.href.startsWith('#')) {
                  e.preventDefault();
                  const id = link.href.replace('#', '');
                  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const waLink = WHATSAPP_NUMBER !== 'XXXXXXXXXX'
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20OIAI%2C%20I%20would%20like%20to%20enquire%20about%20your%20courses.`
    : '#contact';

  return (
    <>
      {/* ── Footer ── */}
      <footer className="footer" role="contentinfo">
        {/* Top */}
        <div className="container footer__top">
          {/* Brand column */}
          <div className="footer__brand">
            <a href="#home" className="footer__logo" onClick={(e) => { e.preventDefault(); document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <div className="footer__logo-mark" aria-hidden="true">
                <Zap size={16} strokeWidth={2.5} />
              </div>
              <span className="footer__logo-text">
                <span className="footer__logo-o">OI</span>AI
              </span>
            </a>
            <p className="footer__brand-desc">
              OIAI is an AI-focused education and career training platform dedicated to helping learners build in-demand technology skills and prepare for meaningful technology careers.
            </p>

            {/* Contact */}
            <div className="footer__contact">
              <a href={`mailto:${CONTACT_EMAIL}`} className="footer__contact-item">
                <Mail size={14} />
                <span>{CONTACT_EMAIL}</span>
              </a>
              <div className="footer__contact-item">
                <Phone size={14} />
                <span>{CONTACT_PHONE}</span>
              </div>
            </div>

            {/* Social */}
            <div className="footer__social" aria-label="Social media links">
              {[
                { Icon: Share2, label: 'Twitter / X', href: '#' },
                { Icon: AtSign, label: 'LinkedIn', href: '#' },
                { Icon: Rss, label: 'Instagram', href: '#' },
                { Icon: Video, label: 'YouTube', href: '#' },
                { Icon: Code, label: 'GitHub', href: '#' },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="footer__social-link"
                  aria-label={`OIAI on ${label}`}
                  onClick={(e) => e.preventDefault()}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          <FooterLinkList title="Quick Links" links={FOOTER_LINKS.quickLinks} />
          <FooterLinkList title="Courses" links={FOOTER_LINKS.courses} />
          <FooterLinkList title="Career Resources" links={FOOTER_LINKS.career} />
        </div>

        {/* Bottom */}
        <div className="container footer__bottom">
          <p className="footer__copyright">
            © {CURRENT_YEAR} OIAI. All rights reserved.
          </p>
          <div className="footer__legal">
            {FOOTER_LINKS.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="footer__legal-link"
                onClick={(e) => e.preventDefault()}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* ── Floating WhatsApp Button ── */}
      <a
        href={waLink}
        className="whatsapp-fab"
        target={WHATSAPP_NUMBER !== 'XXXXXXXXXX' ? '_blank' : '_self'}
        rel="noopener noreferrer"
        aria-label="Contact OIAI on WhatsApp"
        id="whatsapp-fab-btn"
        title="Chat with us on WhatsApp"
      >
        <MessageCircle size={24} strokeWidth={1.75} />
        <span className="whatsapp-fab__label">Enquire</span>
      </a>

      {/* ── Mobile Sticky Contact Bar ── */}
      <div className="mobile-contact-bar" role="navigation" aria-label="Mobile contact options">
        <a
          href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}
          className="mobile-contact-bar__btn"
          id="mobile-call-btn"
          onClick={(e) => e.preventDefault()}
        >
          <Phone size={18} />
          <span>Call</span>
        </a>
        <a
          href={waLink}
          className="mobile-contact-bar__btn mobile-contact-bar__btn--whatsapp"
          id="mobile-whatsapp-btn"
          target={WHATSAPP_NUMBER !== 'XXXXXXXXXX' ? '_blank' : '_self'}
          rel="noopener noreferrer"
        >
          <MessageCircle size={18} />
          <span>WhatsApp</span>
        </a>
        <a
          href="#contact"
          className="mobile-contact-bar__btn mobile-contact-bar__btn--enquire"
          id="mobile-enquire-btn"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <Mail size={18} />
          <span>Enquire</span>
        </a>
      </div>
    </>
  );
}
