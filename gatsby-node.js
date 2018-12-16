/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin')

exports.onCreateWebpackConfig = ({
  stage,
  getConfig,
  rules,
  loaders,
  actions,
}) => {
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
    const quoteTemplate = path.resolve('src/pages/singleQuote.js')
    resolve(
      graphql(
        `
          {
            allContentfulQuote {
              edges {
                node {
                  id
                  author
                  url_reference
                  title {
                    title
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
            path: `${edge.node.id}`, // required
            component: quoteTemplate,
            context: {
              id: edge.node.id,
              author: edge.node.author,
              title: edge.node.title.title,
            },
          })
        })

        return
      })
    )
  })
}
