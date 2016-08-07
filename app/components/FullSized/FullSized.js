import React, { PropTypes } from 'react'

import styles from './style.scss'

const FullSized = ({ children, second = false, className }) => {
  const classes = [styles.fullSized]
  if (second) classes.push(styles.second)
  if (className) classes.push(className)

  return (
    <div className={classes.join(' ')}>{children}</div>
  )
}

FullSized.propTypes = {
  children: PropTypes.node,
  second: PropTypes.bool,
  className: PropTypes.string,
}

export default FullSized
