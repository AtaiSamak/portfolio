import React from 'react'

import { ReactComponent as Email } from '@icons/email.svg'
import { ReactComponent as LinkedIn } from '@icons/linkedin.svg'
import { ReactComponent as Telegram } from '@icons/telegram.svg'

import styles from './Contacts.module.scss'

const Contacts = () => {
  return (
    <div className={styles.container}>
      <LinkedIn className={styles.icon} />
      <Telegram className={styles.icon} />
      <Email className={styles.icon} />
    </div>
  )
}

export default Contacts
