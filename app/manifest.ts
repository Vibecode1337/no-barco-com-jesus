import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'No Barco com Jesus — Simone Leite',
    short_name: 'No Barco com Jesus',
    description: 'Site oficial do livro No Barco com Jesus, de Simone Leite.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff9f0',
    theme_color: '#17182f',
    lang: 'pt-BR',
    icons: [{ src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' }],
  };
}
