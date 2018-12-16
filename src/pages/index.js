import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/layout'
import Quotes from 'components/quotes'
import { graphql } from 'gatsby'

export const query = graphql`
  query HomepageQuery {
    allContentfulQuote {
      edges {
        node {
          id
          author
          url_reference
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
    <Quotes items={data.allContentfulQuote.edges} />
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage
