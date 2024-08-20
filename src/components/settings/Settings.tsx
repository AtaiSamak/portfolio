import React, { FC } from 'react'

import { ReactComponent as Moon } from '@icons/moon.svg'
import classNames from 'classnames'

import styles from './Settings.module.scss'

type SettingsProps = {
  className?: string
}

const Settings: FC<SettingsProps> = ({ className }) => {
  return (
    <div className={classNames(styles.settings, className)}>
      <div className={styles.theme}>
        <Moon />
      </div>
      <div className={styles.lang}>RU</div>
    </div>
  )
}

export default Settings
