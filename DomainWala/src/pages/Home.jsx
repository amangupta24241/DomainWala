import React, { useState } from 'react';
import { Search, ChevronRight, ShieldCheck, Zap, Globe, TrendingUp, Users, Star } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  return (
    <>
      {/* 1. Hero Section (Namecheap Style) */}
      <header className="hero-section">
        <h1 className="hero-title animate-fade-in">
          Buy a domain name and create <br /> everything else you need
        </h1>
        <p className="hero-subtitle animate-fade-in delay-100">
          Register your domain name today, starting at just ₹499/year. 
        </p>
        
        <div className="search-container animate-fade-in delay-200" style={{ display: 'flex', background: 'white', borderRadius: '4px', padding: '0' }}>
          <input 
            type="text" 
            className="search-input" 
            placeholder="Find your perfect domain name" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ padding: '1.2rem', flex: 1, border: 'none', background: 'transparent' }}
          />
          <button 
            className="btn-search" 
            onClick={() => navigate(`/marketplace?search=${searchQuery}`)}
            style={{ borderRadius: '0 4px 4px 0', margin: 0, padding: '0 2rem' }}
          >
            <Search size={24} />
          </button>
        </div>

        {/* Domain Extension Prices */}
        <div className="animate-fade-in delay-300" style={{ display: 'flex', gap: '2rem', marginTop: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '20px' }}>
             <span style={{ fontWeight: 'bold' }}>.com</span> ₹599
          </div>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '20px' }}>
             <span style={{ fontWeight: 'bold' }}>.in</span> ₹499
          </div>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '20px' }}>
             <span style={{ fontWeight: 'bold' }}>.net</span> ₹799
          </div>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '20px' }}>
             <span style={{ fontWeight: 'bold', color: 'var(--accent-secondary)' }}>.ai</span> ₹5999
          </div>
        </div>
      </header>

      {/* 2. Top Products / Featured Services */}
      <section style={{ padding: '5rem 5%', background: 'var(--bg-secondary)' }}>
        <div className="section-header animate-slide-up">
          <h2 className="section-title">Bring your ideas to life</h2>
        </div>
        
        <div className="domains-grid animate-slide-up delay-200">
          <div className="domain-card glass-panel" style={{ textAlign: 'center' }}>
            <Globe size={48} color="var(--accent-primary)" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Domains</h3>
            <p className="text-secondary" style={{ marginBottom: '1.5rem' }}>Make a lasting impression with the perfect domain. Over 400 extensions available.</p>
            <button className="btn-buy" onClick={() => navigate('/marketplace')}>Find a Domain</button>
          </div>

          <div className="domain-card glass-panel" style={{ textAlign: 'center' }}>
            <Zap size={48} color="#2a68b4" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Hosting</h3>
            <p className="text-secondary" style={{ marginBottom: '1.5rem' }}>Fast, reliable hosting for websites of all sizes. 100% uptime guarantee.</p>
            <button className="btn-buy" onClick={() => navigate('/hosting')}>View Plans</button>
          </div>

          <div className="domain-card glass-panel" style={{ textAlign: 'center' }}>
            <ShieldCheck size={48} color="#10b981" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Security</h3>
            <p className="text-secondary" style={{ marginBottom: '1.5rem' }}>Keep your site safe with our advanced SSL certificates and privacy protection.</p>
            <button className="btn-buy">Protect Site</button>
          </div>
        </div>
      </section>

      {/* 3. Why DomainWala */}
      <section style={{ padding: '6rem 5%', background: 'white' }}>
        <div className="section-header animate-slide-right">
          <h2 className="section-title">Why choose DomainWala?</h2>
          <p className="text-secondary">We give you everything you need to get your business online.</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', maxWidth: '1200px', margin: '0 auto' }} className="animate-slide-up delay-300">
          <div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--accent-primary)' }}>Free Privacy Protection</h3>
            <p className="text-secondary">Every domain comes with free lifetime WhoisGuard privacy protection. Keep your personal data safe from spammers.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--accent-primary)' }}>24/7 Support</h3>
            <p className="text-secondary">Our stellar support team is available 24/7/365 to help you via live chat and ticketing. You're never alone.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--accent-primary)' }}>Lowest Price Guarantee</h3>
            <p className="text-secondary">We don't believe in bait-and-switch. Our renewal rates are among the lowest in the industry.</p>
          </div>
        </div>
      </section>

      {/* 4. Trust / Testimonials */}
      <section style={{ padding: '6rem 5%', background: 'white', position: 'relative', overflow: 'hidden' }}>
        {/* Abstract Background Elements */}
        <div style={{ position: 'absolute', top: '-20%', right: '-5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(241,91,34,0.05) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', bottom: '-20%', left: '-5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(42,104,180,0.05) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%' }}></div>

        <div className="glass-panel animate-slide-up delay-100" style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 2rem', textAlign: 'center', background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', borderRadius: '24px', position: 'relative', zIndex: 1, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
             {[...Array(5)].map((_, i) => <Star key={i} size={32} color="#f59e0b" fill="#f59e0b" />)}
          </div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Trusted by millions worldwide</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Join over 2 million satisfied customers who trust DomainWala to manage, host, and secure their digital presence.
          </p>
          <div style={{ display: 'inline-block', background: 'white', padding: '0.8rem 1.5rem', borderRadius: '50px', fontWeight: 'bold', border: '1px solid var(--card-border)', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
            <span style={{ color: '#10b981', marginRight: '0.5rem' }}>✔</span> 4.8/5 Average Rating on TrustScore
          </div>
        </div>
      </section>

      {/* 5. Transfer CTA */}
      <section style={{ padding: '6rem 5%', background: 'linear-gradient(135deg, var(--hero-bg) 0%, #1a202c 100%)', color: 'white', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* Dynamic Glowing Orb Background */}
        <div className="animate-pulse" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(241,91,34,0.2) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%', pointerEvents: 'none' }}></div>

        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'white' }}>Transfer to us and <span style={{ color: 'var(--accent-primary)' }}>save</span></h2>
          <p style={{ marginBottom: '3rem', fontSize: '1.4rem', color: '#a0aec0', lineHeight: '1.6' }}>
            Stop overpaying for domain renewals. Consolidate your portfolio with DomainWala and save up to 40% instantly.
          </p>
          <Link to="/sell" className="btn-large animate-pulse" style={{ padding: '1.2rem 3rem', fontSize: '1.3rem', borderRadius: '50px', boxShadow: '0 10px 20px rgba(241,91,34,0.3)' }}>
            Transfer Now
          </Link>
          <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#718096' }}>*No downtime during transfer. Free WhoisGuard included.</p>
        </div>
      </section>
    </>
  );
};

export default Home;
