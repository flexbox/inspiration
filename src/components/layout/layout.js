import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Head from 'components/head'
import Sidebar from 'components/sidebar'
import styled, { ThemeProvider } from 'styled-components'
import { Box } from 'rebass/styled-components'
import GlobalStyle from 'global.css.js'
import theme from '../../themes/theme'

const Layout = ({ children }) => (
  <>
    <ThemeProvider className="bg-gray-100" theme={theme}>
      <>
        <Head />
        <GlobalStyle />
        <Graaaadient className="w-full border-t-3 border-solid" />
        <Wrapper className="flex">
          <Sidebar p={6} />
          <Content className="overflow-auto bg-gray-100 w-full" p={4}>
            {children}
            </Content>
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



const Wrapper = styled.div`
  display: grid;
  padding: 0;
  grid-template-columns: 1fr;

  @media (min-width: 550px) {
    height: 100vh;
    grid-template-columns: 250px 1fr;
  }
`

const Content = styled(Box)`
  overflow: auto;
`

const Graaaadient = styled(Box)`
  height: 3rem;
  width: 100%;
  border-top: 3px solid ${props => props.theme.colors.black};
`

export default LayoutWithQuery
