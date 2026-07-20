// App Router loading UI — shown during route transitions / server rendering.
export default function Loading() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg-primary, #0a0a0f)',
      }}
      aria-label="Loading"
      role="status"
    >
      <span
        style={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          border: '3px solid rgba(56,189,248,.25)',
          borderTopColor: '#38bdf8',
          display: 'inline-block',
          animation: 'admin-spin 0.7s linear infinite',
        }}
      />
      <style>{`@keyframes admin-spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
