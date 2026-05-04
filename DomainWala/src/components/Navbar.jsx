import React, { useEffect, useState } from 'react';
import { Globe, Wallet } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Globe className="nav-logo-icon" size={32} />
          <span>Domain<span className="gradient-text">Wala</span></span>
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/marketplace">Domains</Link>
        <Link to="/auctions">Auctions</Link>
        <Link to="/hosting">Hosting</Link>
        <Link to="/sell">Sell Domain</Link>
        <Link to="/about">About Us</Link>
      </div>
      <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {user ? (
          <>
            <Link to="/add-funds" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', fontWeight: '700' }}>
              <Wallet size={18} color="var(--accent-primary)" /> ₹{user.balance.toLocaleString()}
            </Link>
            <button className="btn-buy" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="btn-primary">Sign In</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
