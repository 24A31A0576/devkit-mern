import { useState } from 'react';
import { themeService } from '../../services/themeService.js';
import { useTheme } from '../../context/ThemeContext.jsx';
import Button from '../ui/Button.jsx';
import Input from '../ui/Input.jsx';
import Spinner from '../ui/Spinner.jsx';

const PROJECT_TYPES = ['Portfolio', 'SaaS App', 'E-commerce', 'Blog', 'Dashboard', 'Landing Page'];
const MOODS = ['Professional', 'Playful', 'Minimal', 'Bold', 'Elegant', 'Futuristic'];
const COLORS = ['Blue', 'Purple', 'Green', 'Orange', 'Red', 'Neutral'];

export default function ThemeGenerator() {
  const [step, setStep] = useState(0);
  const [projectType, setProjectType] = useState('');
  const [mood, setMood] = useState('');
  const [colorPref, setColorPref] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { generatedTheme, applyTheme } = useTheme();

  const generate = async () => {
    if (!projectType || !mood || !colorPref) return;
    setLoading(true); setError('');
    try {
      const data = await themeService.generate(projectType, mood, colorPref);
      applyTheme(data.theme);
      setStep(4);
    } catch (e) {
      setError(e.response?.data?.message || 'Failed to generate theme. Check API key.');
    } finally { setLoading(false); }
  };

  const s = {
    wrap: { maxWidth: 640, margin: '0 auto', padding: '2rem 1.5rem' },
    optionGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.6rem', margin: '1rem 0' },
    option: (active) => ({
      padding: '0.7rem', borderRadius: 'var(--radius-sm)', textAlign: 'center',
      fontSize: '0.78rem', fontWeight: active ? 700 : 500, cursor: 'pointer',
      background: active ? 'rgba(108,99,255,0.2)' : 'var(--color-card)',
      border: `1px solid ${active ? 'var(--color-primary)' : 'var(--color-border)'}`,
      color: active ? 'var(--color-primary-light)' : 'var(--color-text-muted)',
      transition: '0.15s',
    }),
    colorSwatch: (hex, active) => ({
      width: 42, height: 42, borderRadius: 'var(--radius-sm)', cursor: 'pointer',
      border: `3px solid ${active ? '#fff' : 'transparent'}`, transform: active ? 'scale(1.15)' : 'none',
      transition: '0.15s', background: hex,
    }),
    swatchRow: { display: 'flex', gap: '0.6rem', margin: '1rem 0', flexWrap: 'wrap' },
    label: { fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-text-muted)', marginBottom: '0.3rem', display: 'block' },
  };

  const colorHexMap = { Blue: '#4C8BF5', Purple: '#6C63FF', Green: '#00D9A3', Orange: '#FF6B35', Red: '#EF4444', Neutral: '#6B7280' };

  if (loading) return <div style={{ textAlign: 'center', padding: '3rem' }}><Spinner size={40} /><p style={{ marginTop: '1rem', color: 'var(--color-text-muted)' }}>Generating your theme…</p></div>;

  if (step === 4 && generatedTheme) return (
    <div style={s.wrap}>
      <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.5rem' }}>Your Theme ✦</h2>
      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem', marginBottom: '1.5rem' }}>{generatedTheme.rationale}</p>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        {Object.entries(generatedTheme.colors || {}).map(([key, val]) => (
          <div key={key} style={{ textAlign: 'center' }}>
            <div style={{ width: 48, height: 48, background: val, borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', marginBottom: '0.3rem' }} />
            <div style={{ fontSize: '0.55rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>{val}</div>
            <div style={{ fontSize: '0.55rem', color: 'var(--color-text-subtle)' }}>{key}</div>
          </div>
        ))}
      </div>
      <div style={{ background: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1rem', marginBottom: '1rem' }}>
        <div style={{ fontSize: '0.65rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>Fonts: {generatedTheme.fonts?.heading} / {generatedTheme.fonts?.body}</div>
        <pre style={{ fontSize: '0.68rem', color: 'var(--color-accent-green)', overflowX: 'auto', fontFamily: 'var(--font-mono)', whiteSpace: 'pre-wrap' }}>{generatedTheme.cssVariables}</pre>
      </div>
      <Button onClick={() => setStep(0)} variant="secondary">Generate Another</Button>
    </div>
  );

  return (
    <div style={s.wrap}>
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.5rem' }}>
          {[1,2,3].map(n => <div key={n} style={{ flex: 1, height: 3, borderRadius: 2, background: step >= n - 1 ? 'var(--color-primary)' : 'var(--color-border)', transition: '0.3s' }} />)}
        </div>
      </div>

      {step === 0 && (
        <>
          <label style={s.label}>What type of project? <span style={{ color: '#FF6B6B' }}>*</span></label>
          <div style={s.optionGrid}>
            {PROJECT_TYPES.map(p => <div key={p} style={s.option(projectType === p)} onClick={() => setProjectType(p)}>{p}</div>)}
          </div>
          <Button onClick={() => setStep(1)} disabled={!projectType}>Next →</Button>
        </>
      )}

      {step === 1 && (
        <>
          <label style={s.label}>What's the vibe / mood?</label>
          <div style={s.optionGrid}>
            {MOODS.map(m => <div key={m} style={s.option(mood === m)} onClick={() => setMood(m)}>{m}</div>)}
          </div>
          <div style={{ display: 'flex', gap: '0.6rem' }}>
            <Button variant="secondary" onClick={() => setStep(0)}>← Back</Button>
            <Button onClick={() => setStep(2)} disabled={!mood}>Next →</Button>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <label style={s.label}>Pick a color direction:</label>
          <div style={s.swatchRow}>
            {COLORS.map(c => (
              <div key={c} style={{ textAlign: 'center' }}>
                <div style={s.colorSwatch(colorHexMap[c], colorPref === c)} onClick={() => setColorPref(c)} />
                <div style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)', marginTop: '0.3rem' }}>{c}</div>
              </div>
            ))}
          </div>
          {error && <div style={{ color: '#FF6B6B', fontSize: '0.75rem', marginBottom: '0.8rem' }}>{error}</div>}
          <div style={{ display: 'flex', gap: '0.6rem' }}>
            <Button variant="secondary" onClick={() => setStep(1)}>← Back</Button>
            <Button onClick={generate} disabled={!colorPref}>Generate Theme ✦</Button>
          </div>
        </>
      )}
    </div>
  );
}
