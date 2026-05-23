import { useState } from 'react';

const CATEGORIES = ['All', 'Layout', 'Forms', 'Navigation', 'Feedback', 'Data Display', 'Typography'];

export default function SearchBar({ onSearch, onCategoryChange, onFrameworkChange }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeFramework, setActiveFramework] = useState('all');

  const handleCategory = (cat) => {
    setActiveCategory(cat);
    onCategoryChange(cat === 'All' ? '' : cat);
  };

  const s = {
    wrap: {
      background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)',
      borderBottom: '1px solid var(--color-border)', padding: '1rem 1.5rem',
      display: 'flex', flexDirection: 'column', gap: '0.8rem',
    },
    row: { display: 'flex', gap: '0.8rem', alignItems: 'center', flexWrap: 'wrap' },
    searchBox: {
      flex: 1, minWidth: 200,
      background: 'var(--color-card)', border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-sm)', padding: '0.5rem 1rem',
      color: 'var(--color-text)', fontSize: '0.82rem',
      display: 'flex', alignItems: 'center', gap: '0.5rem',
    },
    input: {
      background: 'none', border: 'none', outline: 'none',
      color: 'var(--color-text)', fontSize: '0.82rem', flex: 1,
      fontFamily: 'inherit',
    },
    chips: { display: 'flex', gap: '0.4rem', flexWrap: 'wrap' },
    chip: (active) => ({
      background: active ? 'rgba(108,99,255,0.2)' : 'var(--color-card)',
      border: `1px solid ${active ? 'var(--color-primary)' : 'var(--color-border)'}`,
      color: active ? 'var(--color-primary-light)' : 'var(--color-text-muted)',
      padding: '0.3rem 0.8rem', borderRadius: 'var(--radius-full)',
      fontSize: '0.7rem', cursor: 'pointer', transition: '0.15s',
      fontWeight: active ? 600 : 400,
    }),
  };

  return (
    <div style={s.wrap}>
      <div style={s.row}>
        <div style={s.searchBox}>
          <span style={{ color: 'var(--color-text-subtle)' }}>🔍</span>
          <input
            style={s.input}
            placeholder="Search components… (button, card, navbar…)"
            onChange={e => onSearch(e.target.value)}
          />
        </div>
        <div style={s.chips}>
          {['All', 'HTML', 'React'].map(f => (
            <div key={f} style={s.chip(activeFramework === f.toLowerCase())}
              onClick={() => { setActiveFramework(f.toLowerCase()); onFrameworkChange(f === 'All' ? '' : f.toLowerCase()); }}>
              {f}
            </div>
          ))}
        </div>
      </div>
      <div style={s.chips}>
        {CATEGORIES.map(cat => (
          <div key={cat} style={s.chip(activeCategory === cat)} onClick={() => handleCategory(cat)}>
            {cat}
          </div>
        ))}
      </div>
    </div>
  );
}
