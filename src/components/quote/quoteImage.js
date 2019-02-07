import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react'

const QuoteImage = quote => {
  const title = encodeURI(quote.quote.title)
  const author = encodeURI(quote.quote.author)

  return (
    <CloudinaryContext cloudName={process.env.GATSBY_CLOUDINARY_CLOUD_NAME}>
      <Frame publicId={process.env.GATSBY_CLOUDINARY_CLOUD_IMAGE_ID}>
        <Transformation width="4000" crop="scale" />
        <Transformation
          width="3000"
          crop="scale"
          overlay={{
            fontFamily: 'Arial',
            fontSize: 20,
            fontWeight: 'bold',
            text: title,
            textAlign: 'center',
          }}
          color="#111"
        />
        <Transformation
          crop="scale"
          gravity="south"
          width="2000"
          y="200"
          overlay={{
            fontFamily: 'Arial',
            fontSize: 20,
            text: author,
            textAlign: 'center',
          }}
          color="#7B8794"
        />
      </Frame>
    </CloudinaryContext>
  )
}

const Frame = styled(Image)`
  border: 5px solid #111;
  max-width: 100%;
`

QuoteImage.propTypes = {
  quote: PropTypes.object.isRequired,
}

export default QuoteImage
