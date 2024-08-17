import React, { FC } from 'react'

import classNames from 'classnames'

import styles from './MenuButton.module.scss'

type MenuButtonProps = {
  position: 'top' | 'right' | 'bottom' | 'left'
  children: React.ReactNode
}

const MenuButton: FC<MenuButtonProps> = ({ position, children }) => {
  return (
    <div
      className={classNames(styles.button, {
        [styles.buttonTop]: position === 'top',
        [styles.buttonRight]: position === 'right',
        [styles.buttonBottom]: position === 'bottom',
        [styles.buttonLeft]: position === 'left',
      })}
    >
      <div className={styles.border}></div>
      <div className={styles.background}></div>
      <div className={styles.buttonText}>{children}</div>
    </div>
  )
}

export default MenuButton
