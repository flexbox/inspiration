import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/layout'
import { Flex } from 'rebass'
import Share from '../components/share/share'
import QuoteItem from '../components/quoteList/quoteItem'
import { ThemeProvider } from 'styled-components'
import { theme } from '../themes/colors'

class singleQuote extends Component {
  render() {
    const { author, title, twitterName } = this.props.pageContext
    const pageUrl = this.props.location.href

    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <Flex justifyContent="center" alignItems="center">
            <QuoteItem title={title} author={author} />
          </Flex>
          <Flex justifyContent="center">
            <Share title={title} twitterName={twitterName} pageUrl={pageUrl} />
          </Flex>
        </Layout>
      </ThemeProvider>
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
