module.exports = {
  siteMetadata: {
    title: 'OZE Łódź',
    description: 'Portal o odnawialnych źródłach energii w Łodzi i województwie łódzkim',
    siteUrl: 'https://oze-lodz.pages.dev',
    author: 'Redakcja OZE Łódź',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    { resolve: 'gatsby-source-filesystem', options: { name: 'blog', path: `${__dirname}/content/blog` } },
    { resolve: 'gatsby-transformer-remark', options: { plugins: [] } },
  ],
};
