import React from 'react'
import { Link } from 'rebass/styled-components'

const share = item => {
  const title = item.title
  const twitterName = item.twitterName === null ? '' : `@${item.twitterName}`
  const pageUrl = item.pageUrl

  return (
    <Link
      className="underline p-4 pb-4 text-blue-500"
      href={`https://twitter.com/intent/tweet?text=${title} ${twitterName} ${pageUrl}`}
      target="_blank"
      rel="noopener noreferrer"
      p={4}
    >
      Share on Twitter
    </Link>
  )
}

export default share
