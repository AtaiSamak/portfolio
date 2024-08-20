import React from 'react'

import { ReactComponent as Close } from '@icons/close.svg'
import classNames from 'classnames'

import styles from './Burger.module.scss'

const Burger = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div
      className={classNames(styles.burger, isOpen && styles.burgerClose)}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={classNames(styles.circle, styles.circleTopLeft)}></div>
      <div className={classNames(styles.circle, styles.circleTopRight)}></div>
      <div className={classNames(styles.circle, styles.circleBottomLeft)}></div>
      <div className={classNames(styles.circle, styles.circleBottomRight)}></div>
      <Close className={styles.close} />
    </div>
  )
}

export default Burger
