import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';

const AIAgent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', text: "Hi! I'm the DomainWala AI Assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response based on keywords
    setTimeout(() => {
      let aiResponse = "I'm sorry, I didn't quite catch that. Could you ask about domains, hosting, or how to add funds?";
      const lowerInput = userMessage.toLowerCase();

      if (lowerInput.includes('buy') || lowerInput.includes('purchase')) {
        aiResponse = "To buy a domain, navigate to the 'Domains' page, find your desired name, and click 'Buy Now'. Make sure you are logged in and have enough funds!";
      } else if (lowerInput.includes('sell') || lowerInput.includes('list')) {
        aiResponse = "You can list your domain for sale by clicking 'Sell Domain' in the navigation bar. Set your asking price and tags, and it will instantly appear in the marketplace.";
      } else if (lowerInput.includes('fund') || lowerInput.includes('money') || lowerInput.includes('wallet') || lowerInput.includes('balance')) {
        aiResponse = "You can add funds to your wallet by clicking on your balance in the top right corner, or by navigating directly to the Add Funds page.";
      } else if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
        aiResponse = "Hello! Looking for a premium domain today?";
      } else if (lowerInput.includes('hosting')) {
        aiResponse = "We offer blazing fast cloud hosting! Check out our Hosting page from the top menu to view our Starter, Pro, and Business cloud plans.";
      }

      setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 1000, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
      
      {/* Chat Window */}
      {isOpen && (
        <div className="glass-panel animate-slide-up" style={{ 
          width: '350px', 
          height: '500px', 
          background: 'white', 
          borderRadius: '12px', 
          boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
          marginBottom: '1rem',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}>
          {/* Header */}
          <div style={{ background: 'var(--hero-bg)', color: 'white', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Bot size={24} color="var(--accent-primary)" />
              <div>
                <h3 style={{ fontSize: '1rem', margin: 0 }}>DomainWala AI</h3>
                <span style={{ fontSize: '0.75rem', color: '#10b981' }}>● Online</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}>
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div style={{ flex: 1, padding: '1rem', overflowY: 'auto', background: '#f5f7f9', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {messages.map((msg, index) => (
              <div key={index} style={{ 
                display: 'flex', 
                gap: '0.5rem', 
                alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '85%'
              }}>
                {msg.role === 'ai' && (
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Bot size={16} color="var(--accent-primary)" />
                  </div>
                )}
                
                <div style={{ 
                  background: msg.role === 'user' ? 'var(--accent-primary)' : 'white', 
                  color: msg.role === 'user' ? 'white' : 'var(--text-primary)',
                  padding: '0.8rem', 
                  borderRadius: '12px',
                  borderTopRightRadius: msg.role === 'user' ? '2px' : '12px',
                  borderTopLeftRadius: msg.role === 'ai' ? '2px' : '12px',
                  fontSize: '0.9rem',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                }}>
                  {msg.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div style={{ display: 'flex', gap: '0.5rem', alignSelf: 'flex-start' }}>
                 <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Bot size={16} color="var(--accent-primary)" />
                  </div>
                 <div style={{ background: 'white', padding: '0.8rem', borderRadius: '12px', display: 'flex', gap: '4px', alignItems: 'center' }}>
                   <span className="typing-dot"></span>
                   <span className="typing-dot"></span>
                   <span className="typing-dot"></span>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} style={{ padding: '1rem', background: 'white', borderTop: '1px solid var(--card-border)', display: 'flex', gap: '0.5rem' }}>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..." 
              style={{ flex: 1, padding: '0.8rem', border: '1px solid var(--card-border)', borderRadius: '20px', outline: 'none', fontSize: '0.9rem' }}
            />
            <button type="submit" disabled={!input.trim()} style={{ background: input.trim() ? 'var(--accent-primary)' : '#cbd5e1', color: 'white', border: 'none', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: input.trim() ? 'pointer' : 'default', transition: 'all 0.2s' }}>
              <Send size={18} style={{ marginLeft: '3px' }} />
            </button>
          </form>
        </div>
      )}

      {/* Floating Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)} 
          className="animate-pulse"
          style={{ 
            width: '60px', 
            height: '60px', 
            borderRadius: '50%', 
            background: 'var(--accent-primary)', 
            color: 'white', 
            border: 'none', 
            boxShadow: '0 4px 12px rgba(241, 91, 34, 0.4)', 
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <MessageSquare size={28} />
        </button>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        .typing-dot {
          width: 6px;
          height: 6px;
          background: #a0aec0;
          border-radius: 50%;
          animation: typing 1.4s infinite ease-in-out both;
        }
        .typing-dot:nth-child(1) { animation-delay: -0.32s; }
        .typing-dot:nth-child(2) { animation-delay: -0.16s; }
        @keyframes typing {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }
      `}} />
    </div>
  );
};

export default AIAgent;
