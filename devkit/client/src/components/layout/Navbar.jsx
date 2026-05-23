import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';

const styles = {
  nav: {
    position: 'sticky', top: 0, zIndex: 100,
    background: 'rgba(13,13,13,0.92)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid var(--color-border)',
    padding: '0 1.5rem',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    height: '60px',
  },
  logo: { fontWeight: 900, fontSize: '1.2rem', letterSpacing: '-0.02em', color: 'var(--color-primary-light)' },
  logoAccent: { color: 'var(--color-accent-green)' },
  links: { display: 'flex', gap: '1.5rem', alignItems: 'center' },
  link: { fontSize: '0.82rem', fontWeight: 500, color: 'var(--color-text-muted)', transition: '0.2s' },
  activeLink: { color: 'var(--color-text)' },
  btn: {
    background: 'var(--color-primary)', color: '#fff',
    padding: '0.4rem 1rem', borderRadius: 'var(--radius-sm)',
    fontSize: '0.78rem', fontWeight: 700, border: 'none',
    cursor: 'pointer', transition: '0.2s',
  },
  userChip: {
    display: 'flex', alignItems: 'center', gap: '0.5rem',
    background: 'var(--color-card)', border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-full)', padding: '0.3rem 0.8rem',
    fontSize: '0.75rem',
  },
  avatar: {
    width: 26, height: 26, borderRadius: '50%',
    background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent-green))',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '0.65rem', fontWeight: 700, color: '#fff',
  },
};

export default function Navbar() {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/');

  const handleLogout = () => { logout(); navigate('/'); };

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>
        dev<span style={styles.logoAccent}>Kit</span>
      </Link>

      <div style={styles.links}>
        <Link to="/components" style={{ ...styles.link, ...(isActive('/components') ? styles.activeLink : {}) }}>
          Components
        </Link>
        <Link to="/theme" style={{ ...styles.link, ...(isActive('/theme') ? styles.activeLink : {}) }}>
          AI Themes
        </Link>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={styles.link}>
          GitHub ↗
        </a>
      </div>

      <div style={styles.links}>
        {isAuthenticated ? (
          <>
            <div style={styles.userChip}>
              <div style={styles.avatar}>{user?.name?.[0]?.toUpperCase()}</div>
              <span style={{ color: 'var(--color-text-muted)' }}>{user?.name}</span>
            </div>
            <button onClick={handleLogout} style={{ ...styles.btn, background: 'transparent', color: 'var(--color-text-muted)', border: '1px solid var(--color-border)' }}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" style={styles.link}>Log in</Link>
            <Link to="/register"><button style={styles.btn}>Get Started</button></Link>
          </>
        )}
      </div>
    </nav>
  );
}
