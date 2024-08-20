import React, { FC, useCallback, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'

import classNames from 'classnames'

import MenuButton from '@components/menu/button/MenuButton'

import { ReactComponent as DashedCircle } from '@images/dashed-circle.svg'

import NavigationTypes from '../../types/navigation'
import styles from './Menu.module.scss'

const SECTIONS = [
  {
    label: 'menu.about',
    section: NavigationTypes.Section.ABOUT,
    position: NavigationTypes.Location.TOP,
  },
  {
    label: 'menu.education',
    section: NavigationTypes.Section.EDUCATION,
    position: NavigationTypes.Location.RIGHT,
  },
  {
    label: 'menu.skills',
    section: NavigationTypes.Section.SKILLS,
    position: NavigationTypes.Location.BOTTOM,
  },
  {
    label: 'menu.work',
    section: NavigationTypes.Section.WORK,
    position: NavigationTypes.Location.LEFT,
  },
]

type MenuProps = {
  section: NavigationTypes.Section | null
  onChange: (section: NavigationTypes.Section) => void
}

const Menu: FC<MenuProps> = ({ section, onChange }) => {
  const { t } = useTranslation()

  const buttonsRef = useRef<HTMLDivElement>(null)
  const previousSection = useRef(section)
  const rotation = useRef(0)

  const calculateRotation = useCallback((section: NavigationTypes.Section) => {
    if (previousSection.current === null) {
      switch (section) {
        case NavigationTypes.Section.EDUCATION:
          rotation.current = 0
          break
        case NavigationTypes.Section.ABOUT:
          rotation.current = 90
          break
        case NavigationTypes.Section.SKILLS:
          rotation.current = -90
          break
        case NavigationTypes.Section.WORK:
          rotation.current = 180
          break
      }
    } else {
      const prev = SECTIONS.findIndex((item) => item.section === previousSection.current)
      const curr = SECTIONS.findIndex((item) => item.section === section)

      if (prev === 0 && curr === SECTIONS.length - 1) {
        rotation.current = rotation.current + 90
      } else if (prev === SECTIONS.length - 1 && curr === 0) {
        rotation.current = rotation.current - 90
      } else {
        rotation.current =
          prev > curr
            ? rotation.current + 90 * Math.abs(prev - curr)
            : rotation.current - 90 * Math.abs(prev - curr)
      }
    }
    return rotation.current
  }, [])

  const rotateMenu = useCallback((menuRotation: number) => {
    if (buttonsRef.current) {
      buttonsRef.current.style.transform = `rotate(${menuRotation}deg)`
    }
  }, [])

  const rotateButtons = useCallback((menuRotation: number) => {
    if (!buttonsRef.current) return

    const [topButton, rightButton, bottomButton, leftButton] = [
      buttonsRef.current.querySelector(`#menu-button-${NavigationTypes.Location.TOP}`),
      buttonsRef.current.querySelector(`#menu-button-${NavigationTypes.Location.RIGHT}`),
      buttonsRef.current.querySelector(`#menu-button-${NavigationTypes.Location.BOTTOM}`),
      buttonsRef.current.querySelector(`#menu-button-${NavigationTypes.Location.LEFT}`),
    ] as HTMLDivElement[]

    topButton.style.transform = `translate(-50%, -50%) rotate(${menuRotation * -1}deg)`
    rightButton.style.transform = `translate(50%, -50%) rotate(${menuRotation * -1}deg)`
    bottomButton.style.transform = `translate(-50%, 50%) rotate(${menuRotation * -1}deg)`
    leftButton.style.transform = `translate(-50%, -50%) rotate(${menuRotation * -1}deg)`
  }, [])

  useEffect(() => {
    if (!buttonsRef.current) {
      return
    } else if (section) {
      calculateRotation(section)
    } else {
      rotation.current = 0
    }
    rotateMenu(rotation.current)
    rotateButtons(rotation.current)
    previousSection.current = section
  }, [section, calculateRotation, rotateMenu, rotateButtons])

  return (
    <div
      className={classNames(styles.menu, {
        [styles.menuActive]: !!section,
        [styles.menuActiveTop]: section === 'about',
      })}
    >
      <div className={styles.content}>
        <DashedCircle className={styles.dashedCircle} />
        <div className={styles.text}>
          {t('author.fullName')}
          <span>{t('author.specialization')}</span>
        </div>
      </div>
      <div ref={buttonsRef} className={styles.buttons}>
        {SECTIONS.map((item) => (
          <MenuButton
            key={item.section}
            id={`menu-button-${item.position}`}
            isActive={item.section === section}
            position={item.position}
            onClick={() => onChange(item.section)}
          >
            {t(item.label)}
          </MenuButton>
        ))}
      </div>
    </div>
  )
}

export default Menu
