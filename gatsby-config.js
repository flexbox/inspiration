require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Webcitation',
    description: 'Une citation chaque jour',
    keywords: 'webcitation, citation, developement, design, gestion de projet',
    email: 'dleuliette@gmail.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || '',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Vidaloka`],
      },
    },
  ],
}
