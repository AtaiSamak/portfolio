import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import NavigationTypes from '@customTypes/navigation'
import classNames from 'classnames'

import About from '@components/about/About'
import Contacts from '@components/contacts/Contacts'
import Education from '@components/education/Education'
import MenuMobile from '@components/menu/mobile/MenuMobile'
import MobileHeader from '@components/mobile/header/MobileHeader'
import Skills from '@components/skills/Skills'
import Work from '@components/work/Work'

import styles from './AppMobile.module.scss'

const AppMobile = () => {
  const { t } = useTranslation()
  const [section, setSection] = useState<NavigationTypes.Section | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMenuOpenDelayed, setIsMenuOpenDelayed] = useState(isMenuOpen)

  useEffect(() => {
    const id = setTimeout(() => {
      setIsMenuOpenDelayed(isMenuOpen)
    }, 150)
    return () => clearTimeout(id)
  }, [isMenuOpen])

  const handleChangeSection = (section: NavigationTypes.Section) => {
    setSection(section)
    setIsMenuOpen(false)
  }

  return (
    <>
      <div className={classNames(styles.menu, isMenuOpen && styles.menuOpen)}>
        <MobileHeader
          isOpenMenuDelayed={isMenuOpenDelayed}
          isOpenMenu={isMenuOpen}
          onClickBurger={() => setIsMenuOpen(!isMenuOpen)}
        />
        <div className={styles.container}>
          <MenuMobile onChange={handleChangeSection} isVisible={isMenuOpenDelayed} />
          <Contacts
            className={classNames(styles.contacts, isMenuOpenDelayed && styles.contactsOpen)}
          />
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.header}>{t(`menu.${section || NavigationTypes.Section.ABOUT}`)}</div>
        {(section === NavigationTypes.Section.ABOUT || section === null) && <About />}
        {section === NavigationTypes.Section.EDUCATION && <Education />}
        {section === NavigationTypes.Section.SKILLS && <Skills />}
        {section === NavigationTypes.Section.WORK && <Work />}
      </div>
    </>
  )
}

export default AppMobile
