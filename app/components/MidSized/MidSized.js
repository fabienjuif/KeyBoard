import React, { PropTypes } from 'react'

import Gif from './Gif'
import styles from './style.scss'

const MidSized = ({ children, textLeft = false, ...rest }) => {
  return (
    <div className={styles.midSized}>
      {textLeft ? null : <Gif {...rest} />}
      <div className={styles.text}>{children}</div>
      {textLeft ? <Gif {...rest} /> : null}
    </div>
  )
}

MidSized.propTypes = {
  children: PropTypes.node.isRequired,
  textLeft: PropTypes.bool,
}

export default MidSized
