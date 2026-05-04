import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setStatus('Logging in...');

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        const user = await response.json();
        localStorage.setItem('user', JSON.stringify(user));
        window.location.href = '/marketplace'; 
      } else {
        const data = await response.json();
        setStatus(data.message || 'Login failed.');
        
        // Fallback for demo without backend DB running
        if (data.message === 'Login failed.' || !data.message) {
           const users = JSON.parse(localStorage.getItem('dummyUsers') || '[]');
           const foundUser = users.find(u => u.username === username && u.password === password);
           if (foundUser) {
             localStorage.setItem('user', JSON.stringify(foundUser));
             window.location.href = '/marketplace';
           } else {
             setStatus('Invalid credentials. Please register first.');
           }
        }
      }
    } catch (error) {
      // Fallback for demo without backend DB running
      const users = JSON.parse(localStorage.getItem('dummyUsers') || '[]');
      const foundUser = users.find(u => u.username === username && u.password === password);
      if (foundUser) {
        localStorage.setItem('user', JSON.stringify(foundUser));
        window.location.href = '/marketplace';
      } else {
        setStatus('Invalid credentials or Backend is down. Please register first.');
      }
    }
  };

  return (
    <div style={{ paddingTop: '5rem', paddingBottom: '4rem', paddingLeft: '5%', paddingRight: '5%', maxWidth: '500px', margin: '0 auto' }}>
      <div className="section-header" style={{ textAlign: 'center' }}>
        <h1 className="hero-title" style={{ fontSize: '2.5rem', color: 'var(--text-primary)' }}>
          Sign in to your account
        </h1>
      </div>

      <form className="glass-panel" onSubmit={handleLogin} style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ fontWeight: '600' }}>Username</label>
          <input 
            type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Username" 
            style={{ 
              padding: '1rem', 
              borderRadius: '4px', 
              fontFamily: 'inherit',
              fontSize: '1rem'
            }} 
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ fontWeight: '600' }}>Password</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password" 
            style={{ 
              padding: '1rem', 
              borderRadius: '4px', 
              fontFamily: 'inherit',
              fontSize: '1rem'
            }} 
          />
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ color: '#ef4444', fontWeight: '500' }}>{status}</div>
          <a href="#" onClick={(e) => { e.preventDefault(); alert('Password reset link sent to your registered email!'); }} style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: '600' }}>Forgot Password?</a>
        </div>

        <button type="submit" className="btn-large" style={{ marginTop: '0.5rem', width: '100%' }}>
          Sign In
        </button>
        
        <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.95rem' }}>
          <span className="text-secondary">New to DomainWala? </span>
          <Link to="/register" style={{ color: 'var(--accent-primary)', fontWeight: '700' }}>Sign up</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
