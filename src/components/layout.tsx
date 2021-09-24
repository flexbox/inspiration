import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Head from './head'
import Sidebar from './Sidebar'
import styled, { ThemeProvider } from 'styled-components'
import { Box } from 'rebass/styled-components'
import GlobalStyle from '../global.css'
import theme from '../themes/theme'

const Layout = ({ children }) => (
  <>
    <ThemeProvider className="bg-gray-100" theme={theme}>
      <>
        <Head />
        <GlobalStyle />
        <Graaaadient className="w-full border-t-3 border-solid bg-gray-100" />
        <Wrapper className="flex">
          <Sidebar />
          <Content className="overflow-auto bg-gray-100 w-full" p={4}>
            {children}
          </Content>
        </Wrapper>
      </>
    </ThemeProvider>
  </>
)

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
