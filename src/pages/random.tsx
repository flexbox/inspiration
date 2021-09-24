import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Share from '../components/share'
import QuoteItem from '../components/quoteItem'
import { Link } from 'gatsby'

export const query = graphql`
  query randomQuery {
    allContentfulQuote {
      totalCount
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
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

const getRandomNumber = data => {
  const totalQuotes = data.allContentfulQuote.totalCount
  return 1 + Math.floor(Math.random() * totalQuotes)
}

const RandomPage = ({ data }) => {
  const randomItem = getRandomNumber(data)
  const title = data.allContentfulQuote.edges[randomItem].node.title.title
  const author = data.allContentfulQuote.edges[randomItem].node.author
  const twitterName =
    data.allContentfulQuote.edges[randomItem].node.twitter_name
  const pageUrl = `/${data.allContentfulQuote.edges[randomItem].node.slug.slug}`
  const shareUrl = `${data.site.siteMetadata.siteUrl}${pageUrl}`

  return (
    <Layout>
      <div className="pt-8 m-auto flex flex-col items-center">
        <Link to={pageUrl}>
          <QuoteItem title={title} author={author} />
        </Link>
      </div>
      <div className="m-auto flex flex-col items-center">
        <Share title={title} twitterName={twitterName} pageUrl={shareUrl} />
      </div>
    </Layout>
  )
}

export default RandomPage
