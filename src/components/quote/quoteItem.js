import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Box, Heading, Text } from 'rebass'

const QuoteItem = quote => {
  return (
    <Section p={[3, 5]} width={1}>
      <Blockquote>
        <Title fontSize={[4, 5, 7]}>{quote.title}</Title>
        <hr />
        <Cite as="cite" fontSize={[2, 3, 5]}>
          {quote.author}
        </Cite>
      </Blockquote>
    </Section>
  )
}

QuoteItem.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
}

const Blockquote = styled.blockquote`
  text-align: center;
  margin: 0;
  padding: 0;

  hr {
    max-width: 100px;
    opacity: 0.8;
    margin: 2rem auto;
    border: 0;
    border-bottom: 2px solid ${props => props.theme.colors.border};
  }
`

const Section = styled(Box)`
  max-width: 1024px;
  background-color: ${props => props.theme.colors.sectionBg};
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
