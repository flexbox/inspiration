import React from 'react'
import styled from 'styled-components'
import { Flex, Heading } from 'rebass'
import { Link } from 'gatsby'

const sidebar = () => (
  <Flex pt={5} px={3} flexDirection="column">
    <Heading mb={3}>Inspiration</Heading>
    <PageLink to="/">Last</PageLink>
    <PageLink to="/all">All</PageLink>
  </Flex>
)

const PageLink = styled(Link)``

export default sidebar
