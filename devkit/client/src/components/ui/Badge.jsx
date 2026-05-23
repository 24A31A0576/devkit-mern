const variantStyles = {
  success: { background: 'rgba(0,217,163,0.15)', color: 'var(--color-accent-green)' },
  warning: { background: 'rgba(255,209,102,0.15)', color: 'var(--color-accent-yellow)' },
  error: { background: 'rgba(255,68,68,0.15)', color: '#FF6B6B' },
  info: { background: 'rgba(108,99,255,0.15)', color: 'var(--color-primary-light)' },
  neutral: { background: 'rgba(123,125,157,0.15)', color: 'var(--color-text-muted)' },
};

export default function Badge({ children, variant = 'info' }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-full)',
      fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.02em',
      ...variantStyles[variant],
    }}>
      {children}
    </span>
  );
}
