import React from 'react'
import PropTypes from 'prop-types'
import Transition from 'components/transition'

const wrapPageElement = ({ element, props }) => {
  return <Transition {...props}>{element}</Transition>
}

wrapPageElement.propTypes = {
  element: PropTypes.object,
  props: PropTypes.object,
}

export default wrapPageElement
