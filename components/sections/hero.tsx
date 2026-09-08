import { BookPlaceholder } from '@/components/book-placeholder';
import { PurchaseLinks } from '@/components/purchase-links';
import { siteConfig } from '@/lib/site-config';
import { siteContent } from '@/lib/site-content';

export function Hero() {
  return (
    <section id="inicio" className="hero-section overflow-hidden">
      <div className="container-shell grid min-h-[calc(100svh-4.5rem)] items-center gap-14 py-16 lg:grid-cols-[1.08fr_.92fr] lg:py-24">
        <div className="relative z-10 max-w-2xl animate-reveal">
          <p className="eyebrow">{siteContent.hero.eyebrow}</p>
          <h1 className="mt-5 font-heading text-[clamp(3.5rem,11vw,7.5rem)] leading-[.78] tracking-[-.055em]">
            No Barco com
            <br />
            <span className="text-primary">Jesus</span>
          </h1>
          <p className="mt-8 max-w-xl font-heading text-2xl leading-snug text-foreground/85 sm:text-3xl">
            {siteContent.hero.statement}
          </p>
          <p className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">
            {siteContent.hero.description}
          </p>
          <PurchaseLinks className="mt-9" />
          <p className="mt-5 text-xs uppercase tracking-[0.16em] text-muted-foreground">
            Uma obra de {siteConfig.author}
          </p>
        </div>
        <div className="animate-reveal [animation-delay:140ms] lg:justify-self-end">
          <BookPlaceholder eager label="Edição física de No Barco com Jesus" />
        </div>
      </div>
    </section>
  );
}
