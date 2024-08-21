import React, { FC } from 'react'

import classNames from 'classnames'

import Burger from '@components/burger/Burger'
import Resume from '@components/resume/Resume'
import Settings from '@components/settings/Settings'

import styles from './MobileHeader.module.scss'

type MobileHeaderProps = {
  isOpenMenuDelayed: boolean
  isOpenMenu: boolean
  onClickBurger: () => void
}

const MobileHeader: FC<MobileHeaderProps> = ({ isOpenMenu, isOpenMenuDelayed, onClickBurger }) => {
  return (
    <div className={classNames(styles.container, isOpenMenuDelayed && styles.containerOpen)}>
      <Resume className={styles.resume} />
      <div className={styles.right}>
        <Settings className={styles.settings} />
        <Burger isClose={isOpenMenu} onClick={onClickBurger} className={styles.burger} />
      </div>
    </div>
  )
}

export default MobileHeader
