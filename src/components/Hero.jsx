import { ArrowRight, ChevronRight, Brain, Code2, BarChart3, Sparkles } from 'lucide-react';
import './Hero.css';

const FLOATING_CARDS = [
  {
    id: 'fc1',
    icon: <Brain size={18} />,
    title: 'AI & Machine Learning',
    sub: 'Beginner → Advanced',
    color: 'blue',
    pos: 'top-left',
  },
  {
    id: 'fc2',
    icon: <Code2 size={18} />,
    title: 'Full Stack Dev',
    sub: 'Project-Based',
    color: 'violet',
    pos: 'bottom-left',
  },
  {
    id: 'fc3',
    icon: <BarChart3 size={18} />,
    title: 'Data Science',
    sub: 'Analytics & Insights',
    color: 'cyan',
    pos: 'top-right',
  },
  {
    id: 'fc4',
    icon: <Sparkles size={18} />,
    title: 'Generative AI',
    sub: 'LLMs & Prompting',
    color: 'violet',
    pos: 'bottom-right',
  },
];

export default function Hero() {
  const handleScroll = (href) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero" aria-label="Hero section">
      {/* Background decorations */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__bg-glow hero__bg-glow--1" />
        <div className="hero__bg-glow hero__bg-glow--2" />
        <div className="hero__bg-glow hero__bg-glow--3" />
        <div className="hero__grid" />
      </div>

      <div className="container hero__inner">
        {/* Left: Content */}
        <div className="hero__content">
          <div className="hero__label animate-fade-up">
            <span className="hero__label-dot" aria-hidden="true" />
            AI-Focused Education & Career Training
          </div>

          <h1 className="hero__headline animate-fade-up delay-100">
            Build Your Future in{' '}
            <span className="gradient-text">AI & Technology</span>
          </h1>

          <p className="hero__subheadline animate-fade-up delay-200">
            Learn in-demand technology skills, work on practical projects, and take the next step toward your career with OIAI.
          </p>

          <div className="hero__ctas animate-fade-up delay-300">
            <a
              href="#courses"
              className="btn btn-primary btn-lg"
              id="hero-explore-btn"
              onClick={(e) => { e.preventDefault(); handleScroll('#courses'); }}
            >
              Explore Courses <ArrowRight size={18} />
            </a>
            <a
              href="#roadmap"
              className="btn btn-secondary btn-lg"
              id="hero-roadmap-btn"
              onClick={(e) => { e.preventDefault(); handleScroll('#roadmap'); }}
            >
              Discover Your Career Path <ChevronRight size={18} />
            </a>
          </div>

          {/* Breadcrumb trust row */}
          <div className="hero__trust animate-fade-up delay-400">
            <div className="hero__trust-item">
              <span className="hero__trust-icon">🎯</span>
              <span>Career-Oriented</span>
            </div>
            <div className="hero__trust-sep" aria-hidden="true" />
            <div className="hero__trust-item">
              <span className="hero__trust-icon">🛠️</span>
              <span>Project-Based</span>
            </div>
            <div className="hero__trust-sep" aria-hidden="true" />
            <div className="hero__trust-item">
              <span className="hero__trust-icon">🤖</span>
              <span>AI-Focused</span>
            </div>
          </div>
        </div>

        {/* Right: Visual */}
        <div className="hero__visual animate-fade-up delay-200" aria-hidden="true">
          {/* Central AI Brain */}
          <div className="hero__visual-center">
            <div className="hero__ai-orb">
              <div className="hero__ai-orb-inner">
                <svg viewBox="0 0 120 120" className="hero__ai-svg" aria-hidden="true">
                  {/* Neural network nodes */}
                  <circle cx="60" cy="60" r="20" fill="none" stroke="rgba(96,165,250,0.6)" strokeWidth="1.5" />
                  <circle cx="60" cy="60" r="35" fill="none" stroke="rgba(96,165,250,0.25)" strokeWidth="1" strokeDasharray="4 3" />
                  <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(139,92,246,0.15)" strokeWidth="1" />
                  {/* Nodes */}
                  {[
                    [60, 25], [95, 42], [95, 78], [60, 95], [25, 78], [25, 42]
                  ].map(([cx, cy], i) => (
                    <g key={i}>
                      <line x1="60" y1="60" x2={cx} y2={cy} stroke="rgba(96,165,250,0.2)" strokeWidth="1" />
                      <circle cx={cx} cy={cy} r="4" fill="rgba(96,165,250,0.7)" />
                    </g>
                  ))}
                  {/* Inner glow */}
                  <circle cx="60" cy="60" r="12" fill="rgba(37,99,235,0.3)" />
                  <circle cx="60" cy="60" r="6" fill="rgba(96,165,250,0.9)" />
                </svg>
                <div className="hero__ai-label">AI Core</div>
              </div>
              <div className="hero__ai-ring hero__ai-ring--1" />
              <div className="hero__ai-ring hero__ai-ring--2" />
            </div>

            {/* Orbiting particle */}
            <div className="hero__orbit">
              <div className="hero__orbit-dot" />
            </div>
          </div>

          {/* Floating Cards */}
          {FLOATING_CARDS.map((card) => (
            <div
              key={card.id}
              className={`hero__float-card hero__float-card--${card.color} hero__float-card--${card.pos}`}
            >
              <div className={`hero__float-card-icon hero__float-icon--${card.color}`}>
                {card.icon}
              </div>
              <div>
                <div className="hero__float-card-title">{card.title}</div>
                <div className="hero__float-card-sub">{card.sub}</div>
              </div>
            </div>
          ))}

          {/* Data points floating */}
          <div className="hero__data-point hero__data-point--1">
            <div className="hero__data-dot" />
            <span>Machine Learning</span>
          </div>
          <div className="hero__data-point hero__data-point--2">
            <div className="hero__data-dot hero__data-dot--violet" />
            <span>Career Ready</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-hint" aria-hidden="true">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
