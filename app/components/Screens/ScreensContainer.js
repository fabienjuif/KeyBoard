import { connect } from 'react-redux'

import Component from './Screens'

const mapStateToProps = ({ welcome: { opacity } }) => {
  return {
    showWelcome: opacity !== 0,
  }
}

export default connect(mapStateToProps)(Component)
