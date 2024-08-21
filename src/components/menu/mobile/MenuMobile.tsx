import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { TransitionStatus } from 'react-transition-group'

import NavigationTypes from '@customTypes/navigation'
import classNames from 'classnames'

import menuConfig from '@components/menu/Menu.config'

import styles from './MenuMobile.module.scss'

const { sections: SECTIONS } = menuConfig

type MenuMobileProps = {
  onChange: (section: NavigationTypes.Section) => void
  transitionStatus: TransitionStatus
}

const MenuMobile: FC<MenuMobileProps> = ({ transitionStatus, onChange }) => {
  const { t } = useTranslation()
  return (
    <div className={styles.container}>
      {SECTIONS.map((item, index) => (
        <div
          key={item.section}
          className={classNames(
            styles.wrapper,
            transitionStatus === 'entered' && styles.wrapperEntered,
          )}
        >
          <button
            style={{ transition: `transform 0.${index + 2}s ease-in-out` }}
            className={styles.button}
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
