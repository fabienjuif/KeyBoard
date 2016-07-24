import React, { PropTypes } from 'react'

import styles from './styles.scss'

const Component = ({ className, logged, ...rest }) => {
  const classes = [className, styles.login]

  if (logged) classes.push(styles.logged)

  return (
    <div className={classes.join(' ')} {...rest}>
      Login
    </div>
  )
}

Component.propTypes = {
  className: PropTypes.string.isRequired,
  logged: PropTypes.bool.isRequired,
}

export default Component
