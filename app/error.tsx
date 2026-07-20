'use client';

import { useEffect } from 'react';
import Link from 'next/link';

// App Router error boundary — renders instead of a blank page when a route throws.
export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
        background: 'var(--bg-primary, #0a0a0f)',
        color: 'var(--text-primary, #e2e8f0)',
        gap: '1rem',
      }}
    >
      <div style={{ fontSize: '3rem' }}>⚠️</div>
      <h1 style={{ fontSize: '1.6rem', fontWeight: 800 }}>Something went wrong</h1>
      <p style={{ color: 'var(--text-tertiary, #94a3b8)', maxWidth: 420 }}>
        An unexpected error occurred while loading this page. You can try again or head back home.
      </p>
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button onClick={reset} className="btn-primary">
          Try again
        </button>
        <Link href="/" className="btn-secondary" style={{ textDecoration: 'none' }}>
          Go home
        </Link>
      </div>
    </div>
  );
}
