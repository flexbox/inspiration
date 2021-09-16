import React from 'react'
import { Link } from 'gatsby'
import Layout from 'components/layout'

const NotFoundPage = () => (
  <Layout>
    <div id="Heading" as="h1">
      NOT FOUND
    </div>
    <p>
      Sorry, this page does not exist anymore{' '}
      <span role="img" aria-label="the sadness">
        😢
      </span>
    </p>
    <Link to="/">Go back home</Link>
  </Layout>
)

export default NotFoundPage
