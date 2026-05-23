import { Link } from 'react-router-dom';

const s = {
  footer: {
    borderTop: '1px solid var(--color-border)',
    background: 'var(--color-surface)',
    padding: '1.5rem',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    flexWrap: 'wrap', gap: '1rem',
  },
  logo: { fontWeight: 900, color: 'var(--color-primary-light)', fontSize: '0.95rem' },
  links: { display: 'flex', gap: '1.2rem' },
  link: { fontSize: '0.72rem', color: 'var(--color-text-muted)' },
  copy: { fontSize: '0.65rem', color: 'var(--color-text-subtle)' },
};

export default function Footer() {
  return (
    <footer style={s.footer}>
      <div style={s.logo}>devKit</div>
      <div style={s.links}>
        <Link to="/components" style={s.link}>Components</Link>
        <Link to="/theme" style={s.link}>Theme Generator</Link>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={s.link}>GitHub</a>
      </div>
      <div style={s.copy}>© 2026 devKit · MIT License · DTI Project</div>
    </footer>
  );
}
