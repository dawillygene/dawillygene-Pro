import type { Metadata } from 'next';
import PageShell from '@/components/site/PageShell';
import HomeExperience from '@/components/site/HomeExperience';

export const metadata: Metadata = {
  title: 'Elia William Mariki (dawillygene) — Software Engineer & Founder',
  description:
    'Elia William Mariki (dawillygene) is a Tanzanian software engineer and founder of GeneLabs Software Tz, building secure, scalable digital products, admin dashboards, and backend APIs for real business operations.',
  alternates: { canonical: 'https://dawillygene.com' },
  openGraph: {
    type: 'profile',
    url: 'https://dawillygene.com',
    title: 'Elia William Mariki (dawillygene) — Software Engineer & Founder',
    description:
      'Founder of GeneLabs Software Tz. Secure, scalable software systems for real business operations, engineered by Elia William Mariki.',
  },
};

export default function Home() {
  return (
    <PageShell padded={false}>
      <HomeExperience />
    </PageShell>
  );
}
