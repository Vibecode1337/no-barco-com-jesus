import { siteContent } from '@/lib/site-content';
import { Heart, Sprout, Anchor } from 'lucide-react';

const featureIcons = [Heart, Sprout, Anchor] as const;

export function FeaturesSection() {
  return (
    <section
      id="destaques"
      className="features-section section-space scroll-mt-24 bg-foreground text-background"
    >
      <div className="container-shell">
        <header className="grid gap-6 border-b border-white/15 pb-10 md:grid-cols-[.7fr_1.3fr] md:items-end">
          <p className="eyebrow text-background/55">Destaques da obra</p>
          <h2 className="font-heading text-4xl leading-none tracking-[-.035em] sm:text-5xl lg:text-6xl">
            {siteContent.featuresHeading}
          </h2>
        </header>

        <div className="features-grid mt-8">
          {siteContent.features.map((item, index) => {
            const Icon = featureIcons[index] ?? Heart;
            return (
              <article className="feature-card" key={item.number}>
                <div className="feature-card__number" aria-hidden="true">
                  {item.number}
                </div>
                <div className="relative z-10 md:mt-auto">
                  <Icon className="feature-card__icon" aria-hidden="true" />
                  <h3 className="font-heading text-2xl leading-tight sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-5 max-w-sm text-sm leading-7 text-background/58">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
