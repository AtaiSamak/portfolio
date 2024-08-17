import React from 'react'

import Dots from '@components/dots/Dots'
import Menu from '@components/menu/Menu'

import styles from './App.module.scss'
import './App.scss'

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.background}>
        <Dots />
      </div>
      <Menu />
    </div>
  )
}

export default App
