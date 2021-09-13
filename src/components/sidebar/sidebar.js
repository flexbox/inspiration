import React from 'react'
import styled from 'styled-components'
import { Flex, Heading, Text, Button } from 'rebass/styled-components'
import { Link } from 'gatsby'

const contributeEmail =
  'mailto:dleuliette@gmail.com?subject=New%20quote&body=title:%20author_name:%20author_twitter:'

const frameLink = 'https://displate.com/flexbox/displates'

const sidebar = () => (
  <Flex pt={[2, 4]} px={4} flexDirection="column">
    <Heading mb={3}>Inspiration</Heading>
    <Text
      mb={4}
      as="p"
      sx={{
        lineHeight: 'body',
        color: 'gray',
      }}
    >
      Curated quotes from tech conferences for entrepreneurs
    </Text>

    <PageLink to="/" activeClassName="is-active">
      Last Quote
    </PageLink>
    <PageLink to="/random" activeClassName="is-active">
      Random
    </PageLink>
    <PageLink to="/all" activeClassName="is-active">
      All
    </PageLink>
    <Button
      variant="primary"
      my={3}
      onClick={() => window.open(contributeEmail, '_blank')}
    >
      Contribute by email
    </Button>
    <Button
      variant="secondary"
      onClick={() => window.open(frameLink, '_blank')}
    >
      Buy a frame
    </Button>
  </Flex>
)

const PageLink = styled(Link)`
  display: flex;
  flex-direction: columm;
  text-decoration: none;
  color: ${props => props.theme.colors.grayLight};
  padding-top: 1rem;
  padding-bottom: 1rem;
  position: relative;
  font-weight: bold;

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
