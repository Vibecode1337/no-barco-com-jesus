'use client';

import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { siteConfig } from '@/lib/site-config';

const navigation = [
  ['Livro', '#livro'],
  ['Sobre', '#sobre'],
  ['Autora', '#autor'],
  ['Avaliações', '#avaliacoes'],
  ['FAQ', '#faq'],
] as const;

const mobileNavigation = [
  ['Início', '#inicio'],
  ...navigation,
  ['Comprar', '#comprar'],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const destination = useRef<string | null>(null);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)');
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener('change', closeOnDesktop);
    return () => desktop.removeEventListener('change', closeOnDesktop);
  }, []);

  const finishNavigation = (isOpen: boolean) => {
    if (isOpen || !destination.current) return;
    const hash = destination.current;
    requestAnimationFrame(() => {
      destination.current = null;
      const section = document.getElementById(hash.slice(1));
      if (!section) return;
      window.history.pushState(null, '', hash);
      const previousTabIndex = section.getAttribute('tabindex');
      section.setAttribute('tabindex', '-1');
      section.focus({ preventScroll: true });
      section.scrollIntoView({ block: 'start' });
      section.addEventListener(
        'blur',
        () => {
          if (previousTabIndex === null) section.removeAttribute('tabindex');
          else section.setAttribute('tabindex', previousTabIndex);
        },
        { once: true },
      );
    });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-foreground/8 bg-background">
      <div className="container-shell flex min-h-18 items-center justify-between gap-6">
        <a
          href="#inicio"
          className="site-logo font-heading text-lg font-semibold tracking-tight"
          aria-label="Voltar ao início"
        >
          {siteConfig.author}
        </a>
        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Navegação principal"
        >
          {navigation.map(([label, href]) => (
            <a className="nav-link" href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>
        <a
          className="button button--primary button--compact hidden sm:inline-flex"
          href="#comprar"
        >
          Comprar agora
        </a>
        <Dialog
          open={open}
          onOpenChange={setOpen}
          onOpenChangeComplete={finishNavigation}
        >
          <DialogTrigger
            className="menu-toggle lg:hidden"
            aria-label="Abrir menu"
          >
            <Menu aria-hidden="true" />
          </DialogTrigger>
          <DialogContent
            fullScreen
            className="book-menu"
            showCloseButton={false}
            finalFocus={() => (destination.current ? false : true)}
          >
            <div className="book-menu__top">
              <div>
                <DialogTitle className="book-menu__name">
                  {siteConfig.author}
                </DialogTitle>
                <DialogDescription className="book-menu__subtitle">
                  {siteConfig.title}
                </DialogDescription>
              </div>
              <DialogClose className="menu-toggle" aria-label="Fechar menu">
                <X aria-hidden="true" />
              </DialogClose>
            </div>
            <nav className="book-menu__links" aria-label="Navegação móvel">
              {mobileNavigation.map(([label, href], index) => (
                <a
                  href={href}
                  key={href}
                  onClick={(event) => {
                    if (
                      event.metaKey ||
                      event.ctrlKey ||
                      event.shiftKey ||
                      event.altKey
                    )
                      return;
                    event.preventDefault();
                    destination.current = href;
                    setOpen(false);
                  }}
                >
                  <span className="book-menu__number" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{label}</span>
                </a>
              ))}
            </nav>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
}
