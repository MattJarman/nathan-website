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
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'https://nathan-cms.herokuapp.com',
        queryLimit: 1000,
        collectionTypes: ['experience', 'photo', 'social', 'video', 'skill'],
        singleTypes: [`about`, `site`]
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Open Sans', 'Open Sans:bold', 'Open Sans:semibold']
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
