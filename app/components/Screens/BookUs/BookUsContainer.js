import { connect } from 'react-redux'

import Component from './BookUs'

const mapStateToProps = ({ steps: { order } }) => {
  return {
    steps: order,
  }
}

export default connect(mapStateToProps)(Component)
