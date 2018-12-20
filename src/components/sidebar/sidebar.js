import React from 'react'
import styled from 'styled-components'
import { Flex, Heading } from 'rebass'
import { Link } from 'gatsby'

const sidebar = () => (
  <Flex pt={[2, 5]} px={3} flexDirection="column">
    <PageLink to="/" activeClassName="is-active">
      <Heading mb={3}>Inspiration</Heading>
    </PageLink>
    <PageLink to="/" activeClassName="is-active">
      Last
    </PageLink>
    <PageLink to="/all" activeClassName="is-active">
      All
    </PageLink>
  </Flex>
)

const PageLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: ${props => props.theme.colors.grayLight};
  padding-top: 1rem;
  padding-bottom: 1rem;

  &:hover {
    color: ${props => props.theme.colors.gray};
  }
  &.is-active {
    color: ${props => props.theme.colors.text};
    font-weight: bold;
  }
`

export default sidebar
