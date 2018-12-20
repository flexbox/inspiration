import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Head from 'components/head'
import Sidebar from 'components/sidebar'
import styled, { ThemeProvider } from 'styled-components'
import { Box } from 'rebass'
import GlobalStyle from 'global.css.js'
import theme from '../../themes/theme'

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <Head />
        <Wrapper>
          <Sidebar />
          <Content p={4}>{children}</Content>
        </Wrapper>
      </>
    </ThemeProvider>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
}

const LayoutWithQuery = props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteTitleShort
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
)

LayoutWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
}

const Wrapper = styled.div`
  display: grid;
  padding: 0;
  grid-template-columns: 1fr;

  @media (min-width: 550px) {
    height: 100vh;
    grid-template-columns: 150px 1fr;
  }
`

const Content = styled(Box)`
  overflow: auto;
`

export default LayoutWithQuery
