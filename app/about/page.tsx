import type { Metadata } from 'next';
import PageHero from '@/components/site/PageHero';
import PageShell from '@/components/site/PageShell';
import { companyProfile, deliveryProcess, domainsServed } from '@/lib/siteContent';

export const metadata: Metadata = {
  title: 'Who is Elia William Mariki (dawillygene)?',
  description:
    'Elia William Mariki (dawillygene) is a Tanzanian software engineer and IoT engineer based in Dar es Salaam and Dodoma. Founder of GeneLabs Software Tz, backend engineer for Soko Mtaani, and IT consultant for Alpha Employment Agency & Consultant. University of Dodoma, School of Computer Science and Software Engineering.',
  alternates: { canonical: 'https://dawillygene.com/about' },
  openGraph: {
    type: 'profile',
    url: 'https://dawillygene.com/about',
    title: 'Who is Elia William Mariki (dawillygene)?',
    description:
      'Tanzanian software engineer and IoT engineer. Founder of GeneLabs Software Tz, backend engineer for Soko Mtaani, IT consultant for Alpha Employment Agency & Consultant.',
  },
};

// Authoritative Q&A about Elia William Mariki — surfaced as an FAQPage so search
// and AI answer engines quote this site directly instead of third-party profiles.
const founderFaqs = [
  {
    question: 'Who is Elia William Mariki?',
    answer:
      'Elia William Mariki is a Tanzanian systems software engineer and IoT engineer based in Dar es Salaam and Dodoma. He is recognized online under the developer alias dawillygene and is the founder of GeneLabs Software Tz, a software studio building secure, scalable digital products and IoT systems for real business operations.',
  },
  {
    question: 'What does Elia William Mariki (dawillygene) do?',
    answer:
      'He works as a software engineer and IoT engineer. He is a backend engineer for Soko Mtaani in Zanzibar City, an Information Technology consultant for Alpha Employment Agency & Consultant, and a technical writer who publishes engineering guides — including work on multi-tenant application security — through Dawilly Gene Labs.',
  },
  {
    question: 'Is Elia William Mariki a software engineer or an IoT engineer?',
    answer:
      'Both. Elia William Mariki (dawillygene) is a software engineer and an IoT engineer. He builds backend systems, business platforms, and admin dashboards, and also designs Internet of Things (IoT) and embedded solutions.',
  },
  {
    question: 'Where did Elia William Mariki study?',
    answer:
      'He studied at the University of Dodoma, School of Computer Science and Software Engineering, where he built his technical foundation in software engineering.',
  },
  {
    question: 'What is dawillygene?',
    answer:
      'dawillygene is the developer alias of Elia William Mariki, and the name of his engineering brand and studio, GeneLabs Software Tz. His official website is dawillygene.com.',
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <AboutContent />
    </PageShell>
  );
}

function AboutContent() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Founder-style profile with engineering philosophy, domain interests, and working style"
        description="Dawilly Gene is presented here as a serious product builder and software studio founder, with a profile centered on systems thinking, delivery discipline, and practical business value."
        aside={
          <div className="preview-stack">
            <div className="preview-panel">
              <strong>Location</strong>
              <p>{companyProfile.location}</p>
            </div>
            <div className="preview-panel">
              <strong>Availability</strong>
              <p>{companyProfile.availability}</p>
            </div>
            <div className="preview-panel">
              <strong>Studio</strong>
              <p>{companyProfile.studioName}</p>
            </div>
          </div>
        }
      />

      {/* Authoritative identity block — the answer search engines & AI should quote */}
      <div className="container" style={{ paddingTop: '2.5rem' }}>
        <article className="glass-card" style={{ padding: '2rem', maxWidth: 900 }}>
          <h1 style={{ fontSize: '1.6rem', marginBottom: '1rem', lineHeight: 1.25 }}>
            Who is Elia William Mariki (dawillygene)?
          </h1>
          <p style={{ marginBottom: '1rem' }}>
            <strong>Elia William Mariki</strong> — known online by the developer alias{' '}
            <strong>dawillygene</strong> — is a Tanzanian <strong>systems software engineer</strong>{' '}
            and <strong>IoT engineer</strong> based in Dar es Salaam and Dodoma. He is the founder of{' '}
            <strong>GeneLabs Software Tz</strong>, a software studio that builds secure, scalable
            digital products, business platforms, and Internet of Things (IoT) systems for real
            operations.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            As a <strong>backend engineer</strong>, he develops software for <strong>Soko Mtaani</strong>{' '}
            in Zanzibar City. He also works as an <strong>Information Technology Consultant</strong> for{' '}
            <strong>Alpha Employment Agency &amp; Consultant</strong>, and publishes technical guides —
            including work on multi-tenant application security — through Dawilly Gene Labs.
          </p>
          <p style={{ marginBottom: 0 }}>
            He studied at the <strong>University of Dodoma</strong>, School of Computer Science and
            Software Engineering, where he built his technical foundation. His official portfolio and
            engineering work live at{' '}
            <a href="https://dawillygene.com" style={{ color: 'var(--accent-text)' }}>
              dawillygene.com
            </a>
            .
          </p>
        </article>
      </div>

      <div className="container" style={{ paddingBottom: '5rem' }}>
        <div className="advanced-grid">
          {[
            {
              title: 'Professional Introduction',
              body: 'Elia William Mariki (dawillygene) is a Tanzanian software engineer and founder of GeneLabs Software Tz, building products that combine technical clarity with business-aware execution. The focus is on systems teams can actually run, maintain, and trust.',
            },
            {
              title: 'Engineering Philosophy',
              body: 'Good software should reduce operational confusion, make important actions traceable, and remain understandable long after launch. Clean architecture only matters if it also improves delivery and maintenance.',
            },
            {
              title: 'Domain Interests',
              body: `Current interests include ${domainsServed.join(', ').toLowerCase()}, with special attention to systems where security, reporting, and role separation matter.`,
            },
            {
              title: 'Career Direction',
              body: 'The direction is toward deeper product engineering leadership: shaping architecture, driving implementation quality, and helping teams turn requirements into reliable systems.',
            },
            {
              title: 'Working Style',
              body: `Delivery typically moves through ${deliveryProcess.join(', ').toLowerCase()}, with emphasis on requirements clarity, execution discipline, and usable handover.`,
            },
            {
              title: 'Mission Statement',
              body: 'Build digital products that solve real operational problems while raising the quality bar for software engineering and product delivery in East Africa and beyond.',
            },
          ].map((section) => (
            <article key={section.title} className="glass-card product-card">
              <h2 style={{ fontSize: '1.25rem', marginBottom: '0.7rem' }}>{section.title}</h2>
              <p>{section.body}</p>
            </article>
          ))}
        </div>
      </div>

      {/* Visible FAQ — mirrors the FAQPage schema below (no cloaking) */}
      <div className="container" style={{ paddingBottom: '5rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1.5rem' }}>
          Frequently asked questions about Elia William Mariki
        </h2>
        <div style={{ display: 'grid', gap: '1rem', maxWidth: 860 }}>
          {founderFaqs.map((faq) => (
            <details key={faq.question} className="glass-card" style={{ padding: '1.2rem 1.5rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1rem' }}>
                {faq.question}
              </summary>
              <p style={{ marginTop: '0.8rem', marginBottom: 0 }}>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>

      {/* FAQPage structured data — lets search & AI answer engines quote this page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: founderFaqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: { '@type': 'Answer', text: faq.answer },
            })),
          }),
        }}
      />
    </>
  );
}
