import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/layout'
import styled from 'styled-components'
import { Flex, Box } from 'rebass'
import Share from '../components/share/share'

class singleQuote extends Component {
  render() {
    const { author, title } = this.props.pageContext

    return (
      <Layout>
        <Flex justifyContent="center">
          <Box
            p={5}
            fontSize={[1, 2, 4]}
            width={[1, 1, 1 / 2]}
            color="white"
            bg="#373737"
          >
            <blockquote>
              <Title>{title}</Title>
              <cite>{author}</cite>
            </blockquote>
          </Box>
        </Flex>
        <Flex justifyContent="center">
          <Share title={title} twitterName={author} pageUrl="nope" />
        </Flex>
      </Layout>
    )
  }
}

singleQuote.propTypes = {
  author: PropTypes.object.isRequired,
  title: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

const Title = styled.p`
  font-family: 'Vidaloka', serif;
  font-size: 44px;
`

export default singleQuote
