import React, { useState, useEffect } from 'react';
import { Filter, SortDesc, Search as SearchIcon } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Marketplace = () => {
  const [domains, setDomains] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [errorDetails, setErrorDetails] = useState('');
  
  const navigate = useNavigate();
  const location = useLocation();
  
  // Extract search query from URL if coming from Home page
  const queryParams = new URLSearchParams(location.search);
  const initialSearch = queryParams.get('search') || '';
  const [searchTerm, setSearchTerm] = useState(initialSearch);

  useEffect(() => {
    const initialFallbackDomains = [
      { _id: '1', name: 'premiumdomains.in', price: 499000, tags: ['Business', 'Premium'] },
      { _id: '2', name: 'web3future.in', price: 249000, tags: ['Crypto', 'Tech'] },
      { _id: '3', name: 'nextgenai.in', price: 850000, tags: ['AI', 'Startup'] },
      { _id: '4', name: 'luxurystays.co.in', price: 120000, tags: ['Travel', 'Short'] },
      { _id: '5', name: 'domainwala.in', price: 99000, tags: ['Local', 'Brandable'] },
      { _id: '6', name: 'cloudscale.in', price: 310000, tags: ['Cloud', 'SaaS'] },
      { _id: '7', name: 'healthhub.org.in', price: 550000, tags: ['Health', 'Org'] },
      { _id: '8', name: 'gameverse.in', price: 180000, tags: ['Gaming', 'Metaverse'] },
      { _id: '9', name: 'fintechpro.in', price: 420000, tags: ['Finance', 'Pro'] }
    ];

    const getSafeDemoDomains = () => {
      try {
        const stored = localStorage.getItem('demoDomains');
        if (stored && stored !== 'undefined' && stored !== 'null') {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed) && parsed.length > 0) {
            return parsed;
          }
        }
      } catch (e) {
        console.error('Error parsing demo domains', e);
      }
      localStorage.setItem('demoDomains', JSON.stringify(initialFallbackDomains));
      return initialFallbackDomains;
    };

    const fetchDomains = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/domains');
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data) && data.length > 0) {
            setDomains(data);
          } else {
            setDomains(getSafeDemoDomains());
          }
        } else {
          setDomains(getSafeDemoDomains());
        }
      } catch (error) {
        console.error('Fetch error:', error);
        setErrorDetails(error.message);
        setDomains(getSafeDemoDomains());
      } finally {
        setLoading(false);
      }
    };
    
    fetchDomains();
  }, []);

  // Sync URL search to local state if it changes
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const search = queryParams.get('search');
    if (search !== null) {
      setSearchTerm(search);
    }
  }, [location.search]);

  const handleBuy = async (domain) => {
    const loggedInUser = localStorage.getItem('user');
    if (!loggedInUser) {
      navigate('/login');
      return;
    }

    let user;
    try {
      user = JSON.parse(loggedInUser);
    } catch (e) {
      navigate('/login');
      return;
    }

    if (!user.balance || user.balance < domain.price) {
      setMessage(`Insufficient funds to buy ${domain.name}. Please add funds.`);
      setTimeout(() => navigate('/add-funds'), 2000);
      return;
    }

    try {
      // If it's a generated domain, it won't have a normal MongoDB ID.
      // So we fallback straight to demo-buy if it fails.
      const response = await fetch(`http://localhost:5000/api/domains/${domain._id}/purchase`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user._id })
      });

      if (response.ok) {
        const result = await response.json();
        localStorage.setItem('user', JSON.stringify(result.user));
        setDomains(domains.filter(d => d._id !== domain._id));
        setMessage(`Successfully purchased ${domain.name}!`);
        setTimeout(() => window.location.reload(), 1500); 
      } else {
        throw new Error('Backend failed');
      }
    } catch (error) {
      const updatedUser = { ...user, balance: user.balance - domain.price };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      
      const newDomainList = domains.filter(d => d._id !== domain._id);
      localStorage.setItem('demoDomains', JSON.stringify(newDomainList));
      setDomains(newDomainList);
      
      setMessage(`Successfully purchased ${domain.name}!`);
      setTimeout(() => window.location.reload(), 1500); 
    }
  };

  const handleSearchUpdate = (e) => {
    setSearchTerm(e.target.value);
    // Remove query param to clean URL if typing
    navigate('/marketplace', { replace: true });
  };

  // Generate dynamic results based on user's exact search
  let displayDomains = [...domains];
  
  if (searchTerm.trim() !== '') {
    const searchClean = searchTerm.toLowerCase().trim().replace(/[^a-z0-9]/g, '');
    
    // First, filter the existing premium database
    let dbMatches = domains.filter(domain => 
      domain.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (domain.tags && domain.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
    );

    // Generate specific exact-match domains if they type a word
    if (searchClean.length > 2) {
      const generatedExtensions = [
        { ext: '.com', price: 599, tags: ['Standard'] },
        { ext: '.in', price: 499, tags: ['Local'] },
        { ext: '.net', price: 799, tags: ['Network'] },
        { ext: '.org', price: 899, tags: ['Organization'] },
        { ext: '.ai', price: 5999, tags: ['Tech', 'Premium'] },
        { ext: '.io', price: 3499, tags: ['Startup'] }
      ];

      const generatedDomains = generatedExtensions.map(extObj => {
        const name = `${searchClean}${extObj.ext}`;
        // Only generate if it doesn't already exist in DB
        const exists = domains.some(d => d.name.toLowerCase() === name);
        if (exists) return null;
        
        return {
          _id: `generated-${name}-${Date.now()}`,
          name: name,
          price: extObj.price,
          tags: ['Available', ...extObj.tags],
          isGenerated: true
        };
      }).filter(Boolean);

      // Combine matches and generated domains
      displayDomains = [...generatedDomains, ...dbMatches];
    } else {
      displayDomains = dbMatches;
    }
  }

  return (
    <div style={{ background: 'var(--bg-secondary)', minHeight: '80vh', paddingBottom: '4rem' }}>
      {/* Premium Marketplace Banner */}
      <div style={{ 
        background: 'linear-gradient(135deg, var(--hero-bg) 0%, #1a202c 100%)', 
        padding: '6rem 5% 4rem', 
        textAlign: 'center',
        borderBottom: '4px solid var(--accent-primary)',
        marginBottom: '3rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: '-50%', left: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(241,91,34,0.15) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', bottom: '-50%', right: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(42,104,180,0.15) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%' }}></div>

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
          <span style={{ background: 'rgba(255,255,255,0.1)', color: 'white', padding: '0.4rem 1.2rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold', letterSpacing: '1px', marginBottom: '1.5rem', display: 'inline-block' }}>DOMAIN SEARCH</span>
          <h1 className="hero-title animate-slide-up" style={{ fontSize: '3.5rem', color: 'white', marginBottom: '1rem' }}>
            Find Your <span style={{ color: 'var(--accent-primary)' }}>Perfect Name</span>
          </h1>
          <p className="animate-slide-up delay-100" style={{ color: '#a0aec0', fontSize: '1.2rem', marginBottom: '2.5rem' }}>
            Search for available domains or browse our premium aftermarket collection.
          </p>

          <div className="animate-slide-up delay-200" style={{ display: 'flex', background: 'white', borderRadius: '8px', padding: '0.4rem', boxShadow: '0 10px 30px rgba(0,0,0,0.3)', maxWidth: '600px', margin: '0 auto' }}>
            <input 
              type="text" 
              placeholder="Search for a domain (e.g. mybusiness)..." 
              value={searchTerm}
              onChange={handleSearchUpdate}
              style={{ flex: 1, padding: '1rem 1.5rem', border: 'none', background: 'transparent', fontSize: '1.1rem', outline: 'none', color: 'var(--text-primary)' }}
            />
            <button style={{ background: 'var(--accent-primary)', color: 'white', border: 'none', padding: '0 2rem', borderRadius: '4px', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer', transition: 'background 0.2s' }} onMouseOver={e => e.currentTarget.style.background = 'var(--accent-secondary)'} onMouseOut={e => e.currentTarget.style.background = 'var(--accent-primary)'}>
              Search
            </button>
          </div>
        </div>
      </div>

      <div style={{ paddingLeft: '5%', paddingRight: '5%', maxWidth: '1400px', margin: '0 auto' }}>
        {message && (
          <div className="animate-fade-in" style={{ color: message.includes('Insufficient') ? '#ef4444' : '#10b981', marginBottom: '2rem', fontWeight: 'bold', padding: '1rem', background: 'white', borderRadius: '8px', border: '1px solid var(--card-border)', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', textAlign: 'center' }}>
            {message}
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ color: 'var(--text-secondary)', fontWeight: '600', display: 'flex', alignItems: 'center' }}>
            {searchTerm ? `Search results for "${searchTerm}"` : `Showing ${displayDomains.length} premium domains`}
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn-buy" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'white', padding: '0.5rem 1rem' }}>
              <Filter size={18} /> Filters
            </button>
            <button className="btn-buy" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'white', padding: '0.5rem 1rem' }}>
              <SortDesc size={18} /> Sort: Featured
            </button>
          </div>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', color: 'var(--text-primary)', padding: '5rem 0' }}>
             <h2 className="animate-pulse">Loading domain database...</h2>
          </div>
        ) : !Array.isArray(domains) || domains.length === 0 ? (
          <div style={{ textAlign: 'center', color: 'var(--text-secondary)', padding: '5rem 0' }}>
            <h2>No domains available right now. Check back later!</h2>
            {errorDetails && <p>Debug: {errorDetails}</p>}
          </div>
        ) : displayDomains.length === 0 ? (
          <div style={{ textAlign: 'center', color: 'var(--text-secondary)', padding: '5rem 0' }}>
            <SearchIcon size={48} color="#cbd5e1" style={{ marginBottom: '1rem' }} />
            <h2>No domains found for "{searchTerm}".</h2>
            <p>Try searching for a simpler keyword or checking different tags.</p>
          </div>
        ) : (
          <div className="domains-grid">
            {displayDomains.map((domain) => (
              <div key={domain._id || Math.random()} className="domain-card glass-panel animate-fade-in" style={{ display: 'flex', flexDirection: 'column', height: '100%', border: domain.isGenerated ? '1px solid var(--accent-primary)' : '1px solid var(--card-border)' }}>
                {domain.isGenerated && (
                  <div style={{ position: 'absolute', top: '-12px', right: '20px', background: 'var(--accent-primary)', color: 'white', padding: '2px 10px', borderRadius: '12px', fontSize: '0.7rem', fontWeight: 'bold' }}>EXACT MATCH</div>
                )}
                
                <h3 className="domain-name" style={{ fontSize: '1.6rem', color: 'var(--text-primary)' }}>{domain.name}</h3>
                
                <div className="domain-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', margin: '1rem 0' }}>
                  {Array.isArray(domain.tags) && domain.tags.map((tag, i) => (
                    <span key={i} style={{ background: tag === 'Available' ? '#dcfce7' : 'rgba(241,91,34,0.1)', color: tag === 'Available' ? '#166534' : 'var(--accent-primary)', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="domain-footer" style={{ marginTop: 'auto', borderTop: '1px solid var(--card-border)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span className="domain-price" style={{ fontSize: '1.8rem', fontWeight: '800' }}>₹{Number(domain.price || 0).toLocaleString()}</span>
                    {domain.isGenerated && <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>/year</span>}
                  </div>
                  <button className="btn-buy" onClick={() => handleBuy(domain)} style={{ background: domain.isGenerated ? 'var(--accent-primary)' : 'var(--text-primary)', color: 'white', border: 'none', padding: '0.6rem 1.5rem' }}>
                    {domain.isGenerated ? 'Register' : 'Buy Now'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Marketplace;
