import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/siteData';
import './FAQ.css';

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="section faq" aria-label="Frequently Asked Questions">
      <div className="container">
        <div className="faq__layout">
          {/* Left */}
          <div className="faq__intro">
            <div className="section-label">FAQ</div>
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              Common{' '}
              <span className="gradient-text">Questions</span>
            </h2>
            <p className="section-subtitle" style={{ textAlign: 'left', margin: '0' }}>
              Have a question not listed here? Reach out to us directly and our team will be happy to help.
            </p>
            <a
              href="#contact"
              className="btn btn-outline"
              style={{ marginTop: '1.5rem' }}
              id="faq-contact-btn"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              Contact Us
            </a>
          </div>

          {/* Right: Accordion */}
          <div className="faq__accordion" role="list">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={`faq-item${isOpen ? ' faq-item--open' : ''}`}
                  role="listitem"
                >
                  <button
                    className="faq-item__trigger"
                    onClick={() => toggle(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    id={`faq-btn-${item.id}`}
                    type="button"
                  >
                    <span className="faq-item__number" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="faq-item__question">{item.question}</span>
                    <ChevronDown
                      className={`faq-item__chevron${isOpen ? ' faq-item__chevron--open' : ''}`}
                      size={20}
                      aria-hidden="true"
                    />
                  </button>

                  <div
                    id={`faq-answer-${item.id}`}
                    className="faq-item__answer"
                    role="region"
                    aria-labelledby={`faq-btn-${item.id}`}
                    style={{ '--max-h': isOpen ? '300px' : '0px' }}
                  >
                    <div className="faq-item__answer-inner">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
