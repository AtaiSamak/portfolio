import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import NavigationTypes from '@customTypes/navigation'
import classNames from 'classnames'

import menuConfig from '@components/menu/Menu.config'

import styles from './MenuMobile.module.scss'

const { sections: SECTIONS } = menuConfig

type MenuMobileProps = {
  onChange: (section: NavigationTypes.Section) => void
  isVisible: boolean
}

const MenuMobile: FC<MenuMobileProps> = ({ onChange, isVisible }) => {
  const { t } = useTranslation()
  return (
    <div className={styles.container}>
      {SECTIONS.map((item, index) => (
        <div key={item.section} className={styles.wrapper}>
          <button
            className={classNames(styles.button, isVisible && styles.buttonVisible)}
            style={{ transition: `transform 0.${index + 2}s ease-in-out` }}
            onClick={() => onChange(item.section)}
          >
            <span style={{ backgroundColor: item.color }} />
            {t(item.label)}
          </button>
        </div>
      ))}
    </div>
  )
}

export default MenuMobile
