import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import LangHelpers from '@helpers/lang'
import { ReactComponent as Download } from '@icons/download.svg'
import classNames from 'classnames'

import styles from './Resume.module.scss'
import resumeEN from './files/resume_en.pdf'
import resumeRU from './files/resume_ru.pdf'

const resume = {
  ru: resumeRU,
  en: resumeEN,
}

type ResumeProps = {
  className?: string
}

const Resume: FC<ResumeProps> = ({ className }) => {
  const { t } = useTranslation()

  const lang = LangHelpers.getLanguage()

  return (
    <a
      href={resume[lang]}
      download={lang === 'en' ? 'Resume' : 'Резюме'}
      target={'_blank'}
      className={classNames(styles.resume, className)}
      rel="noreferrer"
    >
      {t('label.resume')} <Download className={styles.download} />
    </a>
  )
}

export default Resume
