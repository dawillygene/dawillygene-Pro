import type { Metadata, Viewport } from 'next';
import { Geist_Mono, Playfair_Display } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { AuthProvider } from '@/lib/AuthContext';
import { ThemeProvider } from '@/components/ThemeProvider';
import FadeInObserver from '@/components/FadeInObserver';

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f6f7f4' },
    { media: '(prefers-color-scheme: dark)', color: '#111315' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://dawillygene.com'),
  title: {
    default: 'Dawilly Gene | Product Engineering Portfolio',
    template: '%s | Dawilly Gene',
  },
  description:
    'Software engineer building secure, scalable digital products for real business operations. Founder of GeneLabs Software Tz in Dodoma, Tanzania.',
  keywords: [
    'Elia William Mariki',
    'Elia Mariki',
    'elia-william-mariki',
    'dawillygene',
    'Dawilly Gene',
    'software engineer',
    'product engineering',
    'engineering standards',
    'admin dashboard systems',
    'backend API engineering',
    'business management platforms',
    'Tanzania',
    'Next.js',
    'TypeScript',
  ],
  authors: [{ name: 'Elia William Mariki (Dawilly Gene)', url: 'https://dawillygene.com' }],
  creator: 'Elia William Mariki (Dawilly Gene)',
  alternates: {
    canonical: 'https://dawillygene.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dawillygene.com',
    siteName: 'Dawilly Gene',
    title: 'Dawilly Gene (Elia William Mariki) | Product Engineering Portfolio',
    description:
      'Company-style software engineering portfolio featuring products, case studies, standards, services, writing, and recruiter-friendly experience by Elia William Mariki.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dawilly Gene (Elia William Mariki) | Product Engineering Portfolio',
    description:
      'Secure, scalable software systems for real business operations.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7M985Y5EYS"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7M985Y5EYS');
          `}
        </Script>
        {/* Prevent FOUC - apply theme before render */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme-preference');var d=document.documentElement;if(t==='light'||t==='dark'){d.setAttribute('data-theme',t)}else if(window.matchMedia('(prefers-color-scheme:dark)').matches){d.setAttribute('data-theme','dark')}else{d.setAttribute('data-theme','light')}}catch(e){}})()`,
          }}
        />
        {/* Schema.org Structured Data — Person + Organization + WebSite graph */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Person',
                  '@id': 'https://dawillygene.com/#person',
                  name: 'Elia William Mariki',
                  alternateName: ['Dawilly Gene', 'dawillygene', 'Elia Mariki'],
                  givenName: 'Elia',
                  familyName: 'Mariki',
                  additionalName: 'William',
                  url: 'https://dawillygene.com',
                  mainEntityOfPage: 'https://dawillygene.com/about',
                  image: 'https://dawillygene.com/logo.jpeg',
                  jobTitle: [
                    'Software Engineer',
                    'IoT Engineer',
                    'Systems Software Engineer',
                    'Backend Developer',
                  ],
                  description:
                    'Elia William Mariki (dawillygene) is a Tanzanian systems software engineer, IoT engineer, and backend developer based in Dar es Salaam and Dodoma. He is the founder of GeneLabs Software Tz, a backend engineer for Soko Mtaani, and an IT consultant for Alpha Employment Agency & Consultant. He builds secure, scalable digital products, IoT systems, and business platforms for real operations.',
                  disambiguatingDescription:
                    'Tanzanian software engineer and IoT engineer known online by the developer alias dawillygene.',
                  hasOccupation: [
                    {
                      '@type': 'Occupation',
                      name: 'Software Engineer',
                      occupationalCategory: '15-1252.00',
                    },
                    {
                      '@type': 'Occupation',
                      name: 'IoT Engineer',
                      occupationalCategory: '17-2072.00',
                    },
                  ],
                  nationality: { '@type': 'Country', name: 'Tanzania' },
                  homeLocation: [
                    { '@type': 'Place', name: 'Dar es Salaam, Tanzania' },
                    { '@type': 'Place', name: 'Dodoma, Tanzania' },
                  ],
                  alumniOf: {
                    '@type': 'CollegeOrUniversity',
                    name: 'University of Dodoma',
                    department: 'School of Computer Science and Software Engineering',
                    sameAs: 'https://www.udom.ac.tz/',
                  },
                  knowsAbout: [
                    'Software Engineering',
                    'Internet of Things (IoT)',
                    'IoT Engineering',
                    'Embedded Systems',
                    'Backend Development',
                    'Backend API Engineering',
                    'Product Engineering',
                    'Multi-tenant Application Security',
                    'Next.js',
                    'TypeScript',
                    'Firebase',
                    'Admin Dashboard Systems',
                    'Business Management Platforms',
                    'Engineering Standards',
                  ],
                  worksFor: [
                    { '@id': 'https://dawillygene.com/#organization' },
                    { '@type': 'Organization', name: 'Soko Mtaani' },
                    { '@type': 'Organization', name: 'Alpha Employment Agency & Consultant' },
                  ],
                  founder: { '@id': 'https://dawillygene.com/#organization' },
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Dodoma',
                    addressCountry: 'TZ',
                  },
                  sameAs: [
                    'https://github.com/dawillygene',
                    'https://www.linkedin.com/in/elia-william-mariki/',
                    'https://www.instagram.com/dawillygene/',
                    'https://www.tiktok.com/@dawilly_gene',
                    'https://www.youtube.com/@dawillygene',
                  ],
                },
                {
                  '@type': 'Organization',
                  '@id': 'https://dawillygene.com/#organization',
                  name: 'GeneLabs Software Tz',
                  alternateName: 'Genelabs Software Tz',
                  url: 'https://dawillygene.com',
                  logo: 'https://dawillygene.com/logo.jpeg',
                  founder: { '@id': 'https://dawillygene.com/#person' },
                  foundingLocation: {
                    '@type': 'Place',
                    address: {
                      '@type': 'PostalAddress',
                      addressLocality: 'Dodoma',
                      addressCountry: 'TZ',
                    },
                  },
                  areaServed: 'Worldwide',
                  sameAs: ['https://github.com/dawillygene'],
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://dawillygene.com/#website',
                  url: 'https://dawillygene.com',
                  name: 'Dawilly Gene — Elia William Mariki',
                  description:
                    'Product engineering portfolio of Elia William Mariki (dawillygene), founder of GeneLabs Software Tz.',
                  publisher: { '@id': 'https://dawillygene.com/#person' },
                  inLanguage: 'en',
                  potentialAction: {
                    '@type': 'SearchAction',
                    target: {
                      '@type': 'EntryPoint',
                      urlTemplate:
                        'https://dawillygene.com/blog?q={search_term_string}',
                    },
                    'query-input': 'required name=search_term_string',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${playfairDisplay.variable} ${geistMono.variable} antialiased`}>
        {/* Invisible SEO/Accessibility Signature Block */}
        <span style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: '0',
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          border: '0',
        }}>
          Website developed and maintained by Elia William Mariki (dawillygene), a Tanzanian systems software engineer and IoT engineer based in Dar es Salaam and Dodoma, and founder of GeneLabs Software Tz.
        </span>
        <ThemeProvider>
          <FadeInObserver />
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
