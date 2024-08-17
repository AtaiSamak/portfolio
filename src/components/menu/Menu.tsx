import React from 'react'

import MenuButton from '@components/menu/button/MenuButton'

import { ReactComponent as DashedCircle } from '@images/dashed-circle.svg'

import styles from './Menu.module.scss'

const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.content}>
        <DashedCircle width={450} height={450} />
        <div className={styles.text}>
          ATAI SAMAKOV
          <span>Frontend Developer</span>
        </div>
      </div>
      <MenuButton position={'top'}>WORK</MenuButton>
      <MenuButton position={'right'}>ABOUT</MenuButton>
      <MenuButton position={'bottom'}>EDUCATION</MenuButton>
      <MenuButton position={'left'}>SKILLS</MenuButton>
    </div>
  )
}

export default Menu
