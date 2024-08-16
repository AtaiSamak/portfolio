import React, { useState } from 'react'
import styles from './Navigation.module.scss'
import NavigationButtons from './buttons/NavigationButtons'
import NavigationHamburger from './hamburger/NavigationHamburger'
import useMobileDetect from '@hooks/useMobileDetect'
import classNames from 'classnames'

const Navigation = () => {
  const isMobile = useMobileDetect()
  const [isActive, setIsActive] = useState(false)

  return (
    <nav className={classNames(styles.navbar, isActive && styles.navbarActive)}>
      <div className={'container'}>
        <div className={styles.content}>
          <h1 className={styles.title}>AtaiSamak</h1>
          {!isMobile && <NavigationButtons />}
          <NavigationHamburger
            onChangeIsActive={() => setIsActive(!isActive)}
            isActive={isActive}
          />
        </div>
        <div className={styles.items}>
          <NavigationButtons />
        </div>
      </div>
    </nav>
  )
}

export default Navigation
