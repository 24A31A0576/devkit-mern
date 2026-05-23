export default function Toggle({ checked, onChange, label }) {
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer' }}>
      <div
        onClick={() => onChange(!checked)}
        style={{
          width: 44, height: 24, borderRadius: 12, position: 'relative',
          background: checked ? 'var(--color-primary)' : 'var(--color-border)',
          transition: '0.2s', cursor: 'pointer', flexShrink: 0,
        }}
      >
        <div style={{
          position: 'absolute', top: 3,
          left: checked ? 22 : 3,
          width: 18, height: 18, borderRadius: '50%',
          background: '#fff', transition: '0.2s',
        }} />
      </div>
      {label && <span style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>{label}</span>}
    </label>
  );
}
