import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { componentService } from '../services/componentService.js';
import { useClipboard } from '../hooks/useClipboard.js';
import Button from '../components/ui/Button.jsx';
import Badge from '../components/ui/Badge.jsx';
import Spinner from '../components/ui/Spinner.jsx';

export default function ComponentDetailPage() {
  const { slug } = useParams();
  const [component, setComponent] = useState(null);
  const [activeTab, setActiveTab] = useState('html');
  const [loading, setLoading] = useState(true);
  const { copied, copy } = useClipboard();

  useEffect(() => {
    componentService.getBySlug(slug)
      .then(setComponent)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem' }}><Spinner size={40} /></div>;
  if (!component) return <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--color-text-muted)' }}>Component not found. <Link to="/components" style={{ color: 'var(--color-primary-light)' }}>Go back</Link></div>;

  const code = activeTab === 'html' ? component.htmlCode : activeTab === 'react' ? component.reactCode : component.cssCode;

  const s = {
    wrap: { maxWidth: 900, margin: '0 auto', padding: '2rem 1.5rem' },
    breadcrumb: { fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', display: 'flex', gap: '0.5rem', alignItems: 'center' },
    h1: { fontSize: '1.8rem', fontWeight: 900, marginBottom: '0.5rem' },
    desc: { color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '0.9rem' },
    preview: {
      background: 'var(--color-card)', border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-md)', padding: '2rem', marginBottom: '1.5rem',
      minHeight: 160, display: 'flex', alignItems: 'center', justifyContent: 'center',
    },
    tabs: { display: 'flex', gap: 0, borderBottom: '1px solid var(--color-border)', marginBottom: 0 },
    tab: (active) => ({
      padding: '0.6rem 1.2rem', fontSize: '0.78rem', fontWeight: 600,
      color: active ? 'var(--color-primary-light)' : 'var(--color-text-muted)',
      borderBottom: `2px solid ${active ? 'var(--color-primary)' : 'transparent'}`,
      cursor: 'pointer', background: 'none', border: 'none', fontFamily: 'inherit',
      borderRadius: 0,
    }),
    codeBlock: {
      background: 'var(--color-surface)', border: '1px solid var(--color-border)',
      borderTop: 'none', borderRadius: '0 0 var(--radius-md) var(--radius-md)',
      padding: '1.2rem', fontFamily: 'var(--font-mono)', fontSize: '0.78rem',
      color: 'var(--color-accent-green)', overflowX: 'auto', whiteSpace: 'pre', lineHeight: 1.6,
    },
  };

  return (
    <div style={s.wrap}>
      <div style={s.breadcrumb}>
        <Link to="/components" style={{ color: 'var(--color-primary-light)' }}>Components</Link>
        <span>/</span><span>{component.name}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.5rem' }}>
        <h1 style={s.h1}>{component.name}</h1>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Badge variant="neutral">{component.category}</Badge>
          <Badge variant="info">#{component.usageCount} copies</Badge>
        </div>
      </div>
      <p style={s.desc}>{component.description}</p>
      <div style={s.preview}>
        <span style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Live preview of {component.name}</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={s.tabs}>
          {['html', 'react', 'css'].map(tab => (
            <button key={tab} style={s.tab(activeTab === tab)} onClick={() => setActiveTab(tab)}>
              {tab.toUpperCase()}
            </button>
          ))}
        </div>
        <Button size="sm" variant={copied ? 'secondary' : 'ghost'} onClick={() => copy(code)}>
          {copied ? '✓ Copied!' : 'Copy Code'}
        </Button>
      </div>
      <pre style={s.codeBlock}>{code}</pre>
    </div>
  );
}
