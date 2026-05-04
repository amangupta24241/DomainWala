import React from 'react';
import { Shield, Zap, Lock } from 'lucide-react';

const About = () => {
  return (
    <div style={{ paddingTop: '5rem', paddingBottom: '4rem', paddingLeft: '5%', paddingRight: '5%', maxWidth: '1000px', margin: '0 auto', background: 'white', minHeight: '80vh' }}>
      <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 className="hero-title" style={{ fontSize: '3rem', color: 'var(--text-primary)' }}>
          About DomainWala
        </h1>
        <p className="text-secondary" style={{ fontSize: '1.2rem', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
          DomainWala is the world's most trusted marketplace for buying and selling premium digital assets. 
          Founded with a vision to democratize digital real estate, we provide a secure, fast, and transparent 
          platform for entrepreneurs and investors alike.
        </p>
      </div>

      <div className="domains-grid" style={{ marginTop: '4rem' }}>
        <div className="domain-card glass-panel" style={{ textAlign: 'center', alignItems: 'center' }}>
          <Shield size={48} color="var(--accent-primary)" style={{ marginBottom: '1rem' }} />
          <h3 className="domain-name">Secure Escrow</h3>
          <p className="text-secondary">Every transaction is protected by our industry-leading escrow service ensuring 100% safety for buyers and sellers.</p>
        </div>

        <div className="domain-card glass-panel" style={{ textAlign: 'center', alignItems: 'center' }}>
          <Zap size={48} color="#2a68b4" style={{ marginBottom: '1rem' }} />
          <h3 className="domain-name">Instant Transfer</h3>
          <p className="text-secondary">With automated domain ownership verification, transfers happen in minutes, not days.</p>
        </div>

        <div className="domain-card glass-panel" style={{ textAlign: 'center', alignItems: 'center' }}>
          <Lock size={48} color="#10b981" style={{ marginBottom: '1rem' }} />
          <h3 className="domain-name">Privacy First</h3>
          <p className="text-secondary">Your data and identity are kept strictly confidential until the transaction is fully complete.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
