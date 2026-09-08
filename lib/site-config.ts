const whatsappMessage =
  'Olá! Tenho interesse em comprar o livro físico No Barco com Jesus.';
const whatsappNumber = '+55 22 99836-0822';
const defaultWhatsappUrl = `https://wa.me/5522998360822?text=${encodeURIComponent(whatsappMessage)}`;
const defaultAmazonUrl = 'https://a.co/d/0gKmPqMr';
const placeholderDescription =
  'Em No Barco com Jesus, Simone Leite conduz uma jornada de fé, acolhimento e reconstrução interior diante da rejeição, das perdas e do luto.';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://no-barco-com-jesus.vercel.app';
const siteDescription =
  process.env.NEXT_PUBLIC_SITE_DESCRIPTION ?? placeholderDescription;
const isPublicUrl =
  siteUrl.startsWith('https://') && !siteUrl.includes('seudominio');
const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? '';

export const siteConfig = {
  title: 'No Barco com Jesus',
  subtitle: 'Da rejeição à paz que restaura o coração',
  author: 'Simone Leite',
  instagramUrl: 'https://www.instagram.com/simone.leitee_/',
  instagramHandle: '@simone.leitee_',
  siteName: 'No Barco com Jesus — Simone Leite',
  siteUrl,
  siteDescription,
  socialImageUrl:
    process.env.NEXT_PUBLIC_SOCIAL_IMAGE_URL ??
    'https://no-barco-com-jesus.vercel.app/og.png',
  indexingEnabled:
    isPublicUrl && !siteDescription.toUpperCase().includes('[PLACEHOLDER'),
  whatsappNumber,
  whatsappMessage,
  whatsappUrl: process.env.NEXT_PUBLIC_WHATSAPP_URL ?? defaultWhatsappUrl,
  amazonUrl: process.env.NEXT_PUBLIC_AMAZON_URL ?? defaultAmazonUrl,
  metaPixelId,
  metaPixelEnabled: /^\d+$/.test(metaPixelId),
} as const;
