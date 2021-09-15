import React from 'react'
import styled from 'styled-components'
import { Flex, Heading, Text, Button } from 'rebass/styled-components'
import { Link } from 'gatsby'

const contributeEmail =
  'mailto:dleuliette@gmail.com?subject=New%20quote&body=title:%20author_name:%20author_twitter:'

const frameLink = 'https://displate.com/flexbox/displates'

const sidebar = () => (
  <Flex
   className="m-auto content-center justify-content-center sm:m-0 p-8 w-64 h-screen bg-gray-100"
    pt={[2, 4]} 
    px={4}
    >
    <Heading className="flex flex-col text-gray-500 text-3xl font-vida" mb={3}>
      Inspiration
      </Heading>
    <Text className="flex flex-col text-gray-400 mt-6 mb-12"
      mb={4}
      as="p"
      sx={{
        lineHeight: 'body',
        color: 'gray',
      }}
    >
      Curated quotes from tech conferences for entrepreneurs
    </Text>

    <PageLink 
    className="flex flex-col pt-2 pb-4 relative font-bold"
    to="/"
    activeClassName="is-active"
    >
      Last Quote
    </PageLink>
    <PageLink className="flex flex-col pt-2 pb-4 relative font-bold" to="/random" activeClassName="is-active">
      Random
    </PageLink>
    <PageLink className="flex flex-col pt-2 pb-4 relative font-bold" to="/all" activeClassName="is-active">
      All
    </PageLink>
    <Button class="flex flex-col mt-2 mb-4 bg-gray-300 hover:bg-blue-700 text-gray-400 font-bold py-2 px-4 rounded w-full"
      variant="primary"
      my={3}
      onClick={() => window.open(contributeEmail, '_blank')}
    >
      Contribute by email
    </Button>
    <Button class="flex flex-col mt-4 mb-4 bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
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
