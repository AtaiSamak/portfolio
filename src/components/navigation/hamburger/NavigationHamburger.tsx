import React, { FC } from 'react'

import classNames from 'classnames'

import styles from './NavigationHamburger.module.scss'

type NavigationHamburgerProps = {
  onChangeIsActive: () => void
  isActive: boolean
}

const NavigationHamburger: FC<NavigationHamburgerProps> = ({ onChangeIsActive, isActive }) => {
  return (
    <div className={styles.hamburger}>
      <div
        className={classNames(styles.linesWrapper, isActive && styles.linesWrapperActive)}
        onClick={onChangeIsActive}
      >
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </div>
    </div>
  )
}

export default NavigationHamburger
