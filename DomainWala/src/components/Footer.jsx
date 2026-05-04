import React from 'react';
import { Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ background: '#191b1d', color: '#a0aec0', fontFamily: 'var(--font-body)', fontSize: '0.9rem', padding: '4rem 5% 2rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '3rem' }}>
        
        {/* Left Sidebar */}
        <div style={{ flex: '1 1 300px', maxWidth: '400px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: 'white' }}>
            <Globe color="#f15b22" size={32} />
            <span style={{ fontSize: '1.5rem', fontWeight: '700', fontFamily: 'var(--font-heading)' }}>domainwala</span>
          </div>
          
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: '#c3c9d5' }}>
            We make registering, hosting, and managing domains for yourself or others easy and affordable, because the internet needs people.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
            <Link to="/about" style={{ color: 'white', fontWeight: '600', display: 'inline-flex', alignItems: 'center' }}>
              About DomainWala &rarr;
            </Link>
            <Link to="/blog" style={{ color: 'white', fontWeight: '600', display: 'inline-flex', alignItems: 'center' }}>
              Read our blog &rarr;
            </Link>
          </div>

          <div style={{ borderTop: '1px solid #33363a', paddingTop: '2rem', marginBottom: '2rem' }}>
            <h4 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1rem' }}>Join Our Newsletter & Marketing Communication</h4>
            <p style={{ marginBottom: '1rem', color: '#c3c9d5' }}>We'll send you news and offers.</p>
            <form style={{ display: 'flex', height: '45px' }}>
              <input 
                type="email" 
                placeholder="you@yours.com" 
                style={{ flex: 1, padding: '0 1rem', background: '#33363a', border: 'none', color: 'white', borderRadius: '4px 0 0 4px', outline: 'none' }}
              />
              <button 
                type="submit" 
                style={{ background: '#f15b22', color: 'white', border: 'none', padding: '0 1.5rem', fontWeight: 'bold', borderRadius: '0 4px 4px 0', cursor: 'pointer' }}
              >
                Join
              </button>
            </form>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem' }}>
             {/* X Icon SVG */}
             <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
             {/* Facebook */}
             <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
             {/* Instagram */}
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
             {/* Pinterest */}
             <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.25 2.65 7.9 6.44 9.31-.08-.79-.15-2.01.03-2.88.16-.8.1-.8.1-.8 1.08-2.07 1.08-2.07.1-.83.1-2.1.86-2.9 1.93-2.9.89 0 1.32.67 1.32 1.48 0 .9-.57 2.24-.87 3.48-.25 1.04.52 1.89 1.54 1.89 1.85 0 3.28-1.95 3.28-4.76 0-2.49-1.79-4.23-4.35-4.23-2.96 0-4.69 2.22-4.69 4.51 0 .89.34 1.85.77 2.37.08.1.09.18.06.31-.09.36-.28 1.15-.32 1.3-.05.19-.16.23-.36.14-1.32-.62-2.15-2.56-2.15-4.13 0-3.36 2.44-6.44 7.03-6.44 3.69 0 6.55 2.63 6.55 6.13 0 3.67-2.31 6.62-5.52 6.62-1.08 0-2.09-.56-2.44-1.22l-.66 2.53c-.24.94-.89 2.12-1.33 2.84A10.02 10.02 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg>
          </div>
        </div>

        {/* Right Links Section */}
        <div style={{ flex: '2 1 600px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
          
          {/* Column 1 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <h4 style={{ color: 'white', marginBottom: '1rem', fontSize: '1rem' }}>Domains</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none', padding: 0 }}>
                <li><Link to="/marketplace" className="footer-link">Domain Name Search</Link></li>
                <li><Link to="/sell" className="footer-link">Domain Transfer</Link></li>
                <li><Link to="/marketplace" className="footer-link">New TLDs</Link></li>
                <li><Link to="/marketplace" className="footer-link">Handshake domains <span className="badge badge-orange">NEW</span></Link></li>
                <li><Link to="/marketplace" className="footer-link">Personal Domain</Link></li>
                <li><Link to="/marketplace" className="footer-link">DomainWala Market</Link></li>
                <li><Link to="/marketplace" className="footer-link">Whois Lookup</Link></li>
                <li><Link to="/marketplace" className="footer-link">PremiumDNS</Link></li>
                <li><Link to="/marketplace" className="footer-link">FreeDNS</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'white', marginBottom: '1rem', fontSize: '1rem' }}>Hosting</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none', padding: 0 }}>
                <li><Link to="/hosting" className="footer-link">Shared Hosting</Link></li>
                <li><Link to="/hosting" className="footer-link">Hosting for WordPress</Link></li>
                <li><Link to="/hosting" className="footer-link">Reseller Hosting</Link></li>
                <li><Link to="/hosting" className="footer-link">VPS Hosting</Link></li>
                <li><Link to="/hosting" className="footer-link">Dedicated Servers</Link></li>
                <li><Link to="/hosting" className="footer-link">Private Email Hosting</Link></li>
                <li><Link to="/hosting" className="footer-link">Migrate to DomainWala</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'white', marginBottom: '1rem', fontSize: '1rem' }}>WordPress</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none', padding: 0 }}>
                <li><Link to="/hosting" className="footer-link">Shared Hosting</Link></li>
                <li><Link to="/hosting" className="footer-link">Hosting for WordPress</Link></li>
                <li><Link to="/hosting" className="footer-link">Migrate WordPress</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 2 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <h4 style={{ color: 'white', marginBottom: '1rem', fontSize: '1rem' }}>Security</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none', padding: 0 }}>
                <li><Link to="/marketplace" className="footer-link">Domain Privacy</Link></li>
                <li><Link to="/marketplace" className="footer-link">Website Security <span className="badge badge-orange">NEW</span></Link></li>
                <li><Link to="/marketplace" className="footer-link">Fix Hacked Website <span className="badge badge-red">SOS</span></Link></li>
                <li><Link to="/marketplace" className="footer-link">Domain Vault <span className="badge badge-orange">NEW</span></Link></li>
                <li><Link to="/marketplace" className="footer-link">PremiumDNS</Link></li>
                <li><Link to="/marketplace" className="footer-link">CDN</Link></li>
                <li><Link to="/marketplace" className="footer-link">FastVPN <span className="badge badge-orange">UPDATED</span></Link></li>
                <li><Link to="/marketplace" className="footer-link">Cyber Insurance <span className="badge badge-orange">NEW</span></Link></li>
                <li><Link to="/marketplace" className="footer-link">2FA</Link></li>
                <li><Link to="/marketplace" className="footer-link">Public DNS</Link></li>
                <li><Link to="/marketplace" className="footer-link">Anti-Spam Protection</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'white', marginBottom: '1rem', fontSize: '1rem' }}>Transfer to Us <span className="badge badge-blue">TRY ME</span></h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none', padding: 0 }}>
                <li><Link to="/sell" className="footer-link">Domain Transfer</Link></li>
                <li><Link to="/marketplace" className="footer-link">Migrate Hosting</Link></li>
                <li><Link to="/marketplace" className="footer-link">Migrate WordPress</Link></li>
                <li><Link to="/marketplace" className="footer-link">Migrate Email</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'white', marginBottom: '1rem', fontSize: '1rem' }}>SSL Certificates</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none', padding: 0 }}>
                <li><Link to="/marketplace" className="footer-link">Comodo</Link></li>
                <li><Link to="/marketplace" className="footer-link">Organization Validation</Link></li>
                <li><Link to="/marketplace" className="footer-link">Domain Validation</Link></li>
                <li><Link to="/marketplace" className="footer-link">Extended Validation</Link></li>
                <li><Link to="/marketplace" className="footer-link">Single Domain</Link></li>
                <li><Link to="/marketplace" className="footer-link">Wildcard</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 3 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <h4 style={{ color: 'white', marginBottom: '1rem', fontSize: '1rem' }}>Guru Guides</h4>
            </div>
            <div>
              <h4 style={{ color: 'white', marginBottom: '1rem', fontSize: '1rem' }}>Help Center</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none', padding: 0 }}>
                <li><Link to="/about" className="footer-link">Status Updates</Link></li>
                <li><Link to="/about" className="footer-link">Knowledgebase</Link></li>
                <li><Link to="/about" className="footer-link">How-To Videos</Link></li>
                <li><Link to="/about" className="footer-link">Submit Ticket</Link></li>
                <li><Link to="/about" className="footer-link">Live Chat</Link></li>
                <li><Link to="/about" className="footer-link">Report Abuse</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'white', marginBottom: '1rem', fontSize: '1rem' }}>Marketing Tools</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none', padding: 0 }}>
                <li><Link to="/marketplace" className="footer-link">Marketplace</Link></li>
                <li><Link to="/marketplace" className="footer-link">How to Get Started <span className="badge badge-orange">NEW</span></Link></li>
                <li><Link to="/marketplace" className="footer-link">Business Starter Kit <span className="badge badge-blue">FREE</span></Link></li>
                <li><Link to="/marketplace" className="footer-link">Business Formation <span className="badge badge-blue">FREE</span></Link></li>
                <li><Link to="/marketplace" className="footer-link">Relate Marketing Suite <span className="badge badge-blue">SAVE</span></Link></li>
                <li><Link to="/marketplace" className="footer-link">RelateSEO <span className="badge badge-purple">AI</span></Link></li>
                <li><Link to="/marketplace" className="footer-link">RelateSocial <span className="badge badge-orange">NEW</span> <span className="badge badge-purple">AI</span></Link></li>
                <li><Link to="/marketplace" className="footer-link">RelateReviews <span className="badge badge-orange">NEW</span> <span className="badge badge-purple">AI</span></Link></li>
                <li><Link to="/marketplace" className="footer-link">RelateAds <span className="badge badge-purple">AI</span></Link></li>
                <li><Link to="/marketplace" className="footer-link">RelateLocal <span className="badge badge-purple">AI</span></Link></li>
                <li><Link to="/marketplace" className="footer-link">Brand Monitoring <span className="badge badge-purple">AI</span></Link></li>
                <li><Link to="/marketplace" className="footer-link">Visual</Link></li>
                <li><Link to="/marketplace" className="footer-link">Site Maker <span className="badge badge-orange">NEW</span></Link></li>
                <li><Link to="/marketplace" className="footer-link">Font Maker <span className="badge badge-orange">NEW</span></Link></li>
                <li><Link to="/marketplace" className="footer-link">Logo Maker <span className="badge badge-purple">AI</span></Link></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
      
      {/* Footer Bottom / Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .footer-link {
          color: #a0aec0 !important;
          text-decoration: none;
        }
        .footer-link:hover {
          color: white !important;
          text-decoration: underline;
        }
        .badge {
          font-size: 0.6rem;
          padding: 2px 4px;
          border-radius: 2px;
          margin-left: 6px;
          font-weight: bold;
          vertical-align: middle;
          color: white;
        }
        .badge-orange { background: #f15b22; }
        .badge-red { background: #e53e3e; }
        .badge-blue { background: #3182ce; }
        .badge-purple { background: #805ad5; }
      `}} />
    </footer>
  );
};

export default Footer;
