import React, { PropTypes } from 'react'

const Component = (props) => {
  return (
    <img role="presentation" alt="avatar" {...props} />
  )
}

Component.propTypes = {
  src: PropTypes.string.isRequired,
}

export default Component
