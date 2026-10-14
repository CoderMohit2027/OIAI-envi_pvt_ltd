import { Target, BookOpen, Code2, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { ROADMAP_STEPS } from '../data/siteData';
import './Roadmap.css';

const ICON_MAP = { Target, BookOpen, Code2, Zap, CheckCircle };

export default function Roadmap() {
  return (
    <section id="roadmap" className="section section-dark roadmap" aria-label="Career roadmap">
      {/* BG decorations */}
      <div className="roadmap__bg" aria-hidden="true">
        <div className="roadmap__bg-glow roadmap__bg-glow--1" />
        <div className="roadmap__bg-glow roadmap__bg-glow--2" />
      </div>

      <div className="container roadmap__inner">
        <div className="section-header">
          <div className="section-label section-label-dark">AI Career Roadmap</div>
          <h2 className="section-title" style={{ color: 'var(--white)' }}>
            Your Career Journey,{' '}
            <span className="gradient-text">Clearly Mapped</span>
          </h2>
          <p className="section-subtitle section-subtitle-light">
            Explore the skills, tools, and learning milestones that can help you prepare for your chosen technology career.
          </p>
        </div>

        {/* Steps */}
        <div className="roadmap__steps" role="list">
          {ROADMAP_STEPS.map((step, idx) => {
            const Icon = ICON_MAP[step.icon];
            return (
              <div
                key={step.id}
                className="roadmap__step"
                role="listitem"
                id={`roadmap-step-${step.id}`}
              >
                {/* Connector */}
                {idx < ROADMAP_STEPS.length - 1 && (
                  <div className="roadmap__connector" aria-hidden="true">
                    <div className="roadmap__connector-line" />
                    <div className="roadmap__connector-arrow">›</div>
                  </div>
                )}

                {/* Card */}
                <div className="roadmap__card card card-dark">
                  <div className="roadmap__step-num" aria-hidden="true">
                    {step.number}
                  </div>
                  <div className="roadmap__icon-wrap" aria-hidden="true">
                    {Icon && <Icon size={22} strokeWidth={1.75} />}
                  </div>
                  <h3 className="roadmap__step-title">{step.title}</h3>
                  <p className="roadmap__step-desc">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress bar visual */}
        <div className="roadmap__progress" aria-hidden="true">
          <div className="roadmap__progress-track">
            <div className="roadmap__progress-fill" />
            {ROADMAP_STEPS.map((step) => (
              <div key={step.id} className="roadmap__progress-dot">
                <div className="roadmap__progress-dot-inner" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="roadmap__cta">
          <a
            href="#roadmap"
            className="btn btn-primary btn-lg"
            id="explore-roadmaps-btn"
            onClick={(e) => e.preventDefault()}
          >
            Explore Career Roadmaps <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
