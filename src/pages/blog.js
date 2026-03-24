import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostCard from '../components/post-card';
import SEO from '../components/seo';

const BlogPage = ({ data }) => {
  const posts = data?.allMarkdownRemark?.nodes || [];
  return (
    <Layout>
      <SEO title="Artykuły" description="Artykuły o OZE w Łodzi" siteName="OZE Łódź" />
      <div className="container" style={{ padding: '2.5rem 1.5rem 3rem' }}>
        <h1 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: '3rem', color: 'var(--gold)', letterSpacing: '0.06em', marginBottom: '0.25rem' }}>ARTYKUŁY OZE</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontFamily: "'Source Serif 4', serif" }}>{posts.length} artykułów w archiwum</p>
        {posts.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {posts.map(p => <PostCard key={p.fields.slug} title={p.frontmatter.title} excerpt={p.excerpt} slug={p.fields.slug} date={p.frontmatter.date} tags={p.frontmatter.tags} />)}
          </div>
        ) : <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '3rem 0' }}>Artykuły pojawią się wkrótce.</p>}
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

export default BlogPage;
