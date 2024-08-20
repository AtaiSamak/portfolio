import React, { FC } from 'react'

import { ReactComponent as Close } from '@icons/close.svg'
import classNames from 'classnames'

import styles from './Burger.module.scss'

type BurgerProps = {
  className?: string
  isClose: boolean
  onClick: () => void
}

const Burger: FC<BurgerProps> = ({ isClose, onClick, className }) => {
  return (
    <div
      className={classNames(styles.burger, isClose && styles.burgerClose, className)}
      onClick={onClick}
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
