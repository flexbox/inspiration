import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Box, Heading, Text } from 'rebass/styled-components'

const QuoteItem = quote => {
  return (
    <Section p={[3, 5]}>
      <Blockquote>
        <Title fontSize={[5, 5, 6]}>{quote.title}</Title>
        <hr />
        <Cite as="cite" fontSize={[2, 3, 5]}>
          {quote.author}
        </Cite>
      </Blockquote>
    </Section>
  )
}

QuoteItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
}

const Section = styled(Box)`
  max-width: 800px;
  background-color: ${props => props.theme.colors.sectionBg};
  border-radius: 5px;

  transition: box-shadow 300ms ease-in-out;
  box-shadow: ${props => props.theme.shadows.small};
  &:hover {
    box-shadow: ${props => props.theme.shadows.xlarge};
  }
`

const Blockquote = styled.blockquote`
  text-align: center;
  margin: 0;
  padding: 0;

  hr {
    max-width: 100px;
    opacity: 0.2;
    margin: 2rem auto;
    border: 0;
    border-bottom: 2px solid ${props => props.theme.colors.border};
  }
`

const Title = styled(Heading)`
  color: ${props => props.theme.colors.sectionText};
`

const Cite = styled(Text)`
  text-transform: uppercase;
  font-style: normal;
  opacity: 0.6;
  letter-spacing: 2px;
  color: ${props => props.theme.colors.sectionText};
`

export default QuoteItem
