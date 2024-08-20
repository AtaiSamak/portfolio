import React from 'react'
import { useTranslation } from 'react-i18next'

import educationConfig from '@components/education/Education.config'

import styles from './Education.module.scss'

const Education = () => {
  const { t } = useTranslation()

  return (
    <>
      {educationConfig.map((item, index) => (
        <div key={index} className={styles.container}>
          <div className={styles.header}>
            <div className={styles.name}>
              {t(item.field)}, {t(item.name)}
            </div>
            <div className={styles.date}>{item.date.getFullYear()}</div>
          </div>
          <p className={styles.description}>{t(item.description)}</p>
        </div>
      ))}
    </>
  )
}

export default Education
