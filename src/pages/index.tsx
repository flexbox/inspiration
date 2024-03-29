import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Share from '../components/share'
import QuoteItem from '../components/quoteItem'

export const query = graphql`
  query HomepageQuery {
    contentfulQuote {
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
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const title = data.contentfulQuote.title.title
  const author = data.contentfulQuote.author
  const twitterName = data.contentfulQuote.twitter_name
  const pageUrl = `/${data.contentfulQuote.slug.slug}`
  const shareUrl = data.site.siteMetadata.siteUrl

  return (
    <Layout>
      <div className="pt-8 m-auto flex flex-col items-center bg-gray-100">
        <Link className="m-auto justify-center" to={pageUrl}>
          <QuoteItem title={title} author={author} />
        </Link>
      </div>
      <div className="flex justify-center">
        <Share title={title} twitterName={twitterName} pageUrl={shareUrl} />
      </div>
    </Layout>
  )
}

export default IndexPage
