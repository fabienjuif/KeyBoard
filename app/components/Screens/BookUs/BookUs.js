import React, { PropTypes } from 'react'

import FullSized from 'FullSized'
import Step from './Steps/Step'
import Steps from './Steps'
import styles from './style.scss'

const BookUs = ({ steps }) => {
  return (
    <FullSized second className={styles.bookus}>
      <h1>book us now</h1>

      {steps.map(step => <Step step={step} />)}

      <Steps />
    </FullSized>
  )
}

BookUs.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default BookUs
