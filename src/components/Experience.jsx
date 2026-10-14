import { Layers, Briefcase, CalendarDays, Trophy, Star, ArrowRight } from 'lucide-react';
import { EXPERIENCE_FEATURES } from '../data/siteData';
import './Experience.css';

const ICON_MAP = { Layers, Briefcase, CalendarDays, Trophy, Star };

const BG_COLORS = ['blue', 'violet', 'cyan', 'blue', 'violet'];

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Hands-On Learning</div>
          <h2 className="section-title">
            Learning That Goes{' '}
            <span className="gradient-text">Beyond the Classroom</span>
          </h2>
          <p className="section-subtitle">
            Real skills come from real practice. OIAI's approach combines structured curriculum with project-based learning and career preparation.
          </p>
        </div>

        {/* Bento grid */}
        <div className="experience__bento">
          {/* Large feature card */}
          <div className="exp-bento__large exp-bento__card exp-bento__card--dark">
            <div className="exp-bento__badge">Core Approach</div>
            <div className="exp-bento__large-icon" aria-hidden="true">
              <Layers size={48} strokeWidth={1.25} />
            </div>
            <h3 className="exp-bento__large-title">
              Project-Based Learning at the Heart of Everything
            </h3>
            <p className="exp-bento__large-desc">
              Every course at OIAI is built around practical application. Rather than just watching or reading, you'll build projects that reflect real-world challenges — creating a portfolio that speaks for itself.
            </p>
            <a
              href="#courses"
              className="btn btn-primary"
              id="exp-bento-cta"
              onClick={(e) => { e.preventDefault(); document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
            >
              Explore Courses <ArrowRight size={16} />
            </a>
          </div>

          {/* Internship card */}
          <div className="exp-bento__card exp-bento__card--light exp-bento__card--blue">
            <div className="exp-bento__icon-wrap exp-bento__icon--blue" aria-hidden="true">
              <Briefcase size={24} strokeWidth={1.75} />
            </div>
            <h3 className="exp-bento__title">Internship Pathways</h3>
            <p className="exp-bento__desc">
              Bridge the gap between learning and working through structured internship opportunities designed for learners at the right stage of their journey.
            </p>
          </div>

          {/* Workshops card */}
          <div className="exp-bento__card exp-bento__card--light exp-bento__card--violet">
            <div className="exp-bento__icon-wrap exp-bento__icon--violet" aria-hidden="true">
              <CalendarDays size={24} strokeWidth={1.75} />
            </div>
            <h3 className="exp-bento__title">Workshops & Events</h3>
            <p className="exp-bento__desc">
              Participate in focused workshops and live technology sessions that deepen specific skills and connect you with a broader learning community.
            </p>
          </div>

          {/* Showcase card */}
          <div className="exp-bento__card exp-bento__card--light exp-bento__card--cyan">
            <div className="exp-bento__icon-wrap exp-bento__icon--cyan" aria-hidden="true">
              <Trophy size={24} strokeWidth={1.75} />
            </div>
            <h3 className="exp-bento__title">Student Project Showcase</h3>
            <p className="exp-bento__desc">
              A dedicated space to present your work, explore what others have built, and draw inspiration from projects across every learning level.
            </p>
          </div>

          {/* Career Prep card */}
          <div className="exp-bento__card exp-bento__card--light exp-bento__card--blue">
            <div className="exp-bento__icon-wrap exp-bento__icon--blue" aria-hidden="true">
              <Star size={24} strokeWidth={1.75} />
            </div>
            <h3 className="exp-bento__title">Career Preparation</h3>
            <p className="exp-bento__desc">
              Access resume guidance, portfolio resources, interview practice, and career strategy materials as you progress toward job readiness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
