import { Link } from 'react-router-dom';
import { useClipboard } from '../../hooks/useClipboard.js';
import Badge from '../ui/Badge.jsx';

export default function ComponentCard({ component }) {
  const { copied, copy } = useClipboard();

  const s = {
    card: {
      background: 'var(--color-card)', border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-md)', overflow: 'hidden',
      transition: 'transform 0.2s, border-color 0.2s', cursor: 'pointer',
    },
    preview: {
      height: 110, background: 'var(--color-border-subtle)',
      borderBottom: '1px solid var(--color-border)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem',
    },
    footer: { padding: '0.7rem 0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
    name: { fontSize: '0.78rem', fontWeight: 700, marginBottom: '0.3rem' },
    tags: { display: 'flex', gap: '0.3rem' },
    copyBtn: {
      fontSize: '0.6rem', padding: '0.22rem 0.55rem',
      background: copied ? 'rgba(0,217,163,0.2)' : 'rgba(108,99,255,0.15)',
      color: copied ? 'var(--color-accent-green)' : 'var(--color-primary-light)',
      border: `1px solid ${copied ? 'rgba(0,217,163,0.3)' : 'rgba(108,99,255,0.3)'}`,
      borderRadius: 'var(--radius-sm)', cursor: 'pointer', transition: '0.2s', fontFamily: 'inherit', fontWeight: 600,
    },
  };

  return (
    <Link to={`/components/${component.slug}`} style={{ textDecoration: 'none' }}>
      <div style={s.card}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.borderColor = 'var(--color-primary)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.borderColor = 'var(--color-border)'; }}>
        <div style={s.preview}>
          <span style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>[ {component.name} Preview ]</span>
        </div>
        <div style={s.footer}>
          <div>
            <div style={s.name}>{component.name}</div>
            <div style={s.tags}>
              {component.htmlCode && <Badge variant="neutral" style={{ fontSize: '0.5rem' }}>HTML</Badge>}
              {component.reactCode && <Badge variant="info" style={{ fontSize: '0.5rem' }}>React</Badge>}
            </div>
          </div>
          <button style={s.copyBtn}
            onClick={e => { e.preventDefault(); copy(component.htmlCode); }}>
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
    </Link>
  );
}
