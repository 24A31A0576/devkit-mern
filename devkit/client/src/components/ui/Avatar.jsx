export default function Avatar({ name, size = 36, src }) {
  const initials = name?.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) || '?';
  const style = {
    width: size, height: size, borderRadius: '50%',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: size * 0.35, fontWeight: 700, color: '#fff',
    background: src ? 'transparent' : 'linear-gradient(135deg, var(--color-primary), var(--color-accent-green))',
    overflow: 'hidden', flexShrink: 0,
  };
  return (
    <div style={style}>
      {src ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : initials}
    </div>
  );
}
