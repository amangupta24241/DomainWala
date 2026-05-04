import React from 'react';
import { UserPlus, Globe2, Gavel, Trophy, Timer } from 'lucide-react';
import { Link } from 'react-router-dom';

const Auctions = () => {
  const liveAuctions = [
    { domain: 'pc-history.org', price: 34000, bids: 86, time: '1 day' },
    { domain: 'truce.ai', price: 380000, bids: 74, time: '5 days' },
    { domain: 'promize.com', price: 112000, bids: 68, time: '15 days' },
    { domain: 'constellation.ai', price: 2100000, bids: 61, time: '2 days' },
    { domain: 'altagents.com', price: 165000, bids: 54, time: '8 days' },
    { domain: 'pb.tv', price: 208000, bids: 53, time: '13 days' }
  ];

  return (
    <div style={{ background: 'var(--bg-secondary)', minHeight: '80vh', paddingBottom: '4rem' }}>
      
      {/* Auctions Hero Banner */}
      <div style={{ 
        background: 'linear-gradient(135deg, var(--hero-bg) 0%, #1a202c 100%)', 
        padding: '6rem 5% 4rem', 
        textAlign: 'center',
        borderBottom: '4px solid var(--accent-primary)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
          <h1 className="hero-title animate-slide-up" style={{ fontSize: '3.5rem', color: 'white', marginBottom: '1rem' }}>
            Domain <span style={{ color: 'var(--accent-primary)' }}>Auctions</span>
          </h1>
          <p className="animate-slide-up delay-100" style={{ color: '#a0aec0', fontSize: '1.2rem', marginBottom: '2.5rem' }}>
            Bid on premium, highly-coveted domains. Win the perfect name for your business.
          </p>
        </div>
      </div>

      {/* How it Works / Start Placing Bids */}
      <section style={{ padding: '6rem 5%', background: 'white', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>Start placing bids today</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '4rem' }}>Find your dream domain and win it with our streamlined auctions.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', maxWidth: '1200px', margin: '0 auto' }}>
          
          <div className="animate-slide-up delay-100" style={{ padding: '2rem' }}>
            <div style={{ background: '#f5f7f9', width: '120px', height: '120px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
              <UserPlus size={56} color="var(--accent-primary)" />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Create an account</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              To get started, create a DomainWala account and subscribe to our Auctions platform.
            </p>
          </div>

          <div className="animate-slide-up delay-200" style={{ padding: '2rem' }}>
            <div style={{ background: '#f5f7f9', width: '120px', height: '120px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
              <Globe2 size={56} color="#2a68b4" />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Explore endless domains</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Use our powerful tools to filter by keywords and industry and explore different extensions.
            </p>
          </div>

          <div className="animate-slide-up delay-300" style={{ padding: '2rem' }}>
            <div style={{ background: '#f5f7f9', width: '120px', height: '120px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
              <Gavel size={56} color="#10b981" />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Place your bid</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Enter your best offer for the domain of your choice and watch the excitement unfold in real time.
            </p>
          </div>

        </div>
      </section>

      {/* Live Auctions Table */}
      <section style={{ padding: '6rem 5%', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>Live auctions</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>Get a taste of the action with these featured domains.</p>
          </div>

          <div className="glass-panel" style={{ overflow: 'hidden', background: 'white' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: '#f1f5f9', color: 'var(--text-secondary)' }}>
                  <th style={{ padding: '1.5rem', fontWeight: '600' }}>Domain</th>
                  <th style={{ padding: '1.5rem', fontWeight: '600' }}>Price (₹)</th>
                  <th style={{ padding: '1.5rem', fontWeight: '600' }}># of Bids</th>
                  <th style={{ padding: '1.5rem', fontWeight: '600' }}>Time left</th>
                  <th style={{ padding: '1.5rem', fontWeight: '600', textAlign: 'right' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {liveAuctions.map((auction, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid var(--card-border)', transition: 'background 0.2s' }} onMouseOver={e => e.currentTarget.style.background = '#f8fafc'} onMouseOut={e => e.currentTarget.style.background = 'white'}>
                    <td style={{ padding: '1.5rem', fontWeight: '600', color: '#2a68b4' }}>{auction.domain}</td>
                    <td style={{ padding: '1.5rem', color: 'var(--text-primary)' }}>₹{auction.price.toLocaleString()}</td>
                    <td style={{ padding: '1.5rem', color: 'var(--text-secondary)' }}>{auction.bids}</td>
                    <td style={{ padding: '1.5rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem', height: '100%', paddingTop: '1.6rem' }}>
                      <Timer size={16} /> {auction.time}
                    </td>
                    <td style={{ padding: '1.5rem', textAlign: 'right' }}>
                      <button style={{ background: 'white', color: 'var(--accent-primary)', border: '1px solid var(--card-border)', padding: '0.5rem 1.5rem', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.2s' }} onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--accent-primary)'; e.currentTarget.style.boxShadow = '0 2px 5px rgba(0,0,0,0.05)'; }} onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--card-border)'; e.currentTarget.style.boxShadow = 'none'; }}>
                        Bid Now
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Celebrate Victory CTA */}
      <section style={{ padding: '6rem 5%', background: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ background: 'radial-gradient(circle, rgba(241,91,34,0.1) 0%, rgba(255,255,255,0) 70%)', width: '200px', height: '200px', borderRadius: '50%', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Trophy size={80} color="var(--accent-primary)" className="animate-pulse" />
          </div>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '1rem', marginTop: '1rem' }}>Celebrate your victory!</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem' }}>
            If you place the winning bid, the domain is yours! Manage it easily in your DomainWala account.
          </p>
          <button className="btn-large" style={{ padding: '1rem 3rem' }}>
            Bid Now
          </button>
        </div>
      </section>

    </div>
  );
};

export default Auctions;
