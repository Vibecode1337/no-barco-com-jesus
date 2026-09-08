import Image from 'next/image';
import { siteContent } from '@/lib/site-content';

export function AboutBook() {
  return (
    <section id="livro" className="about-section section-space scroll-mt-24">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
          <header className="lg:sticky lg:top-32 lg:self-start">
            <p className="eyebrow">Conheça a obra</p>
            <h2 className="section-title mt-5">{siteContent.about.heading}</h2>
            <p className="mt-7 max-w-sm text-sm leading-7 text-muted-foreground">
              Da rejeição à paz que restaura o coração.
            </p>
            <figure className="about-author-photo mt-10">
              <Image
                alt="Simone Leite lendo No Barco com Jesus"
                height="1536"
                sizes="(max-width: 1024px) calc(100vw - 2rem), 330px"
                src="/images/simone-leite-lendo.jpg"
                width="1152"
              />
              <figcaption>A autora durante a leitura da obra</figcaption>
            </figure>
          </header>

          <div className="about-editorial">
            <div className="about-editorial__lead">
              <span aria-hidden="true">01</span>
              <div>
                <h3 className="label-title">Sobre o que é o livro</h3>
                <p className="editorial-lead mt-5">
                  {siteContent.about.introduction}
                </p>
              </div>
            </div>

            <div className="about-editorial__row">
              <span aria-hidden="true">02</span>
              <div>
                <h3 className="label-title">Proposta da obra</h3>
                <p className="mt-5 text-base leading-8 text-muted-foreground">
                  {siteContent.about.proposition}
                </p>
              </div>
            </div>

            <div className="about-editorial__grid">
              <article>
                <span aria-hidden="true">03</span>
                <h3 className="label-title mt-8">Temas abordados</h3>
                <ul className="mt-5 space-y-4 text-sm leading-6 text-muted-foreground">
                  {siteContent.about.themes.map((theme) => (
                    <li key={theme}>{theme}</li>
                  ))}
                </ul>
              </article>
              <article id="sobre" className="scroll-mt-28">
                <span aria-hidden="true">04</span>
                <h3 className="label-title mt-8">Para quem é indicado</h3>
                <p className="mt-5 text-sm leading-7 text-muted-foreground">
                  {siteContent.about.audience}
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
