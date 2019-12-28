import React from 'react'
import { Link } from 'gatsby'
import Layout from 'components/layout'
import styled from 'styled-components'
import { Heading } from 'rebass/styled-components'

const NotFoundPage = () => (
  <Layout>
    <Heading as="h1">NOT FOUND</Heading>
    <p>
      Sorry, this page does not exist anymore{' '}
      <span role="img" aria-label="the sadness">
        😢
      </span>
    </p>
    <HomeLink to="/">Go back home</HomeLink>
  </Layout>
)

export default NotFoundPage

const HomeLink = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`
