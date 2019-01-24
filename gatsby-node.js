const path = require('path')
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      plugins: [new DirectoryNamedWebpackPlugin()],
    },
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const quoteTemplate = path.resolve('src/pages/single.js')
    resolve(
      graphql(
        `
          {
            allContentfulQuote {
              edges {
                node {
                  id
                  author
                  twitter_name
                  title {
                    title
                  }
                  slug {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create pages
        result.data.allContentfulQuote.edges.forEach(edge => {
          createPage({
            path: edge.node.slug.slug, // required
            component: quoteTemplate,
            context: {
              id: edge.node.id,
              author: edge.node.author,
              twitterName: edge.node.twitter_name,
              title: edge.node.title.title,
            },
          })
        })

        return
      })
    )
  })
}
