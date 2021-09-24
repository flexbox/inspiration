import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import QuoteItem from '../components/quoteItem'

export const query = graphql`
  query allQuery {
    allContentfulQuote {
      nodes {
        id
        author
        title {
          title
        }
        slug {
          slug
        }
      }
    }
  }
`

const AllPage = ({ data }) => (
  <Layout>
    <div className="overflow-y-scroll h-screen pt-8 m-auto flex flex-col items-center bg-gray-100">
      {data.allContentfulQuote.nodes.map(item => {
        return (
          <Link
            to={`/${item.slug.slug}`}
            key={item.id}
            style={{ marginBottom: 300 }}
          >
            <QuoteItem
              className="w-6/12 h-4/12"
              title={item.title.title}
              author={item.author}
            />
          </Link>
        )
      })}
    </div>
  </Layout>
)

export default AllPage
