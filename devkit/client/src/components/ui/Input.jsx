import { useState } from 'react';

export default function Input({ label, placeholder, type = 'text', value, onChange, error, required }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
      {label && (
        <label style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
          {label} {required && <span style={{ color: '#FF6B6B' }}>*</span>}
        </label>
      )}
      <input
        type={type} value={value} onChange={onChange} placeholder={placeholder}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{
          background: 'var(--color-card)',
          border: `1px solid ${error ? '#FF4444' : focused ? 'var(--color-primary)' : 'var(--color-border)'}`,
          borderRadius: 'var(--radius-sm)', padding: '0.55rem 0.9rem',
          color: 'var(--color-text)', fontSize: '0.85rem',
          outline: 'none', transition: '0.2s', width: '100%',
          boxShadow: focused && !error ? '0 0 0 3px rgba(108,99,255,0.15)' : 'none',
        }}
      />
      {error && <span style={{ fontSize: '0.7rem', color: '#FF6B6B' }}>{error}</span>}
    </div>
  );
}
