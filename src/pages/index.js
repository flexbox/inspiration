import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/layout'
import QuoteItem from 'components/quote/quoteItem'
import { graphql } from 'gatsby'
import { Flex } from 'rebass'
import Share from '../components/share'

export const query = graphql`
  query HomepageQuery {
    contentfulQuote {
      id
      author
      twitter_name
      title {
        title
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
  const author = data.contentfulQuote.author
  const title = data.contentfulQuote.title.title
  const twitterName = data.contentfulQuote.twitter_name
  const pageUrl = data.site.siteMetadata.siteUrl

  return (
    <Layout>
      <Flex justifyContent="flex-end">
        <Share title={title} twitterName={twitterName} pageUrl={pageUrl} />
      </Flex>
      <QuoteItem title={title} author={author} />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage
