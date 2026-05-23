import { Link } from 'react-router-dom';
import Button from '../ui/Button.jsx';

const s = {
  hero: {
    padding: '5rem 1.5rem 4rem',
    textAlign: 'center',
    background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(108,99,255,0.12) 0%, transparent 70%)',
    position: 'relative', overflow: 'hidden',
  },
  pill: {
    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
    background: 'rgba(108,99,255,0.12)', border: '1px solid rgba(108,99,255,0.35)',
    color: 'var(--color-primary-light)', fontSize: '0.72rem', fontWeight: 600,
    padding: '0.35rem 1rem', borderRadius: 'var(--radius-full)',
    marginBottom: '1.5rem', letterSpacing: '0.04em',
  },
  h1: {
    fontSize: 'clamp(2.2rem, 6vw, 3.5rem)', fontWeight: 900,
    lineHeight: 1.08, marginBottom: '1rem', letterSpacing: '-0.03em',
  },
  accent: { color: 'var(--color-primary-light)' },
  sub: { color: 'var(--color-text-muted)', fontSize: '1rem', maxWidth: 520, margin: '0 auto 2rem', lineHeight: 1.6 },
  ctaRow: { display: 'flex', gap: '0.8rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' },
  stats: {
    display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap',
    paddingTop: '2rem', borderTop: '1px solid var(--color-border)',
  },
  stat: { textAlign: 'center' },
  statNum: { fontSize: '1.6rem', fontWeight: 900, color: 'var(--color-text)' },
  statLabel: { fontSize: '0.68rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' },
};

export default function HeroSection() {
  return (
    <section style={s.hero}>
      <div style={s.pill}>✦ Free & Open Source · 60+ Components</div>
      <h1 style={s.h1}>
        Build UIs <span style={s.accent}>10x Faster.</span><br />Zero Setup.
      </h1>
      <p style={s.sub}>
        A beginner-friendly design system with copy-paste components for HTML, CSS & React.
        No install. No config. Just beautiful code.
      </p>
      <div style={s.ctaRow}>
        <Link to="/components"><Button size="lg">Browse Components →</Button></Link>
        <Link to="/theme"><Button variant="secondary" size="lg">AI Theme Generator ✦</Button></Link>
      </div>
      <div style={s.stats}>
        {[['60+', 'Components'], ['3', 'Frameworks'], ['0', 'Install Steps'], ['100%', 'Free']].map(([num, label]) => (
          <div key={label} style={s.stat}>
            <div style={s.statNum}>{num}</div>
            <div style={s.statLabel}>{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
