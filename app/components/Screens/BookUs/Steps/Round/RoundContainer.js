import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import Component from './Round'
import { goToStep } from 'redux/actions'

const getSteps = (state) => state.steps.order
const getCurrent = (state) => state.steps.current
const getStep = (state, ownProps) => ownProps.step

const makeIsDone = () => {
  return createSelector(
    [getSteps, getCurrent, getStep],
    (steps, current, step) => {
      return steps.indexOf(current) >= steps.indexOf(step)
    }
  )
}

const makeMapStateToProps = () => {
  const isDone = makeIsDone()
  return (state, ownProps) => {
    return {
      done: isDone(state, ownProps),
    }
  }
}

const mapDispatchToProps = (dispatch, { step }) => {
  return {
    onClick: () => dispatch(goToStep(step)),
  }
}

export default connect(makeMapStateToProps, mapDispatchToProps)(Component)
