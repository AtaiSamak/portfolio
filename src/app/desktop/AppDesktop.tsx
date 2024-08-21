import React from 'react'
import { useTranslation } from 'react-i18next'

import Section from '@app/desktop/section/Section'
import NavigationTypes from '@customTypes/navigation'
import { ReactComponent as Arrow } from '@icons/download.svg'
import classNames from 'classnames'

import Contacts from '@components/contacts/Contacts'
import MenuDesktop from '@components/menu/desktop/MenuDesktop'
import Resume from '@components/resume/Resume'
import Settings from '@components/settings/Settings'

import styles from './AppDesktop.module.scss'

const AppDesktop = () => {
  const { t } = useTranslation()
  const [section, setSection] = React.useState<NavigationTypes.Section | null>(null)

  return (
    <>
      <div className={styles.app}>
        <div
          className={classNames(styles.back, section && styles.backVisible)}
          onClick={() => setSection(null)}
        >
          <Arrow /> {t('label.menu')}
        </div>
        <Resume className={styles.resume} />
        <div className={styles.container}>
          <MenuDesktop section={section} onChange={setSection} />
        </div>
        <Contacts className={styles.contacts} />
        <Settings className={styles.settings} />
      </div>
      <Section section={section} />
    </>
  )
}

export default AppDesktop
