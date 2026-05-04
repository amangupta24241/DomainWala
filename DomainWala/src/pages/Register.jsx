import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setStatus('Registering...');

    try {
      const response = await fetch('http://localhost:5000/api/register', {
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
        setStatus(data.message || 'Registration failed.');
      }
    } catch (error) {
      // Fallback for demo without backend DB running
      const users = JSON.parse(localStorage.getItem('dummyUsers') || '[]');
      if (users.find(u => u.username === username)) {
         setStatus('Username already exists (Demo Mode).');
         return;
      }
      
      const newUser = { _id: Date.now().toString(), username, password, balance: 0 };
      users.push(newUser);
      localStorage.setItem('dummyUsers', JSON.stringify(users));
      
      localStorage.setItem('user', JSON.stringify({ _id: newUser._id, username: newUser.username, balance: newUser.balance }));
      window.location.href = '/marketplace';
    }
  };

  return (
    <div style={{ paddingTop: '5rem', paddingBottom: '4rem', paddingLeft: '5%', paddingRight: '5%', maxWidth: '500px', margin: '0 auto' }}>
      <div className="section-header" style={{ textAlign: 'center' }}>
        <h1 className="hero-title" style={{ fontSize: '2.5rem', color: 'var(--text-primary)' }}>
          Create an Account
        </h1>
      </div>

      <form className="glass-panel" onSubmit={handleRegister} style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ fontWeight: '600' }}>Username</label>
          <input 
            type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Choose a username" 
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
            placeholder="Create a password" 
            style={{ 
              padding: '1rem', 
              borderRadius: '4px', 
              fontFamily: 'inherit',
              fontSize: '1rem'
            }} 
          />
        </div>

        {status && <div style={{ color: '#ef4444', fontWeight: '500' }}>{status}</div>}

        <button type="submit" className="btn-large" style={{ marginTop: '0.5rem', width: '100%' }}>
          Sign Up
        </button>
        
        <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.95rem' }}>
          <span className="text-secondary">Already have an account? </span>
          <Link to="/login" style={{ color: 'var(--accent-primary)', fontWeight: '700' }}>Sign In</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
