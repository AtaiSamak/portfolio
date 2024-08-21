import React, { FC, useEffect, useState } from 'react'

import { ReactComponent as Moon } from '@icons/moon.svg'
import { ReactComponent as Sun } from '@icons/sun.svg'
import classNames from 'classnames'

import styles from './Settings.module.scss'

const themes = {
  DARK: 'dark',
  LIGHT: 'light',
}

type SettingsProps = {
  className?: string
}

const Settings: FC<SettingsProps> = ({ className }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || themes.LIGHT)

  const onChangeTheme = () => {
    const newTheme = theme === themes.LIGHT ? themes.DARK : themes.LIGHT
    localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }

  useEffect(() => {
    console.log('hi')
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <div className={classNames(styles.settings, className)}>
      <div onClick={onChangeTheme} className={styles.theme}>
        <div
          className={classNames(styles.themeWrapper, {
            [styles.themeWrapperDark]: theme === themes.DARK,
            [styles.themeWrapperLight]: theme === themes.LIGHT,
          })}
        >
          <Moon className={styles.moon} />
          <Sun className={styles.sun} />
        </div>
      </div>
      <div className={styles.lang}>RU</div>
    </div>
  )
}

export default Settings
