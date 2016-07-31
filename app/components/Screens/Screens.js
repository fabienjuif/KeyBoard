import React, { PropTypes } from 'react'

import styles from './style.scss'

import Welcome from './Welcome'
import Why from './Why'
import How from './How'
import BookUs from './BookUs'
import Past from './Past'
import Social from './Social'
import Freelances from './Freelances'
import Footer from './Footer'

const Screens = ({ showWelcome }) => {
  return (
    <div className={styles.screens}>
      {showWelcome ? <Welcome /> : null}
      <Why />
      <How />
      <BookUs />
      <Past />
      <Social />
      <Freelances />
      <Footer />
    </div>
  )
}

Screens.propTypes = {
  showWelcome: PropTypes.bool.isRequired,
}

export default Screens
