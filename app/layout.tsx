import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { MetaPixel } from '@/components/meta-pixel';
import { siteConfig } from '@/lib/site-config';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.title} | ${siteConfig.author}`,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.siteDescription,
  metadataBase: new URL(siteConfig.siteUrl),
  alternates: { canonical: '/' },
  applicationName: siteConfig.title,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  category: 'Literatura',
  robots: {
    index: siteConfig.indexingEnabled,
    follow: siteConfig.indexingEnabled,
    googleBot: {
      index: siteConfig.indexingEnabled,
      follow: siteConfig.indexingEnabled,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: siteConfig.siteName,
    title: siteConfig.siteName,
    description: siteConfig.siteDescription,
    images: siteConfig.socialImageUrl
      ? [
          {
            url: siteConfig.socialImageUrl,
            width: 1200,
            height: 630,
            alt: `${siteConfig.title}, de ${siteConfig.author}`,
          },
        ]
      : undefined,
  },
  twitter: {
    card: siteConfig.socialImageUrl ? 'summary_large_image' : 'summary',
    title: siteConfig.siteName,
    description: siteConfig.siteDescription,
    images: siteConfig.socialImageUrl ? [siteConfig.socialImageUrl] : undefined,
  },
  icons: { icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }] },
  manifest: '/manifest.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const bookSchema = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: siteConfig.title,
    alternateName: `${siteConfig.title} — ${siteConfig.subtitle}`,
    author: { '@type': 'Person', name: siteConfig.author },
    inLanguage: 'pt-BR',
    url: siteConfig.siteUrl,
    image: `${siteConfig.siteUrl}/images/no-barco-com-jesus-capa.jpg`,
  };

  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }}
        />
        {children}
        <MetaPixel />
      </body>
    </html>
  );
}
