import React, { PropTypes } from 'react'

import styles from './style.scss'

const Gif = ({ colorName }) => {
  return (
    <div className={`${styles.gif} ${styles[colorName]}`}>gif</div>
  )
}

Gif.propTypes = {
  colorName: PropTypes.string.isRequired,
}

export default Gif
