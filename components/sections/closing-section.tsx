import { BookPlaceholder } from '@/components/book-placeholder';
import { PurchaseLinks } from '@/components/purchase-links';
import { siteContent } from '@/lib/site-content';

export function ClosingSection() {
  return (
    <section className="closing-section overflow-hidden bg-primary text-primary-foreground">
      <div className="container-shell grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-[.58fr_1.42fr] lg:gap-20">
        <div className="closing-section__book">
          <BookPlaceholder compact label="No Barco com Jesus · Simone Leite" />
        </div>
        <div className="relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-primary-foreground/60">
            O próximo capítulo começa aqui
          </p>
          <h2 className="mt-6 max-w-3xl font-heading text-4xl leading-[1.02] tracking-[-.035em] sm:text-6xl lg:text-7xl">
            {siteContent.closing.heading}
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-7 text-primary-foreground/65">
            {siteContent.closing.description}
          </p>
          <PurchaseLinks className="mt-9 [&_.button--primary]:bg-primary-foreground [&_.button--primary]:text-primary [&_.button--secondary]:border-primary-foreground/35 [&_.button--secondary]:text-primary-foreground" />
        </div>
      </div>
    </section>
  );
}
