import React from 'react'
import styled from 'styled-components'
import { Flex, Heading } from 'rebass'
import { Link } from 'gatsby'

const sidebar = () => (
  <Flex pt={[2, 4]} pl={[4, 5]} flexDirection="column">
    <PageLink to="/">
      <Heading mb={3}>Inspiration</Heading>
    </PageLink>
    <PageLink to="/" activeClassName="is-active">
      Last
    </PageLink>
    <PageLink to="/random" activeClassName="is-active">
      Random
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
  position: relative;

  &:hover {
    color: ${props => props.theme.colors.gray};
  }
  &.is-active {
    color: ${props => props.theme.colors.text};
    font-weight: bold;
    &::after {
      position: absolute;
      content: '•';
      left: -15px;
    }
  }
`

export default sidebar
