import React from 'react'

import { ReactComponent as Moon } from '@icons/moon.svg'

import styles from './Settings.module.scss'

const Settings = () => {
  return (
    <div className={styles.settings}>
      <div className={styles.theme}>
        <Moon />
      </div>
      <div className={styles.lang}>RU</div>
    </div>
  )
}

export default Settings
