import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import Input from '../components/ui/Input.jsx';
import Button from '../components/ui/Button.jsx';
import Alert from '../components/ui/Alert.jsx';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!name || !email || !password) { setError('Please fill in all fields'); return; }
    if (password.length < 6) { setError('Password must be at least 6 characters'); return; }
    setLoading(true); setError('');
    try {
      await register(name, email, password);
      navigate('/');
    } catch (e) {
      setError(e.response?.data?.message || 'Registration failed. Try again.');
    } finally { setLoading(false); }
  };

  const s = {
    wrap: { display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', padding: '2rem' },
    box: { background: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '2rem', width: '100%', maxWidth: 420 },
    logo: { textAlign: 'center', marginBottom: '1.5rem' },
    logoText: { fontSize: '1.3rem', fontWeight: 900, color: 'var(--color-primary-light)' },
    h2: { fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.3rem' },
    sub: { color: 'var(--color-text-muted)', fontSize: '0.82rem', marginBottom: '1.5rem' },
    form: { display: 'flex', flexDirection: 'column', gap: '1rem' },
    footer: { textAlign: 'center', marginTop: '1.2rem', fontSize: '0.78rem', color: 'var(--color-text-muted)' },
  };

  return (
    <div style={s.wrap}>
      <div style={s.box}>
        <div style={s.logo}><span style={s.logoText}>devKit</span></div>
        <h2 style={s.h2}>Create your account</h2>
        <p style={s.sub}>Free forever. Start building beautiful UIs today.</p>
        {error && <Alert variant="error" onClose={() => setError('')}>{error}</Alert>}
        <div style={s.form}>
          <Input label="Full Name" placeholder="Ravi Kumar" value={name} onChange={e => setName(e.target.value)} required />
          <Input label="Email" type="email" placeholder="ravi@college.edu" value={email} onChange={e => setEmail(e.target.value)} required />
          <Input label="Password" type="password" placeholder="min. 6 characters" value={password} onChange={e => setPassword(e.target.value)} required />
          <Button fullWidth onClick={handleSubmit} disabled={loading}>
            {loading ? 'Creating account…' : 'Create Account →'}
          </Button>
        </div>
        <div style={s.footer}>
          Already have an account? <Link to="/login" style={{ color: 'var(--color-primary-light)', fontWeight: 600 }}>Sign in</Link>
        </div>
      </div>
    </div>
  );
}
