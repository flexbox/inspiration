import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/layout'
import { Flex } from 'rebass'
import Share from '../components/share'
import QuoteItem from '../components/quote/quoteItem'

class singleQuote extends Component {
  render() {
    const { author, title, twitterName } = this.props.pageContext
    const pageUrl = this.props.location.href

    return (
      <Layout>
        <Flex justifyContent="flex-end">
          <Share title={title} twitterName={twitterName} pageUrl={pageUrl} />
        </Flex>
        <Flex justifyContent="center" alignItems="center">
          <QuoteItem title={title} author={author} />
        </Flex>
      </Layout>
    )
  }
}

singleQuote.propTypes = {
  pageContext: PropTypes.object.isRequired,
  author: PropTypes.string,
  title: PropTypes.string,
  location: PropTypes.object.isRequired,
}

export default singleQuote
