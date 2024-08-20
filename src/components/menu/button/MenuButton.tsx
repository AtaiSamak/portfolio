import React, { FC } from 'react'

import Navigation from '@customTypes/navigation'
import classNames from 'classnames'

import styles from './MenuButton.module.scss'

type MenuButtonProps = {
  id: string
  isActive: boolean
  position: Navigation.Location
  backgroundColor: string
  children: React.ReactNode
  onClick: () => void
}

const MenuButton: FC<MenuButtonProps> = ({
  id,
  isActive,
  position,
  backgroundColor,
  children,
  onClick,
}) => {
  return (
    <div
      id={id}
      onClick={onClick}
      className={classNames(styles.button, {
        [styles.buttonTop]: position === 'top',
        [styles.buttonRight]: position === 'right',
        [styles.buttonBottom]: position === 'bottom',
        [styles.buttonLeft]: position === 'left',
        [styles.buttonActive]: isActive,
      })}
    >
      <div className={styles.border} />
      <div className={styles.background} style={{ backgroundColor }} />
      <div className={styles.buttonText}>{children}</div>
    </div>
  )
}

export default MenuButton
