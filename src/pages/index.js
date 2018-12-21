import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Flex } from 'rebass'
import Layout from 'components/layout'
import Share from '../components/share'
import QuoteItem from 'components/quote/quoteItem'

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
  const title = data.contentfulQuote.title.title
  const author = data.contentfulQuote.author
  const twitterName = data.contentfulQuote.twitter_name
  const pageUrl = data.site.siteMetadata.siteUrl

  return (
    <Layout>
      <Flex flexDirection="column" alignItems="center">
        <QuoteItem title={title} author={author} />
      </Flex>
      <Flex justifyContent="center">
        <Share title={title} twitterName={twitterName} pageUrl={pageUrl} />
      </Flex>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage
