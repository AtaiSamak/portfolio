import React from 'react'

import styles from './NavigationButtons.module.scss'

const NavigationButtons = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>Home</li>
      <li className={styles.listItem}>About</li>
      <li className={styles.listItem}>Services</li>
      <li className={styles.listItem}>Work</li>
      <li className={styles.listItem}>Contact</li>
    </ul>
  )
}

export default NavigationButtons
