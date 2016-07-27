import { connect } from 'react-redux'

import Component from './Login'
import { login } from 'redux/actions'

const mapStateToProps = ({ login: { logged } }) => {
  return {
    logged,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => dispatch(login()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
