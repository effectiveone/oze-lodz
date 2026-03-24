import React from 'react';
import { Link } from 'gatsby';

const PostCard = ({ title, excerpt, slug, date, tags }) => (
  <article style={{ background: 'var(--dark-card)', border: '1px solid var(--border)', padding: '1.5rem', borderBottom: '2px solid transparent', transition: 'border-bottom-color 0.2s' }}
    onMouseEnter={e => e.currentTarget.style.borderBottomColor = 'var(--gold)'}
    onMouseLeave={e => e.currentTarget.style.borderBottomColor = 'transparent'}>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
      {tags && tags[0] && <span style={{ background: 'var(--gold-pale)', color: 'var(--gold)', fontFamily: "'Bebas Neue', cursive", fontSize: '0.78rem', letterSpacing: '0.08em', padding: '0.1rem 0.5rem' }}>{tags[0]}</span>}
      <time style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: "'Source Serif 4', serif" }}>{date}</time>
    </div>
    <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontWeight: 400, fontSize: '1.4rem', letterSpacing: '0.04em', marginBottom: '0.5rem', lineHeight: 1.1 }}>
      <Link to={`/blog${slug}`} style={{ color: 'var(--text)', textDecoration: 'none' }}
        onMouseEnter={e => e.target.style.color = 'var(--gold)'}
        onMouseLeave={e => e.target.style.color = 'var(--text)'}>{title}</Link>
    </h2>
    {excerpt && <p style={{ fontSize: '0.87rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '0.9rem' }}>{excerpt}</p>}
    <Link to={`/blog${slug}`} style={{ color: 'var(--gold)', fontSize: '0.82rem', borderBottom: '1px solid var(--gold)', paddingBottom: '1px' }}>Czytaj dalej →</Link>
  </article>
);

export default PostCard;
