import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Dawilly Gene — Elia William Mariki',
    short_name: 'Dawilly Gene',
    description:
      'Product engineering portfolio of Elia William Mariki (dawillygene), founder of GeneLabs Software Tz.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0f',
    theme_color: '#111315',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
      { src: '/logo.jpeg', sizes: '512x512', type: 'image/jpeg' },
    ],
  };
}
