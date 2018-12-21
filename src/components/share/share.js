import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'rebass'

const share = item => (
  <ShareLink
    href={`https://twitter.com/intent/tweet?text=${item.title} @${
      item.twitterName
    } ${item.pageUrl}`}
    target="_blank"
    rel="noopener noreferrer"
    p={4}
  >
    Share on twitter
  </ShareLink>
)

const ShareLink = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`

share.propTypes = {
  twitterName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  pageUrl: PropTypes.string.isRequired,
}

export default share
