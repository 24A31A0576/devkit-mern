const variants = {
  success: { border: 'rgba(0,217,163,0.3)', bg: 'rgba(0,217,163,0.08)', color: 'var(--color-accent-green)', icon: '✓' },
  error: { border: 'rgba(255,68,68,0.3)', bg: 'rgba(255,68,68,0.08)', color: '#FF6B6B', icon: '✕' },
  warning: { border: 'rgba(255,209,102,0.3)', bg: 'rgba(255,209,102,0.08)', color: 'var(--color-accent-yellow)', icon: '⚠' },
  info: { border: 'rgba(108,99,255,0.3)', bg: 'rgba(108,99,255,0.08)', color: 'var(--color-primary-light)', icon: 'ℹ' },
};

export default function Alert({ children, variant = 'info', onClose }) {
  const v = variants[variant];
  return (
    <div style={{
      display: 'flex', alignItems: 'flex-start', gap: '0.6rem',
      background: v.bg, border: `1px solid ${v.border}`,
      borderRadius: 'var(--radius-sm)', padding: '0.75rem 1rem',
      fontSize: '0.8rem', color: 'var(--color-text)',
    }}>
      <span style={{ color: v.color, fontWeight: 700, flexShrink: 0 }}>{v.icon}</span>
      <span style={{ flex: 1 }}>{children}</span>
      {onClose && (
        <button onClick={onClose} style={{ background: 'none', border: 'none', color: v.color, cursor: 'pointer', padding: 0 }}>✕</button>
      )}
    </div>
  );
}
