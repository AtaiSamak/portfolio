import React from 'react'

import Contacts from '@components/contacts/Contacts'
import Menu from '@components/menu/Menu'
import Resume from '@components/resume/Resume'

import NavigationTypes from '../types/navigation'
import styles from './App.module.scss'
import './App.scss'

const App = () => {
  const [activeSection, setActiveSection] = React.useState<NavigationTypes.Section | null>(null)

  return (
    <div className={styles.app}>
      <Resume />
      <div className={styles.container}>
        <Menu section={activeSection} onChange={setActiveSection} />
      </div>
      <Contacts />
    </div>
  )
}

export default App
