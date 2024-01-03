module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.nathanellerton.com',
    title: 'Nathan Ellerton',
    author: '@NathanJEllerton'
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/favicon.png'
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Inter', 'Inter:bold', 'Inter:semibold']
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/'
      },
      __key: 'pages'
    }
  ]
}
