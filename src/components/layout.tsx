import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Head from './head'
import Sidebar from './Sidebar'
import theme from '../themes/theme'

const Layout = ({ children }) => (
  <>
    <div className="bg-gray-100" theme={theme}>
      <>
        <Head />
        <div className="w-full border-t-3 border-solid bg-gray-100" />
        <div className="flex">
          <Sidebar />
          <div className="overflow-auto bg-gray-100 w-full pt-24 pb-24" p={4}>
            {children}
          </div>
        </div>
      </>
    </div>
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

export default LayoutWithQuery
