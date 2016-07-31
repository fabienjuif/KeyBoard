import { connect } from 'react-redux'

import Component from './Welcome'
import { welcomeStartFadeAway } from 'redux/actions'

const mapStateToProps = ({ welcome: { opacity } }) => {
  return {
    opacity: opacity / 100,
    fontSize: `${(100 - opacity) + 10}vw`,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    start: () => dispatch(welcomeStartFadeAway()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
