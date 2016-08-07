import React, { PropTypes } from 'react'

const Step = ({ step, onClick, activated = false }) => {
  if (!activated) return null

  return (
    <div onClick={onClick}>{step}</div>
  )
}

Step.propTypes = {
  step: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  activated: PropTypes.bool,
}

export default Step
