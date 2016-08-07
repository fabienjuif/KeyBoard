import React, { PropTypes } from 'react'

import Round from './Round'
import styles from './styles.scss'

const Steps = ({ steps }) => {
  return (
    <div className={styles.steps}>
      {steps.map((step, index) => <Round step={step} last={index === steps.length - 1} />)}
    </div>
  )
}

Steps.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Steps
