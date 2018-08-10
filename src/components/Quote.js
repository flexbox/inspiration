import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  font-size: 24px;
  padding: 30px 0;
  text-align: center;
`

const Title = styled.p`
  font-family: 'Vidaloka', serif;
`

const Cite = styled.cite`
  text-transform: uppercase;
  font-style: normal;
`

const Quote = ({ data }) => (
  <Section>
    {data.allContentfulQuote.edges.map(edge => (
      <blockquote>
        <Title>{edge.node.title.title}</Title>
        <Cite>
          {edge.node.author}
          <small>{edge.node.url_reference}</small>
          <small>{edge.node.twitter_name}</small>
        </Cite>
      </blockquote>
    ))}
  </Section>
)

export default Quote
