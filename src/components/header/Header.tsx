import React from 'react'
import styles from './Header.module.scss'
import backgroundSrc from '@images/header.webp'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={'container'}>
        <div className={styles.headerWrapper}>
          <h1 className={styles.title}>I am Atai Samak</h1>
          <h2 className={styles.typewriter}>Frontend developer</h2>
        </div>
        <img src={backgroundSrc} className={styles.headerBackground} />
      </div>
    </header>
  )
}

export default Header
