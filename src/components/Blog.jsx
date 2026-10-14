import { Clock, ArrowRight } from 'lucide-react';
import { BLOG_ARTICLES } from '../data/siteData';
import './Blog.css';

const CATEGORY_COLORS = {
  'AI & Machine Learning': 'blue',
  'Career Guidance': 'violet',
  'Interview Preparation': 'cyan',
  'Industry Trends': 'blue',
  'Learning Resources': 'green',
};

export default function Blog() {
  return (
    <section id="blog" className="section blog">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Knowledge Hub</div>
          <h2 className="section-title">
            Insights to Help You{' '}
            <span className="gradient-text">Learn & Grow</span>
          </h2>
          <p className="section-subtitle">
            Tutorials, career guidance, industry trends, and learning resources — all in one place to support your technology journey.
          </p>
        </div>

        <div className="blog__grid" role="list">
          {BLOG_ARTICLES.map((article) => {
            const catColor = CATEGORY_COLORS[article.category] || 'blue';
            return (
              <article
                key={article.id}
                className="blog-card card"
                role="listitem"
                id={`article-${article.id}`}
              >
                {/* Thumbnail placeholder */}
                <div className={`blog-card__thumb blog-thumb--${catColor}`} aria-label={`${article.category} article thumbnail`}>
                  <div className="blog-card__thumb-overlay" />
                  <span className={`badge badge-${catColor} blog-card__category`}>
                    {article.category}
                  </span>
                </div>

                <div className="blog-card__body">
                  <h3 className="blog-card__title">{article.title}</h3>
                  <p className="blog-card__excerpt">{article.excerpt}</p>

                  <div className="blog-card__footer">
                    <div className="blog-card__meta">
                      <Clock size={13} />
                      <span>{article.readTime}</span>
                      <span className="blog-card__dot">·</span>
                      <span>{article.date}</span>
                    </div>
                    <a
                      href={`#article-${article.id}`}
                      className="blog-card__read-link"
                      id={`read-${article.id}`}
                      onClick={(e) => e.preventDefault()}
                      aria-label={`Read article: ${article.title}`}
                    >
                      Read Article <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="blog__footer">
          <a
            href="#blog"
            className="btn btn-outline btn-lg"
            id="view-all-articles-btn"
            onClick={(e) => e.preventDefault()}
          >
            View All Articles <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
