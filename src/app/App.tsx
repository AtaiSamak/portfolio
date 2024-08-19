import React from 'react'

import classNames from 'classnames'

import About from '@components/about/About'
import Contacts from '@components/contacts/Contacts'
import Education from '@components/education/Education'
import Menu from '@components/menu/Menu'
import Resume from '@components/resume/Resume'
import Skills from '@components/skills/Skills'
import Work from '@components/work/Work'

import NavigationTypes from '../types/navigation'
import styles from './App.module.scss'
import './App.scss'

const App = () => {
  const [activeSection, setActiveSection] = React.useState<NavigationTypes.Section | null>(null)

  return (
    <>
      <div className={styles.app}>
        <Resume />
        <div className={styles.container}>
          <Menu section={activeSection} onChange={setActiveSection} />
        </div>
        <Contacts />
      </div>
      <div className={classNames(styles.section, activeSection && styles.sectionActive)}>
        <div className={styles.sectionBox}>
          {activeSection === NavigationTypes.Section.ABOUT && <About />}
          {activeSection === NavigationTypes.Section.EDUCATION && <Education />}
          {activeSection === NavigationTypes.Section.SKILLS && <Skills />}
          {activeSection === NavigationTypes.Section.WORK && <Work />}
        </div>
      </div>
    </>
  )
}

export default App
