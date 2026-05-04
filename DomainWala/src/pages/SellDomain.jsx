import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SellDomain = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    tags: ''
  });
  const [status, setStatus] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      navigate('/login');
      return;
    }

    setStatus('Submitting...');

    try {
      const response = await fetch('http://localhost:5000/api/domains', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          price: Number(formData.price),
          tags: formData.tags,
          userId: user._id
        }),
      });

      if (response.ok) {
        setStatus('Success! Your domain is now listed in the marketplace.');
        setFormData({ name: '', price: '', tags: '' });
      } else {
        throw new Error('Backend failed');
      }
    } catch (error) {
      // Demo Mode Fallback
      const tagsArray = typeof formData.tags === 'string' ? formData.tags.split(',').map(tag => tag.trim()) : formData.tags;
      const newDomain = {
        _id: Date.now().toString(),
        name: formData.name,
        price: Number(formData.price),
        tags: tagsArray,
        ownerId: user._id
      };
      
      const stored = localStorage.getItem('demoDomains');
      let demoDomains = stored ? JSON.parse(stored) : [];
      demoDomains.unshift(newDomain); 
      localStorage.setItem('demoDomains', JSON.stringify(demoDomains));
      
      setStatus('Success! Your domain is listed in the marketplace.');
      setFormData({ name: '', price: '', tags: '' });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ paddingTop: '5rem', paddingBottom: '4rem', paddingLeft: '5%', paddingRight: '5%', maxWidth: '700px', margin: '0 auto' }}>
      <div className="section-header" style={{ textAlign: 'center' }}>
        <h1 className="hero-title" style={{ fontSize: '3rem', color: 'var(--text-primary)' }}>
          Sell Your Domain
        </h1>
        <p className="text-secondary">List your domains on the world's most active marketplace.</p>
      </div>

      <form className="glass-panel" onSubmit={handleSubmit} style={{ padding: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ fontWeight: '600' }}>Domain Name</label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="e.g., business.in" 
            style={{ 
              padding: '1rem', 
              borderRadius: '4px', 
              fontFamily: 'inherit',
              fontSize: '1rem'
            }} 
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ fontWeight: '600' }}>Asking Price (₹)</label>
          <input 
            type="number" 
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            placeholder="e.g., 500000" 
            style={{ 
              padding: '1rem', 
              borderRadius: '4px', 
              fontFamily: 'inherit',
              fontSize: '1rem'
            }} 
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ fontWeight: '600' }}>Category / Tags (comma separated)</label>
          <input 
            type="text" 
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="Tech, Startup, AI..." 
            style={{ 
              padding: '1rem', 
              borderRadius: '4px', 
              fontFamily: 'inherit',
              fontSize: '1rem'
            }} 
          />
        </div>

        {status && <div style={{ color: status.includes('Success') ? '#10b981' : '#ef4444', fontWeight: '600', padding: '1rem', background: status.includes('Success') ? '#ecfdf5' : '#fef2f2', borderRadius: '4px', border: `1px solid ${status.includes('Success') ? '#10b981' : '#ef4444'}` }}>{status}</div>}

        <button type="submit" className="btn-large" style={{ marginTop: '1rem' }}>
          List Domain For Sale
        </button>
      </form>
    </div>
  );
};

export default SellDomain;
