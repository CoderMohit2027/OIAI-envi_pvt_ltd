import { ArrowRight, Mail } from 'lucide-react';
import './CTASection.css';

export default function CTASection() {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="contact" className="cta-section section-dark" aria-label="Call to action">
      {/* Decorations */}
      <div className="cta-section__bg" aria-hidden="true">
        <div className="cta-section__glow cta-section__glow--1" />
        <div className="cta-section__glow cta-section__glow--2" />
        <div className="cta-section__grid" />
        {/* Floating dots */}
        <div className="cta-section__dot cta-section__dot--1" />
        <div className="cta-section__dot cta-section__dot--2" />
        <div className="cta-section__dot cta-section__dot--3" />
      </div>

      <div className="container cta-section__inner">
        <div className="cta-section__content">
          <div className="cta-section__label">Start Your Journey</div>

          <h2 className="cta-section__headline">
            Take the Next Step in Your{' '}
            <span className="gradient-text">Technology Career</span>
          </h2>

          <p className="cta-section__subtext">
            Explore learning opportunities and discover a path that matches your interests and goals. Your next chapter in technology starts here.
          </p>

          <div className="cta-section__buttons">
            <a
              href="#courses"
              className="btn btn-primary btn-lg"
              id="cta-section-explore-btn"
              onClick={(e) => { e.preventDefault(); handleScroll('courses'); }}
            >
              Explore Courses <ArrowRight size={18} />
            </a>
            <a
              href="mailto:contact@oiai.in"
              className="btn btn-secondary btn-lg"
              id="cta-section-contact-btn"
            >
              <Mail size={18} /> Contact OIAI
            </a>
          </div>

          {/* Feature chips */}
          <div className="cta-section__chips">
            <div className="cta-chip">🎓 Structured Courses</div>
            <div className="cta-chip">🗺️ Career Roadmaps</div>
            <div className="cta-chip">🛠️ Practical Projects</div>
            <div className="cta-chip">💼 Career Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
