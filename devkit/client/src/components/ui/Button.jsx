// Reusable Button component used across devKit UI
const variants = {
  primary: { background: 'var(--color-primary)', color: '#fff', border: 'none', boxShadow: '0 4px 20px rgba(108,99,255,0.35)' },
  secondary: { background: 'transparent', color: 'var(--color-text-muted)', border: '1px solid var(--color-border)' },
  ghost: { background: 'transparent', color: 'var(--color-primary-light)', border: '1px solid rgba(108,99,255,0.35)' },
  danger: { background: '#FF4444', color: '#fff', border: 'none' },
};
const sizes = {
  sm: { padding: '0.3rem 0.75rem', fontSize: '0.7rem' },
  md: { padding: '0.5rem 1.25rem', fontSize: '0.82rem' },
  lg: { padding: '0.75rem 1.75rem', fontSize: '0.95rem' },
};

export default function Button({ children, variant = 'primary', size = 'md', disabled, onClick, fullWidth, style = {} }) {
  const base = {
    fontFamily: 'inherit', fontWeight: 700, borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1,
    transition: 'all 0.2s', display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
    width: fullWidth ? '100%' : 'auto', justifyContent: fullWidth ? 'center' : 'flex-start',
    ...variants[variant], ...sizes[size], ...style,
  };
  return <button style={base} disabled={disabled} onClick={onClick}>{children}</button>;
}
