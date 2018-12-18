import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'rebass'

const share = item => (
  <Link
    href={`https://twitter.com/intent/tweet?text=${item.title} @${
      item.twitterName
    } ${item.pageUrl}`}
    target="_blank"
    rel="noopener noreferrer"
    p={2}
  >
    Share on twitter
  </Link>
)

share.propTypes = {
  twitterName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  pageUrl: PropTypes.string.isRequired,
}

export default share
