import { Quote } from 'lucide-react';
import { siteContent } from '@/lib/site-content';

export function ReviewsSection() {
  return (
    <section
      id="avaliacoes"
      className="reviews-section section-space scroll-mt-24"
    >
      <div className="container-shell">
        <header className="reviews-header">
          <div>
            <p className="eyebrow">Avaliações dos leitores</p>
            <h2 className="section-title mt-5">
              O que fica depois da leitura.
            </h2>
          </div>
          <p className="reviews-header__intro">{siteContent.reviewsHeading}</p>
        </header>

        <div className="reviews-grid mt-12">
          {siteContent.reviews.map((review, index) => (
            <article className="review-card" key={`${review.name}-${index}`}>
              <div className="review-card__top">
                <span aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <Quote aria-hidden="true" />
              </div>

              <blockquote className="review-card__quote">
                “{review.quote}”
              </blockquote>

              <footer className="review-card__footer">
                <div>
                  <p>{review.name}</p>
                  {review.context && <span>{review.context}</span>}
                </div>
                {review.rating && (
                  <span className="review-card__rating">{review.rating}</span>
                )}
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
