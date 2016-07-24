import { connect } from 'react-redux'

import Component from './Component'

const mapStateToProps = ({ login: { user: { providerData } } }) => {
  return {
    src: providerData[0].photoURL,
  }
}

const mapDispatchToProps = undefined

export default connect(mapStateToProps, mapDispatchToProps)(Component)
