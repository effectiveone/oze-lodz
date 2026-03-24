import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import PostCard from '../components/post-card';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
  const posts = data?.allMarkdownRemark?.nodes || [];
  return (
    <Layout>
      <SEO title="OZE Łódź — Portal energetyczny" description="OZE w Łodzi i województwie łódzkim" siteName="OZE Łódź" />
      <section style={{ background: 'linear-gradient(180deg, #111 0%, var(--dark-mid) 100%)', padding: '5rem 0', borderBottom: '2px solid var(--gold)' }}>
        <div className="container">
          <p style={{ fontFamily: "'Bebas Neue', cursive", color: 'var(--gold)', letterSpacing: '0.2em', fontSize: '0.85rem', marginBottom: '0.75rem' }}>PORTAL ENERGETYCZNY · ŁÓDŹ · POLSKA CENTRALNA</p>
          <h1 style={{ fontFamily: "'Bebas Neue', cursive", fontWeight: 400, fontSize: 'clamp(3rem, 8vw, 6rem)', color: 'var(--text)', lineHeight: 1, marginBottom: '1.25rem' }}>
            ENERGIA<br/><span style={{ color: 'var(--gold)' }}>ODNAWIALNA</span><br/>W ŁODZI
          </h1>
          <p style={{ fontFamily: "'Source Serif 4', serif", fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '520px', marginBottom: '2rem' }}>
            Transformacja energetyczna miasta przemysłowego. Fakty, dane, analizy rynku OZE w województwie łódzkim.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link to="/blog" style={{ background: 'var(--gold)', color: 'var(--dark)', padding: '0.7rem 1.75rem', fontFamily: "'Bebas Neue', cursive", fontWeight: 400, fontSize: '1rem', letterSpacing: '0.06em', textDecoration: 'none', display: 'inline-block' }}>ARTYKUŁY OZE</Link>
            <a href="https://ecoaudyt.app" target="_blank" rel="noopener noreferrer" style={{ border: '1px solid var(--gold)', color: 'var(--gold)', padding: '0.7rem 1.75rem', fontFamily: "'Bebas Neue', cursive", fontSize: '1rem', letterSpacing: '0.06em', textDecoration: 'none', display: 'inline-block' }}>AUDYT ENERGETYCZNY</a>
          </div>
        </div>
      </section>
      <div className="container" style={{ padding: '2.5rem 1.5rem 3rem' }}>
        {posts.length > 0 ? (
          <>
            <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: '1.8rem', color: 'var(--gold)', letterSpacing: '0.08em', marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>NAJNOWSZE ARTYKUŁY</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
              {posts.slice(0, 6).map(p => <PostCard key={p.fields.slug} title={p.frontmatter.title} excerpt={p.excerpt} slug={p.fields.slug} date={p.frontmatter.date} tags={p.frontmatter.tags} />)}
            </div>
            {posts.length > 6 && <div style={{ textAlign: 'center' }}><Link to="/blog" style={{ border: '1px solid var(--gold)', color: 'var(--gold)', padding: '0.6rem 1.5rem', fontFamily: "'Bebas Neue', cursive", fontSize: '0.9rem', letterSpacing: '0.06em', textDecoration: 'none', display: 'inline-block' }}>WSZYSTKIE ARTYKUŁY ({posts.length}) →</Link></div>}
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '5rem 0' }}>
            <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: '2.5rem', color: 'var(--gold)' }}>ARTYKUŁY WKRÓTCE</h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem', fontFamily: "'Source Serif 4', serif" }}>Przygotowujemy treści o OZE w Łodzi.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes { fields { slug } excerpt(pruneLength: 160) frontmatter { title date(formatString: "D MMMM YYYY", locale: "pl") tags } }
    }
  }
`;

export default IndexPage;
