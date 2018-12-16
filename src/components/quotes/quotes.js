import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Quote = ({ items }) => (
  <QuoteList>
    {items.map(item => (
      <QuoteSection key={item.node.id}>
        <BlockquoteLink to={`/${item.node.id}`}>
          <Blockquote cite={item.node.url_reference}>
            <Title>{item.node.title.title}</Title>
            <hr />
            <Cite>{item.node.author}</Cite>
          </Blockquote>
        </BlockquoteLink>
      </QuoteSection>
    ))}
  </QuoteList>
)

Quote.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const BlockquoteLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  padding: 3rem 1rem;
`

const QuoteList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const QuoteSection = styled.div`
  margin-bottom: 15rem;
  text-align: center;
  background-color: #373737;
  border-radius: 5px;
  min-height: 40vh;
  max-width: 700px;
  display: flex;
  align-items: center;
`

const Blockquote = styled.blockquote`
  width: 100%;
  margin: 0;
  padding: 0;

  hr {
    max-width: 100px;
    opacity: 0.8;
    margin: 2rem auto;
  }
`

const Title = styled.p`
  font-family: 'Vidaloka', serif;
  font-size: 44px;
`

const Cite = styled.cite`
  text-transform: uppercase;
  font-style: normal;
  font-size: 24px;
  opacity: 0.6;
  letter-spacing: 2px;
`

export default Quote
