import React, { PropTypes } from 'react'

const Avatar = (props) => {
  return (
    <img role="presentation" alt="avatar" {...props} />
  )
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
}

export default Avatar
