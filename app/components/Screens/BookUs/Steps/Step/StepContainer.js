import { connect } from 'react-redux'

import Component from './Step'
import { nextStep } from 'redux/actions'

const mapStateToProps = ({ steps: { current } }, { step }) => {
  return {
    activated: current === step,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => dispatch(nextStep()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
