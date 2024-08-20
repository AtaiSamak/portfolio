import React from 'react'
import { useTranslation } from 'react-i18next'

import NavigationTypes from '@customTypes/navigation'
import { ReactComponent as Arrow } from '@icons/download.svg'
import classNames from 'classnames'

import About from '@components/about/About'
import Contacts from '@components/contacts/Contacts'
import Education from '@components/education/Education'
import MenuDesktop from '@components/menu/desktop/MenuDesktop'
import Resume from '@components/resume/Resume'
import Settings from '@components/settings/Settings'
import Skills from '@components/skills/Skills'
import Work from '@components/work/Work'

import styles from './AppDesktop.module.scss'

const AppDesktop = () => {
  const { t } = useTranslation()
  const [section, setSection] = React.useState<NavigationTypes.Section | null>(null)

  return (
    <>
      <div className={styles.app}>
        {section && (
          <div className={styles.back} onClick={() => setSection(null)}>
            <Arrow /> {t('label.menu')}
          </div>
        )}
        <Resume className={styles.resume} />
        <div className={styles.container}>
          <MenuDesktop section={section} onChange={setSection} />
        </div>
        <Contacts className={styles.contacts} />
        <Settings className={styles.settings} />
      </div>
      <div className={classNames(styles.section, section && styles.sectionActive)}>
        {section === NavigationTypes.Section.ABOUT && <About />}
        {section === NavigationTypes.Section.EDUCATION && <Education />}
        {section === NavigationTypes.Section.SKILLS && <Skills />}
        {section === NavigationTypes.Section.WORK && <Work />}
      </div>
    </>
  )
}

export default AppDesktop
