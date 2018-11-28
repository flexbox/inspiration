import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Quote = ({ items }) => (
  <QuoteList>
    {items.map(item => (
      <QuoteSection key={item.node.id}>
        <Blockquote cite={item.node.url_reference}>
          <Title>{item.node.title.title}</Title>
          <Hr />
          <Cite>{item.node.author}</Cite>
        </Blockquote>
      </QuoteSection>
    ))}
  </QuoteList>
)

Quote.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Quote

const QuoteList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const QuoteSection = styled.div`
  padding: 3rem 0;
  margin-bottom: 15rem;
  text-align: center;
  background-color: #373737;
  border-radius: 5px;
  color: white;
  min-height: 40vh;
  width: 700px;
  display: flex;
  align-items: center;
`

const Blockquote = styled.blockquote`
  width: 100%;
`

const Title = styled.p`
  font-family: 'Vidaloka', serif;
  font-size: 44px;
`

const Hr = styled.hr`
  max-width: 100px;
  opacity: 0.8;
  margin: 2rem auto;
`

const Cite = styled.cite`
  text-transform: uppercase;
  font-style: normal;
  font-size: 24px;
  opacity: 0.6;
  letter-spacing: 2px;
`
