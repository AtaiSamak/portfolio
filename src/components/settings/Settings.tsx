import React, { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { ReactComponent as Moon } from '@icons/moon.svg'
import { ReactComponent as Sun } from '@icons/sun.svg'
import classNames from 'classnames'

import SettingsHelpers from '@components/settings/Settings.helpers'

import styles from './Settings.module.scss'

const themes = {
  DARK: 'dark',
  LIGHT: 'light',
}

type SettingsProps = {
  className?: string
}

const Settings: FC<SettingsProps> = ({ className }) => {
  const { i18n } = useTranslation()
  const [theme, setTheme] = useState(localStorage.getItem('theme') || themes.LIGHT)

  const lang = SettingsHelpers.getLanguage()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang)
  }, [lang])

  const onChangeTheme = () => {
    const newTheme = theme === themes.LIGHT ? themes.DARK : themes.LIGHT
    localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }

  const onChangeLang = () => {
    const newLang = lang === 'en' ? 'ru' : 'en'
    i18n.changeLanguage(newLang)
  }

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
      <div onClick={onChangeLang} className={styles.lang}>
        {lang === 'en' ? 'RU' : 'EN'}
      </div>
    </div>
  )
}

export default Settings
