import { ImageResponse } from 'next/og';

// Branded 1200×630 card used for link previews on WhatsApp, LinkedIn, X, etc.
export const runtime = 'edge';
export const alt = 'Elia William Mariki (dawillygene) — Software Engineer & IoT Engineer, founder of GeneLabs Software Tz';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #0a0a0f 0%, #111827 55%, #0f172a 100%)',
          color: '#e2e8f0',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 8,
            textTransform: 'uppercase',
            color: '#38bdf8',
            marginBottom: 28,
          }}
        >
          dawillygene.com
        </div>
        <div style={{ fontSize: 78, fontWeight: 800, lineHeight: 1.05, marginBottom: 24 }}>
          Elia William Mariki
        </div>
        <div style={{ fontSize: 40, fontWeight: 600, color: '#a5b4fc', marginBottom: 36 }}>
          Software Engineer &amp; IoT Engineer
        </div>
        <div style={{ fontSize: 30, color: '#94a3b8', maxWidth: 900 }}>
          Founder of GeneLabs Software Tz — secure, scalable digital products &amp; IoT systems for real operations.
        </div>
      </div>
    ),
    { ...size },
  );
}
