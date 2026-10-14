import {
  Brain, Globe, BarChart3, Terminal, Cloud, Sparkles, Clock, ChevronRight, ArrowRight,
} from 'lucide-react';
import { COURSES } from '../data/siteData';
import './Courses.css';

const ICON_MAP = { Brain, Globe, BarChart3, Terminal, Cloud, Sparkles };

const LEVEL_COLOR = {
  Beginner: 'green',
  Intermediate: 'violet',
  'Beginner–Advanced': 'blue',
};

const TAG_COLORS = ['blue', 'violet', 'cyan', 'blue', 'violet'];

export default function Courses() {
  return (
    <section id="courses" className="section courses">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Featured Courses</div>
          <h2 className="section-title">
            Start Learning What{' '}
            <span className="gradient-text">Matters Most</span>
          </h2>
          <p className="section-subtitle">
            Explore our current course offerings — each designed with practical projects, clear learning milestones, and real-world applicability.
          </p>
        </div>

        <div className="courses__grid" role="list">
          {COURSES.map((course, idx) => {
            const Icon = ICON_MAP[course.icon];
            return (
              <article
                key={course.id}
                className={`course-card course-card--${course.color}`}
                role="listitem"
                id={`course-${course.id}`}
              >
                {/* Thumbnail area */}
                <div className={`course-card__thumb course-thumb--${course.color}`} aria-hidden="true">
                  <div className="course-card__thumb-icon">
                    {Icon && <Icon size={36} strokeWidth={1.5} />}
                  </div>
                  <div className="course-card__thumb-pattern" />
                </div>

                {/* Body */}
                <div className="course-card__body">
                  {/* Tags row */}
                  <div className="course-card__tags" aria-label="Technology tags">
                    {course.tags.slice(0, 3).map((tag, ti) => (
                      <span
                        key={tag}
                        className={`badge badge-${TAG_COLORS[ti % TAG_COLORS.length]}`}
                      >
                        {tag}
                      </span>
                    ))}
                    {course.tags.length > 3 && (
                      <span className="course-card__more-tags">+{course.tags.length - 3}</span>
                    )}
                  </div>

                  <h3 className="course-card__title">{course.title}</h3>
                  <p className="course-card__desc">{course.description}</p>

                  {/* Meta */}
                  <div className="course-card__meta">
                    <div className="course-card__meta-item">
                      <Clock size={14} />
                      <span>{course.duration}</span>
                    </div>
                    <span
                      className={`badge badge-${LEVEL_COLOR[course.level] || course.levelColor}`}
                    >
                      {course.level}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <div className="course-card__footer">
                  <a
                    href={`#course-${course.id}`}
                    className={`btn btn-outline course-card__cta`}
                    id={`view-course-${course.id}`}
                    onClick={(e) => e.preventDefault()}
                  >
                    View Course <ChevronRight size={16} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* View All */}
        <div className="courses__footer">
          <a
            href="#courses"
            className="btn btn-primary btn-lg"
            id="view-all-courses-btn"
            onClick={(e) => e.preventDefault()}
          >
            View All Courses <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
