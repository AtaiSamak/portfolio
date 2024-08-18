import React, { FC } from 'react'

import Navigation from '@customTypes/navigation'
import classNames from 'classnames'

import styles from './MenuButton.module.scss'

type MenuButtonProps = {
  isActive: boolean
  position: Navigation.Location
  children: React.ReactNode
  onClick: () => void
}

const MenuButton: FC<MenuButtonProps> = ({ isActive, position, children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={classNames(styles.button, {
        [styles.buttonTop]: position === 'top',
        [styles.buttonRight]: position === 'right',
        [styles.buttonBottom]: position === 'bottom',
        [styles.buttonLeft]: position === 'left',
        [styles.buttonActive]: isActive,
      })}
    >
      <div className={styles.border}></div>
      <div className={styles.background}></div>
      <div className={styles.buttonText}>{children}</div>
    </div>
  )
}

export default MenuButton
