import React from 'react';
import { Link } from 'gatsby';
const NotFound = () => (
  <div style={{ textAlign: 'center', padding: '6rem 2rem', background: 'var(--dark)', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <h1 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: '8rem', color: 'var(--gold)', lineHeight: 1 }}>404</h1>
    <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}><Link to="/" style={{ color: 'var(--gold)' }}>← Wróć na stronę główną</Link></p>
  </div>
);
export default NotFound;
