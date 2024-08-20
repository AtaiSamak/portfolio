import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { ReactComponent as Download } from '@icons/download.svg'
import classNames from 'classnames'

import styles from './Resume.module.scss'

type ResumeProps = {
  className?: string
}

const Resume: FC<ResumeProps> = ({ className }) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(styles.resume, className)}>
      {t('label.resume')} <Download className={styles.download} />
    </div>
  )
}

export default Resume
