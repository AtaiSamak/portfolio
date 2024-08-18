import React from 'react'
import { useTranslation } from 'react-i18next'

import { ReactComponent as Download } from '@icons/download.svg'

import styles from './Resume.module.scss'

const Resume = () => {
  const { t } = useTranslation()
  return (
    <div className={styles.resume}>
      {t('label.resume')} <Download width={32} height={32} />
    </div>
  )
}

export default Resume
