import React, { PropTypes } from 'react'

import Login from 'Login'
import Avatar from 'Avatar'

const App = ({ logged }) => {
  return (
    <div>
      <Login />
      {logged ? <Avatar /> : null}
    </div>
  )
}

App.propTypes = {
  logged: PropTypes.bool.isRequired,
}

export default App
