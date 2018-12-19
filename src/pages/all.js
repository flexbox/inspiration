import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/layout'
import QuoteList from 'components/quote/quoteList'
import { graphql } from 'gatsby'

export const query = graphql`
  query allQuery {
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

const AllPage = ({ data }) => (
  <Layout>
    <QuoteList items={data.allContentfulQuote.edges} />
  </Layout>
)

AllPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AllPage
