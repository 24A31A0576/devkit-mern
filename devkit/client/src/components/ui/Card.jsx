export default function Card({ children, style = {}, hover = false }) {
  const base = {
    background: 'var(--color-card)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-md)',
    padding: '1.25rem',
    transition: hover ? 'transform 0.2s, border-color 0.2s' : 'none',
    ...style,
  };
  return <div style={base}>{children}</div>;
}
