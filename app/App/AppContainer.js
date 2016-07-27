import { connect } from 'react-redux'

import Component from './App'

const mapStateToProps = ({ login: { logged, status } }) => {
  return {
    logged,
    status,
  }
}

export default connect(mapStateToProps)(Component)
