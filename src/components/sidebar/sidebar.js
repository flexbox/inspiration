import React from 'react'
import styled from 'styled-components'
import { Flex, Heading, Button } from 'rebass'
import { Link } from 'gatsby'

const typeformUrl = 'https://flexbox.typeform.com/to/oTw3YA'

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
    <ButtonNew variant='primary' mt={3} onClick={() => window.open(typeformUrl, "_blank")}>
      New Quote
    </ButtonNew>
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

const ButtonNew = styled(Button)`
  transition: box-shadow 0.3s ease-in-out;
  box-shadow: 0 1px 1px hsla(255, 0%, 0%, 0.1);
  &:hover {
    color: ${props => props.theme.colors.text};
    box-shadow: 0 4px 6px hsla(255, 0%, 0%, 0.1);
    cursor: pointer;
  }
`

export default sidebar
