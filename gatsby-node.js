const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  // eslint-disable-next-line no-undef
  return new Promise((resolve, reject) => {
    const quoteTemplate = path.resolve('src/pages/single.tsx')
    resolve(
      graphql(
        `
          {
            allContentfulQuote {
              nodes {
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
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create pages
        result.data.allContentfulQuote.nodes.forEach(node => {
          createPage({
            path: `/${node.slug.slug}`, // required
            component: quoteTemplate,
            context: {
              id: node.id,
              author: node.author,
              twitterName: node.twitter_name,
              title: node.title.title,
            },
          })
        })

        return
      })
    )
  })
}
