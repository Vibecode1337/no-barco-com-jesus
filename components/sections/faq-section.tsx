import { Plus } from 'lucide-react';
import { siteContent } from '@/lib/site-content';

export function FaqSection() {
  return (
    <section id="faq" className="faq-section section-space scroll-mt-24">
      <div className="container-shell grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
        <header className="lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow">Perguntas frequentes</p>
          <h2 className="section-title mt-5">Antes de começar sua leitura.</h2>
          <p className="mt-7 max-w-sm text-sm leading-7 text-muted-foreground">
            Informações essenciais sobre a compra e o acesso às duas edições.
          </p>
        </header>
        <div className="faq-list">
          {siteContent.faq.map((item, index) => (
            <details className="faq-item group" key={item.question}>
              <summary>
                <span className="faq-item__number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="faq-item__question">{item.question}</span>
                <span className="faq-item__icon">
                  <Plus aria-hidden="true" />
                </span>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
