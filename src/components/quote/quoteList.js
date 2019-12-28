import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import QuoteItem from './quoteItem'
import { Flex } from 'rebass/styled-components'
import { Link } from 'gatsby'

const QuoteList = ({ items }) => {
  return (
    <Flex flexDirection="column" alignItems="center">
      {items.map((item, index) => {
        const slug = item.node.slug.slug

        return (
          <BlockquoteLink to={`/${slug}`} key={index}>
            <QuoteItem
              title={item.node.title.title}
              author={item.node.author}
            />
          </BlockquoteLink>
        )
      })}
    </Flex>
  )
}

QuoteList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const BlockquoteLink = styled(Link)`
  color: ${props => props.theme.colors.sectionText};
  text-decoration: none;
  margin-bottom: 256px;
`

export default QuoteList
