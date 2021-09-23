import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/layout/layout'
import Share from '../components/share'
import QuoteItem from '../components/quoteItem'

function singleQuote() {
  // eslint-disable-next-line no-undef
  const { author, title, twitterName } = props.pageContext
  // eslint-disable-next-line no-undef
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

singleQuote.propTypes = {
  pageContext: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  location: PropTypes.object.isRequired,
}

export default singleQuote
