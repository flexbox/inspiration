import React from 'react'
import Layout from '../components/layout'
import Share from '../components/share'
import QuoteItem from '../components/quoteItem'

function singleQuote(props) {
  const { author, title, twitterName } = props.pageContext
  const pageUrl = props.location.href

  return (
    <Layout>
      <div className="pt-24 m-auto flex flex-col items-center">
        <QuoteItem title={title} author={author} />
      </div>
      <div className="m-auto flex flex-col items-center">
        <Share title={title} twitterName={twitterName} pageUrl={pageUrl} />
      </div>
    </Layout>
  )
}

export default singleQuote
