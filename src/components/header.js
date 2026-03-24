import React from 'react';
import { Link } from 'gatsby';
import '../styles/global.css';

const Header = () => (
  <header style={{ background: 'var(--dark-mid)', borderBottom: '2px solid var(--gold)', position: 'sticky', top: 0, zIndex: 100 }}>
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.9rem 1.5rem' }}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <span style={{ fontFamily: "'Bebas Neue', cursive", fontSize: '1.8rem', color: 'var(--text)', letterSpacing: '0.08em' }}>
          OZE <span style={{ color: 'var(--gold)' }}>ŁÓDŹ</span>
        </span>
        <span style={{ display: 'block', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Energia odnawialna · Województwo Łódzkie</span>
      </Link>
      <nav style={{ display: 'flex', gap: '1.75rem', alignItems: 'center' }}>
        <Link to="/" style={{ color: 'var(--text-muted)', fontSize: '0.88rem', fontFamily: "'Source Serif 4', serif", textDecoration: 'none' }}>Główna</Link>
        <Link to="/blog" style={{ color: 'var(--text-muted)', fontSize: '0.88rem', fontFamily: "'Source Serif 4', serif", textDecoration: 'none' }}>Artykuły</Link>
        <a href="https://ecoaudyt.app" target="_blank" rel="noopener noreferrer"
          style={{ border: '1px solid var(--gold)', color: 'var(--gold)', padding: '0.35rem 0.9rem', fontSize: '0.82rem', fontFamily: "'Bebas Neue', cursive", letterSpacing: '0.06em', textDecoration: 'none' }}>
          AUDYT ENERGETYCZNY →
        </a>
      </nav>
    </div>
  </header>
);

export default Header;
