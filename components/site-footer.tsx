import { siteConfig } from '@/lib/site-config';
import { siteContent } from '@/lib/site-content';

const footerNavigation = [
  ['Livro', '#livro'],
  ['Sobre', '#sobre'],
  ['Autora', '#autor'],
  ['Avaliações', '#avaliacoes'],
  ['Comprar', '#comprar'],
  ['FAQ', '#faq'],
] as const;

export function SiteFooter() {
  return (
    <footer
      id="privacidade"
      className="site-footer bg-foreground text-background"
    >
      <div className="container-shell py-14 sm:py-20">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <a href="#inicio" className="font-heading text-3xl">
              {siteConfig.author}
            </a>
            <p>Autora de {siteConfig.title}</p>
            <p>{siteContent.footer.description}</p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <p className="site-footer__label">Navegação</p>
            <div className="site-footer__links">
              {footerNavigation.map(([label, href]) => (
                <a href={href} key={href}>
                  {label}
                </a>
              ))}
            </div>
          </nav>

          <div>
            <p className="site-footer__label">Contato e redes</p>
            <div className="site-footer__contact">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center underline underline-offset-4"
                aria-label="Contato pelo WhatsApp (abre em nova aba)"
              >
                {siteContent.footer.contact}
              </a>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center underline underline-offset-4"
                aria-label="Instagram de Simone Leite (abre em nova aba)"
              >
                Instagram · {siteConfig.instagramHandle}
              </a>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>
            © {new Date().getFullYear()} {siteConfig.author}. Todos os direitos
            reservados.
          </p>
          <details className="max-w-xl">
            <summary className="inline-flex min-h-11 cursor-pointer items-center underline underline-offset-4">
              Privacidade
            </summary>
            <p className="mt-3 text-xs leading-6 text-background/65">
              {siteContent.footer.privacy}
            </p>
          </details>
          <a href="#inicio">Voltar ao início ↑</a>
        </div>
      </div>
    </footer>
  );
}
