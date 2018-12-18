import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/layout'
import QuoteList from 'components/quoteList'
import { graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import { theme } from '../themes/colors'

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
  <ThemeProvider theme={theme}>
    <Layout>
      <QuoteList items={data.allContentfulQuote.edges} />
    </Layout>
  </ThemeProvider>
)

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage
