import { TESTIMONIALS, FACULTY } from '../data/siteData';
import './Testimonials.css';

const INITIALS_COLORS = {
  blue: { bg: 'rgba(37,99,235,0.15)', border: 'rgba(37,99,235,0.25)', text: 'var(--blue-400)' },
  violet: { bg: 'rgba(139,92,246,0.15)', border: 'rgba(139,92,246,0.25)', text: 'var(--violet-400)' },
  cyan: { bg: 'rgba(14,165,233,0.15)', border: 'rgba(14,165,233,0.25)', text: 'var(--electric)' },
};

function Avatar({ initials, color }) {
  const c = INITIALS_COLORS[color] || INITIALS_COLORS.blue;
  return (
    <div
      className="testi-avatar"
      style={{ background: c.bg, border: `2px solid ${c.border}` }}
      aria-hidden="true"
    >
      <span style={{ color: c.text }}>{initials}</span>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        {/* Testimonials */}
        <div className="section-header">
          <div className="section-label">Student Voices</div>
          <h2 className="section-title">
            What Our{' '}
            <span className="gradient-text">Learners Say</span>
          </h2>
          <p className="section-subtitle">
            Testimonials from verified learners will appear here. The following are placeholder spaces.
          </p>
        </div>

        <div className="testi__grid">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="testi-card card" id={`testimonial-${t.id}`}>
              <div className="testi-card__quote-mark" aria-hidden="true">"</div>
              <p className="testi-card__quote">{t.quote}</p>
              <div className="testi-card__author">
                <Avatar initials={t.initials} color={t.color} />
                <div>
                  <div className="testi-card__name">{t.name}</div>
                  <div className="testi-card__role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Faculty */}
        <div className="section-header" style={{ marginTop: '4rem', marginBottom: '2.5rem' }}>
          <div className="section-label">Our Educators</div>
          <h2 className="section-title">
            Meet the{' '}
            <span className="gradient-text">Faculty</span>
          </h2>
          <p className="section-subtitle">
            Faculty profiles and credentials will be added here once verified information is available.
          </p>
        </div>

        <div className="faculty__grid">
          {FACULTY.map((f) => (
            <div key={f.id} className="faculty-card card" id={`faculty-${f.id}`}>
              <Avatar initials={f.initials} color={f.color} />
              <div className="faculty-card__info">
                <div className="faculty-card__name">{f.name}</div>
                <div className="faculty-card__role">{f.role}</div>
                <p className="faculty-card__bio">{f.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
