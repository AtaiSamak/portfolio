import React from 'react'
import { useTranslation } from 'react-i18next'

import { ReactComponent as Arrow } from '@icons/download.svg'
import classNames from 'classnames'

import About from '@components/about/About'
import Contacts from '@components/contacts/Contacts'
import Education from '@components/education/Education'
import Menu from '@components/menu/Menu'
import Resume from '@components/resume/Resume'
import Settings from '@components/settings/Settings'
import Skills from '@components/skills/Skills'
import Work from '@components/work/Work'

import NavigationTypes from '../types/navigation'
import styles from './App.module.scss'
import './App.scss'

const App = () => {
  const { t } = useTranslation()
  const [activeSection, setActiveSection] = React.useState<NavigationTypes.Section | null>(null)

  return (
    <>
      <div className={styles.app}>
        {activeSection && (
          <div className={styles.back} onClick={() => setActiveSection(null)}>
            <Arrow /> {t('label.menu')}
          </div>
        )}
        <Resume />
        <div className={styles.container}>
          <Menu section={activeSection} onChange={setActiveSection} />
        </div>
        <Contacts />
        <Settings />
      </div>
      <div className={classNames(styles.section, activeSection && styles.sectionActive)}>
        {activeSection === NavigationTypes.Section.ABOUT && <About />}
        {activeSection === NavigationTypes.Section.EDUCATION && <Education />}
        {activeSection === NavigationTypes.Section.SKILLS && <Skills />}
        {activeSection === NavigationTypes.Section.WORK && <Work />}
      </div>
    </>
  )
}

export default App
