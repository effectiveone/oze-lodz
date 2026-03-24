import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: '#111', borderTop: '2px solid var(--gold)', padding: '3rem 0 1.5rem', marginTop: '5rem' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
        <div>
          <h3 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: '1.5rem', color: 'var(--gold)', marginBottom: '0.75rem', letterSpacing: '0.08em', borderBottom: 'none' }}>OZE ŁÓDŹ</h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>Editorial portal o energetycznej przyszłości Łodzi i centrum Polski.</p>
        </div>
        <div>
          <h4 style={{ fontFamily: "'Bebas Neue', cursive", color: 'var(--gold)', fontSize: '0.9rem', letterSpacing: '0.08em', marginBottom: '0.6rem' }}>NAWIGACJA</h4>
          <Link to="/" style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '0.4rem', textDecoration: 'none' }}>Strona główna</Link>
          <Link to="/blog" style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.88rem', textDecoration: 'none' }}>Artykuły</Link>
        </div>
        <div>
          <h4 style={{ fontFamily: "'Bebas Neue', cursive", color: 'var(--gold)', fontSize: '0.9rem', letterSpacing: '0.08em', marginBottom: '0.6rem' }}>PARTNER</h4>
          <a href="https://ecoaudyt.app" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>ecoaudyt.app →</a>
        </div>
      </div>
      <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Bebas Neue', cursive", fontSize: '0.8rem', color: 'var(--text-muted)', letterSpacing: '0.08em' }}>© {year} OZE ŁÓDŹ</p>
      </div>
    </footer>
  );
};

export default Footer;
