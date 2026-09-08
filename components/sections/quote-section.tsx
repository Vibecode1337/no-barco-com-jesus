import { siteContent } from '@/lib/site-content';
import { siteConfig } from '@/lib/site-config';

export function QuoteSection() {
  return (
    <section
      id="trecho"
      className="quote-section section-space scroll-mt-24 overflow-hidden"
    >
      <div className="container-shell relative">
        <span className="quote-mark" aria-hidden="true">
          “
        </span>
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="eyebrow">Uma reflexão para a travessia</p>
          <blockquote className="mt-9 font-heading text-[clamp(2rem,6vw,5rem)] leading-[1.08] tracking-[-.035em]">
            {siteContent.quote}
          </blockquote>
          <div className="mx-auto mt-10 h-px w-12 bg-primary/45" />
          <p className="mt-6 text-[0.68rem] font-semibold uppercase tracking-[.2em] text-muted-foreground">
            {siteConfig.title} · {siteContent.quoteAttribution}
          </p>
        </div>
      </div>
    </section>
  );
}
