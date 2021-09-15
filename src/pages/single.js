import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/layout'
import { Flex } from 'rebass/styled-components'
import Share from '../components/share'
import QuoteItem from '../components/quote/quoteItem'

class singleQuote extends Component {
  render() {
    const { author, title, twitterName } = this.props.pageContext
    const pageUrl = this.props.location.href

    return (
      <Layout>
        <Flex className="m-auto flex flex-col items-center">
          <QuoteItem title={title} author={author} />
        </Flex>
        <Flex className="m-auto flex flex-col items-center">
          <Share title={title} twitterName={twitterName} pageUrl={pageUrl} />
        </Flex>
      </Layout>
    )
  }
}

singleQuote.propTypes = {
  pageContext: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  location: PropTypes.object.isRequired,
}

export default singleQuote
