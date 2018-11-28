import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import posed, { PoseGroup } from 'react-pose'

class Transition extends PureComponent {
  render() {
    const { children, location } = this.props

    const RoutesContainer = posed.div({
      enter: { opacity: 1, delay: 250, delayChildren: 250 },
      exit: { opacity: 0 },
    })

    // To enable page transitions on mount / initial load,
    // use the prop `animateOnMount={true}` on `PoseGroup`.
    return (
      <PoseGroup>
        <RoutesContainer key={location.pathname}>{children}</RoutesContainer>
      </PoseGroup>
    )
  }
}

Transition.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
}

export default Transition
