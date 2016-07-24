import { connect } from 'react-redux'

import Component from './Component'
import { login } from './actions'

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
