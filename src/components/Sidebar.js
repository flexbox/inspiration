import React from 'react'
import styled from 'styled-components'
import { Flex, Heading, Text, Button } from 'rebass/styled-components'
import { Link } from 'gatsby'

const contributeEmail =
  'mailto:dleuliette@gmail.com?subject=New%20quote&body=title:%20author_name:%20author_twitter:'

const frameLink = 'https://displate.com/flexbox/displates'

const Sidebar = () => (
  <Flex className="m-auto content-center justify-content-center sm:m-0 p-8 pt-16 w-64 h-screen bg-gray-100">
    <Heading
      className="font-vidaloka flex flex-col text-gray-500 text-2xl font-vida"
      mb={3}
    >
      Inspiration
    </Heading>
    <Text
      className="flex flex-col text-gray-500 mt-6 mb-12 leading-7"
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
      className="flex flex-col pt-2 pb-4 relative font-bold text-gray-400"
      to="/"
      activeClassName="text-black"
    >
      Last Quote
    </PageLink>
    <PageLink
      className="flex flex-col pt-2 pb-4 relative font-bold text-gray-400"
      to="/random"
      activeClassName="text-black"
    >
      Random
    </PageLink>
    <PageLink
      className="flex flex-col pt-2 pb-4 relative font-bold text-gray-400"
      to="/all"
      activeClassName="text-black"
    >
      All
    </PageLink>
    <Button
      class="flex flex-col mt-2 mb-4 bg-gray-300 text-gray-500 hover:text-black font-bold py-2 px-4 rounded w-full"
      variant="primary"
      my={3}
      onClick={() => window.open(contributeEmail, '_blank')}
    >
      Contribute by email
    </Button>
    <Button
      class="flex flex-col mt-4 mb-4 bg-blue-500 hover:text-white text-gray-300 font-bold py-2 px-4 rounded w-full"
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
`

export default Sidebar
