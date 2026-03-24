import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  const { title, description, date, author, tags } = post.frontmatter;
  return (
    <Layout>
      <SEO title={title} description={description || post.excerpt} siteName="OZE Łódź" />
      <div className="container" style={{ padding: '2rem 1.5rem 4rem', maxWidth: '860px' }}>
        <Link to="/blog" style={{ fontFamily: "'Bebas Neue', cursive", fontSize: '0.85rem', color: 'var(--gold)', letterSpacing: '0.08em', display: 'block', marginBottom: '1.5rem' }}>← POWRÓT DO ARTYKUŁÓW</Link>
        <div style={{ borderTop: '2px solid var(--gold)', paddingTop: '1.5rem', marginBottom: '2rem' }}>
          {tags && <div style={{ marginBottom: '0.6rem' }}>{tags.map(t => <span key={t} style={{ background: 'var(--gold-pale)', color: 'var(--gold)', fontFamily: "'Bebas Neue', cursive", fontSize: '0.75rem', letterSpacing: '0.08em', padding: '0.1rem 0.5rem', marginRight: '0.4rem', display: 'inline-block' }}>{t}</span>)}</div>}
          <h1 style={{ fontFamily: "'Bebas Neue', cursive", fontWeight: 400, fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '0.04em', color: 'var(--text)', marginBottom: '0.5rem' }}>{title}</h1>
          <p style={{ fontFamily: "'Source Serif 4', serif", fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>{date} · {author}</p>
          {description && <p style={{ fontFamily: "'Source Serif 4', serif", fontSize: '1.05rem', color: 'var(--text-muted)', borderLeft: '3px solid var(--gold)', paddingLeft: '1rem', lineHeight: 1.65 }}>{description}</p>}
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html excerpt
      frontmatter { title description date(formatString: "D MMMM YYYY", locale: "pl") author tags }
    }
  }
`;

export default BlogPost;
