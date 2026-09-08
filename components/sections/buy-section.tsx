import { BookOpen, MessageCircle } from 'lucide-react';
import { BookPlaceholder } from '@/components/book-placeholder';
import { TrackedPurchaseLink } from '@/components/tracked-purchase-link';
import { siteConfig } from '@/lib/site-config';
import { siteContent } from '@/lib/site-content';

export function BuySection() {
  return (
    <section
      id="comprar"
      className="purchase-section section-space scroll-mt-24"
    >
      <div className="container-shell">
        <header className="purchase-header">
          <div>
            <p className="eyebrow">Escolha sua edição</p>
            <h2 className="section-title mt-5">
              {siteContent.purchase.heading}
            </h2>
          </div>
          <p>{siteContent.purchase.introduction}</p>
        </header>

        <div className="purchase-grid mt-12">
          <article className="purchase-card purchase-card--featured">
            <div className="purchase-card__visual">
              <span className="purchase-card__badge">
                Autografado pela autora
              </span>
              <BookPlaceholder compact label="Livro físico · 340 páginas" />
            </div>
            <div className="purchase-card__content">
              <div className="purchase-card__edition">
                <span>01</span>
                <p className="eyebrow">Livro físico</p>
              </div>
              <h3>{siteContent.purchase.physicalHeading}</h3>
              <p className="purchase-card__description">
                {siteContent.purchase.physicalDescription}
              </p>
              <ul className="purchase-card__details">
                {siteContent.purchase.physicalDetails.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <div className="purchase-card__price">
                <span>Valor</span>
                <strong>{siteContent.purchase.physicalPrice}</strong>
              </div>
              {siteConfig.whatsappUrl ? (
                <TrackedPurchaseLink
                  ariaLabel="Comprar o livro físico pelo WhatsApp"
                  className="button button--primary w-full"
                  destination="whatsapp"
                  href={siteConfig.whatsappUrl}
                >
                  <MessageCircle aria-hidden="true" />
                  <span>{siteContent.purchase.physicalButton}</span>
                </TrackedPurchaseLink>
              ) : (
                <span
                  aria-disabled="true"
                  className="button button--primary w-full cursor-not-allowed opacity-65"
                >
                  <MessageCircle aria-hidden="true" />
                  <span>{siteContent.purchase.physicalButton}</span>
                </span>
              )}
              <p className="purchase-card__note">
                {siteConfig.whatsappUrl
                  ? `Atendimento pelo número ${siteConfig.whatsappNumber}`
                  : '[PLACEHOLDER: WhatsApp oficial ainda não fornecido]'}
              </p>
            </div>
          </article>

          <article className="purchase-card">
            <div className="purchase-card__visual">
              <span className="purchase-card__badge">Venda pela Amazon</span>
              <BookPlaceholder
                compact
                label="E-book Kindle · Venda pela Amazon"
              />
            </div>
            <div className="purchase-card__content">
              <div className="purchase-card__edition">
                <span>02</span>
                <p className="eyebrow">E-book</p>
              </div>
              <h3>{siteContent.purchase.ebookHeading}</h3>
              <p className="purchase-card__description">
                {siteContent.purchase.ebookDescription}
              </p>
              <ul className="purchase-card__details">
                {siteContent.purchase.ebookDetails.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <div className="purchase-card__price">
                <span>Valor</span>
                <strong>{siteContent.purchase.ebookPrice}</strong>
              </div>
              {siteConfig.amazonUrl ? (
                <TrackedPurchaseLink
                  ariaLabel="Comprar o e-book na Amazon"
                  className="button button--secondary w-full"
                  destination="amazon"
                  href={siteConfig.amazonUrl}
                >
                  <BookOpen aria-hidden="true" />
                  <span>{siteContent.purchase.ebookButton}</span>
                </TrackedPurchaseLink>
              ) : (
                <span
                  className="button button--secondary w-full cursor-not-allowed opacity-65"
                  aria-disabled="true"
                >
                  <BookOpen aria-hidden="true" />
                  <span>{siteContent.purchase.ebookButton}</span>
                </span>
              )}
              {!siteConfig.amazonUrl && (
                <p className="purchase-card__note">
                  [PLACEHOLDER: link oficial da Amazon ainda não fornecido]
                </p>
              )}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
