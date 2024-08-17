import React from 'react'

import Contacts from '@components/contacts/Contacts'
import Menu from '@components/menu/Menu'
import Resume from '@components/resume/Resume'

import styles from './App.module.scss'
import './App.scss'

const App = () => {
  return (
    <div className={styles.app}>
      <Resume />
      <Menu />
      <Contacts />
    </div>
  )
}

export default App
