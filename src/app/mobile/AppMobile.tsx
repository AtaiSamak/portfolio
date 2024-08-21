import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import MobileHeader from '@app/mobile/header/MobileHeader'
import NavigationTypes from '@customTypes/navigation'
import classNames from 'classnames'

import About from '@components/about/About'
import Contacts from '@components/contacts/Contacts'
import Education from '@components/education/Education'
import MenuMobile from '@components/menu/mobile/MenuMobile'
import Skills from '@components/skills/Skills'
import Work from '@components/work/Work'

import styles from './AppMobile.module.scss'

const AppMobile = () => {
  const { t } = useTranslation()
  const [section, setSection] = useState<NavigationTypes.Section | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleChangeSection = (section: NavigationTypes.Section) => {
    setSection(section)
    setIsMenuOpen(false)
  }

  return (
    <>
      <MobileHeader isOpenMenu={isMenuOpen} onClickBurger={() => setIsMenuOpen(!isMenuOpen)} />
      {isMenuOpen ? (
        <div className={classNames(styles.menu)}>
          <div className={styles.container}>
            <MenuMobile onChange={handleChangeSection} />
            <Contacts className={classNames(styles.contacts)} />
          </div>
        </div>
      ) : (
        <div className={styles.section}>
          <div className={styles.header}>
            {t(`menu.${section || NavigationTypes.Section.ABOUT}`)}
          </div>
          {(section === NavigationTypes.Section.ABOUT || section === null) && <About />}
          {section === NavigationTypes.Section.EDUCATION && <Education />}
          {section === NavigationTypes.Section.SKILLS && <Skills />}
          {section === NavigationTypes.Section.WORK && <Work />}
        </div>
      )}
    </>
  )
}

export default AppMobile
