import React, { PropTypes } from 'react'

import styles from './style.scss'

const Round = ({ step, done = false, last = false, onClick }) => {
  const classes = [styles.round]
  if (done) classes.push(styles.done)

  return (
    <div className={classes.join(' ')}>
      <div className={styles.ball} title={step} onClick={onClick} />
      {last ? null : <div className={styles.line} />}
    </div>
  )
}

Round.propTypes = {
  onClick: PropTypes.func.isRequired,
  step: PropTypes.string,
  done: PropTypes.bool,
  last: PropTypes.bool,
}

export default Round
