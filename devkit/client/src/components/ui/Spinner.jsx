export default function Spinner({ size = 24, color = 'var(--color-primary)' }) {
  return (
    <div style={{
      width: size, height: size,
      border: `2px solid var(--color-border)`,
      borderTopColor: color,
      borderRadius: '50%',
      animation: 'spin 0.7s linear infinite',
    }}>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
