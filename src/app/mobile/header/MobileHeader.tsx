import React, { FC } from 'react'
import { TransitionStatus } from 'react-transition-group'

import classNames from 'classnames'

import Burger from '@components/burger/Burger'
import Resume from '@components/resume/Resume'
import Settings from '@components/settings/Settings'

import styles from './MobileHeader.module.scss'

type MobileHeaderProps = {
  transitionStatus: TransitionStatus
  isOpenMenu: boolean
  onClickBurger: () => void
}

const MobileHeader: FC<MobileHeaderProps> = ({ transitionStatus, isOpenMenu, onClickBurger }) => {
  return (
    <div className={styles.container}>
      <Resume
        className={classNames(
          styles.resume,
          transitionStatus === 'entered' && styles.resumeEntered,
        )}
      />
      <div className={styles.right}>
        <Settings
          className={classNames(
            styles.settings,
            transitionStatus === 'entered' && styles.settingsEntered,
          )}
        />
        <Burger isClose={isOpenMenu} onClick={onClickBurger} className={styles.burger} />
      </div>
    </div>
  )
}

export default MobileHeader
