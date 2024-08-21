import React, { FC } from 'react'

import classNames from 'classnames'

import Burger from '@components/burger/Burger'
import Resume from '@components/resume/Resume'
import Settings from '@components/settings/Settings'

import styles from './MobileHeader.module.scss'

type MobileHeaderProps = {
  isOpenMenu: boolean
  onClickBurger: () => void
}

const MobileHeader: FC<MobileHeaderProps> = ({ isOpenMenu, onClickBurger }) => {
  return (
    <div className={styles.container}>
      <Resume className={styles.resume} />
      <div className={styles.right}>
        <Settings className={styles.settings} />
        <Burger isClose={isOpenMenu} onClick={onClickBurger} className={styles.burger} />
      </div>
    </div>
  )
}

export default MobileHeader
