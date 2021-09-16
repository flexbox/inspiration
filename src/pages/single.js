import React, { Component } from 'react'
import Layout from 'components/layout'
import Share from '../components/share'
import QuoteItem from '../components/quote/quoteItem'

class singleQuote extends Component {
  render() {
    const { author, title, twitterName } = this.props.pageContext
    const pageUrl = this.props.location.href

    return (
      <Layout>
        <div id="flex" className="pt-24 m-auto flex flex-col items-center">
          <QuoteItem title={title} author={author} />
        </div>
        <div id="flex" className="m-auto flex flex-col items-center">
          <Share title={title} twitterName={twitterName} pageUrl={pageUrl} />
        </div>
      </Layout>
    )
  }
}

export default singleQuote
