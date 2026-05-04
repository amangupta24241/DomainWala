import React from 'react';
import { Check, Zap, Server, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hosting = () => {
  const plans = [
    {
      name: 'Starter Cloud',
      price: '₹149',
      period: '/mo',
      features: ['20 GB SSD Storage', '3 Websites', 'Free Domain Name', 'Free SSL Installation', 'Unmetered Bandwidth']
    },
    {
      name: 'Pro Cloud',
      price: '₹299',
      period: '/mo',
      isPopular: true,
      features: ['Unmetered SSD', 'Unlimited Websites', 'AutoBackup', 'Free Domain Name', 'Free SSL Installation']
    },
    {
      name: 'Business Cloud',
      price: '₹499',
      period: '/mo',
      features: ['50 GB Pure SSD', 'Unlimited Websites', 'Cloud Storage', 'Free Domain Name', 'Free SSL Installation']
    }
  ];

  return (
    <>
      <header className="hero-section" style={{ padding: '6rem 5% 4rem' }}>
        <h1 className="hero-title animate-fade-in" style={{ fontSize: '3.5rem' }}>
          Fast, secure & reliable <span className="gradient-text">Web Hosting</span>
        </h1>
        <p className="hero-subtitle animate-fade-in delay-100" style={{ maxWidth: '700px' }}>
          Get your website online today with our powerful cloud hosting solutions. Includes a free domain name and SSL.
        </p>
      </header>

      <section style={{ padding: '5rem 5%', background: 'var(--bg-secondary)', textAlign: 'center' }}>
        <h2 className="section-title" style={{ marginBottom: '3rem' }}>Choose your hosting plan</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
          {plans.map((plan, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '3rem 2rem', position: 'relative', border: plan.isPopular ? '2px solid var(--accent-primary)' : '1px solid var(--card-border)' }}>
              {plan.isPopular && (
                <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: 'var(--accent-primary)', color: 'white', padding: '0.4rem 1.5rem', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.9rem' }}>
                  MOST POPULAR
                </div>
              )}
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{plan.name}</h3>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', gap: '0.2rem', marginBottom: '2rem' }}>
                <span style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--text-primary)' }}>{plan.price}</span>
                <span className="text-secondary">{plan.period}</span>
              </div>
              
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem', textAlign: 'left' }}>
                {plan.features.map((feature, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-secondary)' }}>
                    <Check size={18} color="#10b981" /> {feature}
                  </li>
                ))}
              </ul>
              
              <button className="btn-large" style={{ width: '100%', background: plan.isPopular ? 'var(--accent-primary)' : 'var(--bg-secondary)', color: plan.isPopular ? 'white' : 'var(--text-primary)', border: plan.isPopular ? 'none' : '1px solid var(--card-border)' }}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '6rem 5%', background: 'white' }}>
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="section-title">Everything you need to succeed</h2>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center' }}>
            <Server size={48} color="var(--accent-primary)" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>99.9% Uptime</h3>
            <p className="text-secondary">We guarantee that your website will remain online and accessible 99.9% of the time.</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Zap size={48} color="#2a68b4" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Lightning Fast</h3>
            <p className="text-secondary">Powered by cutting-edge cloud technology and NVMe SSDs for ultimate speed.</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <ShieldCheck size={48} color="#10b981" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Free SSL Security</h3>
            <p className="text-secondary">Keep your visitors safe and boost your SEO rankings with a free Let's Encrypt SSL.</p>
          </div>
        </div>
      </section>

      <section className="cta-section" style={{ background: 'var(--hero-bg)' }}>
        <div className="cta-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="cta-title">Ready to launch your website?</h2>
          <p className="cta-desc" style={{ marginBottom: '2rem', fontSize: '1.2rem', color: '#a0aec0' }}>
            Join thousands of satisfied customers and experience premium hosting today.
          </p>
          <button className="btn-large">
            View Hosting Plans
          </button>
        </div>
      </section>
    </>
  );
};

export default Hosting;
