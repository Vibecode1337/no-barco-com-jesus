import { ArrowDown } from 'lucide-react';
import { PageMotion } from '@/components/page-motion';
import { AboutBook } from '@/components/sections/about-book';
import { AudienceSection } from '@/components/sections/audience-section';
import { AuthorSection } from '@/components/sections/author-section';
import { BuySection } from '@/components/sections/buy-section';
import { ClosingSection } from '@/components/sections/closing-section';
import { FaqSection } from '@/components/sections/faq-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { Hero } from '@/components/sections/hero';
import { QuoteSection } from '@/components/sections/quote-section';
import { ReviewsSection } from '@/components/sections/reviews-section';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { siteConfig } from '@/lib/site-config';

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteConfig.siteUrl}/#website`,
      url: siteConfig.siteUrl,
      name: siteConfig.siteName,
      inLanguage: 'pt-BR',
    },
    {
      '@type': 'Book',
      '@id': `${siteConfig.siteUrl}/#book`,
      name: siteConfig.title,
      author: { '@type': 'Person', name: siteConfig.author },
      inLanguage: 'pt-BR',
      url: siteConfig.siteUrl,
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        }}
        type="application/ld+json"
      />
      <a className="skip-link" href="#conteudo-principal">
        Pular para o conteúdo
      </a>
      <SiteHeader />
      <PageMotion />
      <main id="conteudo-principal">
        <Hero />
        <div
          className="container-shell flex justify-center py-7"
          aria-hidden="true"
        >
          <ArrowDown className="h-4 w-4 text-primary/55" />
        </div>
        <AboutBook />
        <AudienceSection />
        <FeaturesSection />
        <QuoteSection />
        <AuthorSection />
        <ReviewsSection />
        <BuySection />
        <FaqSection />
        <ClosingSection />
      </main>
      <SiteFooter />
    </>
  );
}
