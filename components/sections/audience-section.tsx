import { siteContent } from '@/lib/site-content';

export function AudienceSection() {
  return (
    <section aria-labelledby="audience-heading" className="pb-16 sm:pb-24">
      <div className="container-shell">
        <div className="grid gap-8 border-y border-border py-10 lg:grid-cols-2 lg:gap-16">
          <h2
            id="audience-heading"
            className="max-w-lg font-heading text-3xl leading-tight sm:text-4xl"
          >
            {siteContent.audience.heading}
          </h2>
          <ul className="list-disc space-y-4 pl-5 text-base leading-7 text-foreground/85 marker:text-primary">
            {siteContent.audience.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
