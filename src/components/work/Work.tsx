import React, { Fragment } from 'react'
import { Trans, useTranslation } from 'react-i18next'

import DateHelpers from '@helpers/date'

import workConfig from '@components/work/Work.config'

import styles from './Work.module.scss'

const Work = () => {
  const { t } = useTranslation()
  return (
    <>
      {workConfig.map((item, index) => (
        <div className={styles.work} key={index}>
          <div className={styles.header}>
            <div className={styles.name}>
              {t(item.companyName)} | {t(item.companyLocation)}
            </div>
            <div className={styles.date}>
              {DateHelpers.formatDate(item.startDate)} -{' '}
              {item.finishDate ? DateHelpers.formatDate(item.finishDate) : t('label.present')}
            </div>
          </div>

          {item.descriptions.map((item, index) => {
            return (
              <Fragment key={index}>
                {item.name ? (
                  <div className={styles.projectName}>
                    {t('label.project')}
                    {':  '}
                    {item.link ? (
                      <a
                        className={styles.projectLink}
                        href={item.link}
                        rel="noreferrer"
                        target={'_blank'}
                      >
                        {t(item.name)}
                      </a>
                    ) : (
                      t(item.name)
                    )}
                  </div>
                ) : null}
                <div className={styles.description}>
                  <Trans
                    i18nKey={item.description}
                    // eslint-disable-next-line react/jsx-key
                    components={item.descriptionLinks ? [<p />, ...item.descriptionLinks] : [<p />]}
                  />
                </div>
              </Fragment>
            )
          })}
        </div>
      ))}
    </>
  )
}

export default Work
