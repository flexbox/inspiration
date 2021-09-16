import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from 'components/layout'
import Share from '../components/share'
import QuoteItem from '../components/quoteItem'
import { QuoteLink } from '../components/quote/quoteLink'

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
      <div className="pt-8 m-auto flex flex-col items-center">
        <QuoteLink className="m-auto justify-center" to={pageUrl}>
          <QuoteItem title={title} author={author} />
        </QuoteLink>
      </div>
      <div className="flex justify-center">
        <Share title={title} twitterName={twitterName} pageUrl={shareUrl} />
      </div>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage
