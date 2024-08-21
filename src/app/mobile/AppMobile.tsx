import React, { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Transition } from 'react-transition-group'

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
  const ref = useRef<HTMLDivElement>(null)
  const [section, setSection] = useState<NavigationTypes.Section | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleChangeSection = (section: NavigationTypes.Section) => {
    setSection(section)
    setIsMenuOpen(false)
  }

  return (
    <>
      <Transition nodeRef={ref} in={isMenuOpen} timeout={500}>
        {(state) => (
          <div ref={ref}>
            <MobileHeader
              transitionStatus={state}
              isOpenMenu={isMenuOpen}
              onClickBurger={() => setIsMenuOpen(!isMenuOpen)}
            />
            <div
              className={classNames(styles.menu, {
                [styles.menuEntering]: state === 'entering',
                [styles.menuEntered]: state === 'entered',
                [styles.menuExiting]: state === 'exiting',
                [styles.menuExited]: state === 'exited',
              })}
            >
              <div className={styles.container}>
                <MenuMobile transitionStatus={state} onChange={handleChangeSection} />
                <Contacts className={classNames(styles.contacts)} />
              </div>
            </div>
            {state !== 'entered' ? (
              <div
                className={classNames(styles.section, state === 'exited' && styles.sectionEntered)}
              >
                <div className={styles.header}>
                  {t(`menu.${section || NavigationTypes.Section.ABOUT}`)}
                </div>
                {(section === NavigationTypes.Section.ABOUT || section === null) && <About />}
                {section === NavigationTypes.Section.EDUCATION && <Education />}
                {section === NavigationTypes.Section.SKILLS && <Skills />}
                {section === NavigationTypes.Section.WORK && <Work />}
              </div>
            ) : null}
          </div>
        )}
      </Transition>
    </>
  )
}

export default AppMobile
