import Image from 'next/image';
import { siteConfig } from '@/lib/site-config';
import { siteContent } from '@/lib/site-content';

export function AuthorSection() {
  return (
    <section
      id="autor"
      className="author-section section-space scroll-mt-24 bg-secondary/55"
    >
      <div className="container-shell grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
        <figure className="author-portrait-wrap">
          <Image
            alt="Simone Leite segurando um exemplar de No Barco com Jesus"
            className="author-portrait"
            height="1536"
            sizes="(max-width: 1024px) calc(100vw - 2rem), 528px"
            src="/images/simone-leite-com-livro.jpg"
            width="1152"
          />
          <figcaption>Simone Leite, autora de No Barco com Jesus</figcaption>
        </figure>

        <div className="author-copy">
          <div className="flex items-center gap-4">
            <span className="author-index" aria-hidden="true">
              05
            </span>
            <p className="eyebrow">Sobre a autora</p>
          </div>
          <h2 className="section-title mt-7">{siteConfig.author}</h2>
          <p className="mt-5 max-w-xl font-heading text-2xl leading-snug text-foreground/80 sm:text-3xl">
            {siteContent.author.heading}
          </p>

          <div className="author-details mt-10">
            <div>
              <h3 className="label-title">Biografia</h3>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                {siteContent.author.biography}
              </p>
            </div>
            <div>
              <h3 className="label-title">Trajetória profissional</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {siteContent.author.professional}
              </p>
            </div>
          </div>

          <div className="author-socials mt-9">
            <span className="label-title">Acompanhe a autora</span>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center underline underline-offset-4"
              aria-label="Instagram de Simone Leite (abre em nova aba)"
            >
              {siteConfig.instagramHandle}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
