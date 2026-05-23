import { useState } from 'react';
import { useComponents } from '../hooks/useComponents.js';
import SearchBar from '../components/sections/SearchBar.jsx';
import ComponentCard from '../components/sections/ComponentCard.jsx';
import Spinner from '../components/ui/Spinner.jsx';

export default function ComponentsPage() {
  const { components, loading, updateFilters } = useComponents();

  const handleSearch = (q) => updateFilters({ search: q || undefined });
  const handleCategory = (cat) => updateFilters({ category: cat || undefined });
  const handleFramework = (fw) => updateFilters({ framework: fw || undefined });

  const s = {
    header: { padding: '2.5rem 1.5rem 1rem', maxWidth: 1100, margin: '0 auto' },
    h1: { fontSize: '1.8rem', fontWeight: 900, marginBottom: '0.3rem' },
    count: { color: 'var(--color-text-muted)', fontSize: '0.82rem' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem', padding: '1.5rem', maxWidth: 1100, margin: '0 auto' },
    empty: { textAlign: 'center', padding: '4rem', color: 'var(--color-text-muted)' },
  };

  return (
    <div>
      <div style={s.header}>
        <h1 style={s.h1}>Components</h1>
        <p style={s.count}>{loading ? '...' : `${components.length} components`}</p>
      </div>
      <SearchBar onSearch={handleSearch} onCategoryChange={handleCategory} onFrameworkChange={handleFramework} />
      {loading
        ? <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem' }}><Spinner size={40} /></div>
        : components.length === 0
          ? <div style={s.empty}><div style={{ fontSize: '2rem' }}>🔍</div><p>No components found. Try a different search.</p></div>
          : <div style={s.grid}>{components.map(c => <ComponentCard key={c._id} component={c} />)}</div>
      }
    </div>
  );
}
