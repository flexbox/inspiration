import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'rebass'

const share = item => {
  return (
    <Link
      href={`https://twitter.com/intent/tweet?text=${item.title} ${
        item.twitterName
      } ${item.pageUrl}`}
      target="_blank"
      rel="noopener noreferrer"
      p={2}
    >
      Share on twitter
    </Link>
  )
}

share.propTypes = {
  author: PropTypes.object.isRequired,
  title: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

export default share
