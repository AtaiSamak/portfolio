import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import NavigationTypes from '@customTypes/navigation'

import menuConfig from '@components/menu/Menu.config'

import styles from './MenuMobile.module.scss'

const { sections: SECTIONS } = menuConfig

type MenuMobileProps = {
  onChange: (section: NavigationTypes.Section) => void
}

const MenuMobile: FC<MenuMobileProps> = ({ onChange }) => {
  const { t } = useTranslation()
  return (
    <div className={styles.container}>
      {SECTIONS.map((item, index) => (
        <button key={item.section} className={styles.button} onClick={() => onChange(item.section)}>
          <span style={{ backgroundColor: item.color }} />
          {t(item.label)}
        </button>
      ))}
    </div>
  )
}

export default MenuMobile
