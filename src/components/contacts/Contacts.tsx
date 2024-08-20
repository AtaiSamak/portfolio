import React, { FC } from 'react'

import { ReactComponent as Email } from '@icons/email.svg'
import { ReactComponent as LinkedIn } from '@icons/linkedin.svg'
import { ReactComponent as Telegram } from '@icons/telegram.svg'
import classNames from 'classnames'

import contactsConfig from '@components/contacts/Contacts.config'

import styles from './Contacts.module.scss'

type ContactsProps = {
  className?: string
}

const Contacts: FC<ContactsProps> = ({ className }) => {
  return (
    <div className={classNames(styles.container, className)}>
      <a href={contactsConfig.linkedIn} target="_blank" rel="noreferrer" className={styles.link}>
        <LinkedIn />
      </a>
      <a href={contactsConfig.telegram} target="_blank" rel="noreferrer" className={styles.link}>
        <Telegram />
      </a>
      <a href={`mailto:${contactsConfig.email}`} className={styles.link}>
        <Email />
      </a>
    </div>
  )
}

export default Contacts
