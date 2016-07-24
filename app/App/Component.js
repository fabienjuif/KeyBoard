import React, { PropTypes } from 'react'

import Login from 'Login'
import Avatar from 'Avatar'

const Component = ({ logged }) => {
  return (
    <div>
      <Login />
      {logged ? <Avatar /> : null}
    </div>
  )
}

Component.propTypes = {
  logged: PropTypes.bool.isRequired,
}

export default Component
