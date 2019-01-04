import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'rebass'

const share = item => {
  const title = item.title
  const twitterName = item.twitterName === null ? '' : `@${item.twitterName}`
  const pageUrl = item.pageUrl

  return (
    <ShareLink
      href={`https://twitter.com/intent/tweet?text=${title} ${twitterName} ${pageUrl}`}
      target="_blank"
      rel="noopener noreferrer"
      p={4}
    >
      Share on Twitter
    </ShareLink>
  )
}

const ShareLink = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`

share.propTypes = {
  title: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  pageUrl: PropTypes.string.isRequired,
}

export default share
