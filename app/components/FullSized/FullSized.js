import React, { PropTypes } from 'react'

import styles from './style.scss'

const FullSized = ({ children, second = false }) => {
  const classes = [styles.fullSized]
  if (second) classes.push(styles.second)

  return (
    <div className={classes.join(' ')}>{children}</div>
  )
}

FullSized.propTypes = {
  children: PropTypes.node,
  second: PropTypes.bool,
}

export default FullSized
