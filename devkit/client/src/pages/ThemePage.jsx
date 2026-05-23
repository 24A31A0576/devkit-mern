import ThemeGenerator from '../components/sections/ThemeGenerator.jsx';

export default function ThemePage() {
  return (
    <div>
      <div style={{ padding: '2.5rem 1.5rem 0', textAlign: 'center', background: 'radial-gradient(ellipse 50% 40% at 50% 0%, rgba(108,99,255,0.1) 0%, transparent 70%)' }}>
        <div style={{ display: 'inline-block', background: 'rgba(108,99,255,0.12)', border: '1px solid rgba(108,99,255,0.35)', color: 'var(--color-primary-light)', fontSize: '0.7rem', fontWeight: 600, padding: '0.3rem 0.9rem', borderRadius: '100px', marginBottom: '1rem', letterSpacing: '0.06em' }}>
          AI POWERED ✦
        </div>
        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 900, marginBottom: '0.6rem' }}>
          AI Theme Generator
        </h1>
        <p style={{ color: 'var(--color-text-muted)', maxWidth: 460, margin: '0 auto 2rem', fontSize: '0.88rem' }}>
          3 questions. 10 seconds. A complete color palette, font pairing, and CSS variables for your project.
        </p>
      </div>
      <ThemeGenerator />
    </div>
  );
}
