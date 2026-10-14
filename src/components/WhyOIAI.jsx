import {
  Briefcase, Code2, Map, Users, Award, RefreshCw,
} from 'lucide-react';
import { VALUE_PROPS } from '../data/siteData';
import './WhyOIAI.css';

const ICON_MAP = {
  Briefcase, Code2, Map, Users, Award, RefreshCw,
};

const COLOR_CLASS = {
  blue: 'feature-card--blue',
  violet: 'feature-card--violet',
  cyan: 'feature-card--cyan',
};

export default function WhyOIAI() {
  return (
    <section id="about" className="section why-oiai">
      <div className="container">
        <div className="section-header">
          <div className="section-label">
            <span>Why Choose OIAI</span>
          </div>
          <h2 className="section-title">
            Education Designed Around{' '}
            <span className="gradient-text">Your Career</span>
          </h2>
          <p className="section-subtitle">
            We focus on what actually matters — relevant skills, real projects, and a clear path toward the career you want in technology.
          </p>
        </div>

        <div className="why-oiai__grid" role="list">
          {VALUE_PROPS.map((prop, i) => {
            const Icon = ICON_MAP[prop.icon];
            return (
              <div
                key={prop.id}
                className={`feature-card ${COLOR_CLASS[prop.color]}`}
                role="listitem"
                style={{ animationDelay: `${i * 80}ms` }}
                id={`feature-${prop.id}`}
              >
                <div className={`feature-card__icon-wrap feature-icon--${prop.color}`} aria-hidden="true">
                  {Icon && <Icon size={22} strokeWidth={1.75} />}
                </div>
                <h3 className="feature-card__title">{prop.title}</h3>
                <p className="feature-card__desc">{prop.description}</p>
                <div className={`feature-card__accent feature-accent--${prop.color}`} aria-hidden="true" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
