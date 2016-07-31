import React, { Component, PropTypes } from 'react'

import styles from './style.scss'

class Welcome extends Component {
  componentDidMount() {
    this.props.start()
  }

  render() {
    const { opacity, fontSize } = this.props

    return (
      <div className={styles.welcome} style={{ opacity, fontSize }}>Kboard</div>
    )
  }
}

Welcome.propTypes = {
  start: PropTypes.func.isRequired,
  opacity: PropTypes.number.isRequired,
  fontSize: PropTypes.string.isRequired,
}

export default Welcome
