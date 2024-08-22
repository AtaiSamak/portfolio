import React, { useState } from 'react'

import classNames from 'classnames'

import styles from './Loader.module.scss'

const Loader = () => {
  const [isHide, setIsHide] = useState(false)
  return (
    <div className={classNames(styles.container, isHide && styles.containerHide)}>
      <div className={styles.loaderWrapper}>
        <div className={styles.loader}></div>
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.text}>Page is loading...</div>
      </div>
      <button onClick={() => setIsHide((prev) => !prev)}>Click!</button>
    </div>
  )
}

export default Loader
