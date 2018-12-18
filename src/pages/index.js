import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/layout'
import QuoteList from 'components/quote/quoteList'
import { graphql } from 'gatsby'

export const query = graphql`
  query HomepageQuery {
    allContentfulQuote {
      edges {
        node {
          id
          author
          title {
            title
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <QuoteList items={data.allContentfulQuote.edges} />
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage
