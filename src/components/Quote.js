import React from 'react'
import styled from 'styled-components'

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
  max-width: 700px;
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

const Quote = ({ data }) => (
  <QuoteList>
    {data.allContentfulQuote.edges.map(edge => (
      <QuoteSection key={edge.node.id}>
        <Blockquote cite={edge.node.url_reference}>
          <Title>{edge.node.title.title}</Title>
          <Hr />
          <Cite>{edge.node.author}</Cite>
        </Blockquote>
      </QuoteSection>
    ))}
  </QuoteList>
)

export default Quote
