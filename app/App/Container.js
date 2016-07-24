import { connect } from 'react-redux'

import Component from './Component'

const mapStateToProps = ({ login: { logged, status } }) => {
  return {
    logged,
    status,
  }
}

export default connect(mapStateToProps)(Component)
