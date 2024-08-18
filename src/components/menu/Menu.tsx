import React, { FC, useEffect, useRef } from 'react'

import classNames from 'classnames'

import MenuButton from '@components/menu/button/MenuButton'

import { ReactComponent as DashedCircle } from '@images/dashed-circle.svg'

import NavigationTypes from '../../types/navigation'
import styles from './Menu.module.scss'

const SECTIONS = [
  {
    label: 'ABOUT',
    section: NavigationTypes.Section.ABOUT,
    position: NavigationTypes.Location.TOP,
  },
  {
    label: 'EDUCATION',
    section: NavigationTypes.Section.EDUCATION,
    position: NavigationTypes.Location.RIGHT,
  },
  {
    label: 'SKILLS',
    section: NavigationTypes.Section.SKILLS,
    position: NavigationTypes.Location.BOTTOM,
  },
  {
    label: 'WORK',
    section: NavigationTypes.Section.WORK,
    position: NavigationTypes.Location.LEFT,
  },
]

type MenuProps = {
  section: NavigationTypes.Section | null
  onChange: (section: NavigationTypes.Section) => void
}

const Menu: FC<MenuProps> = ({ section, onChange }) => {
  const buttonsRef = useRef<HTMLDivElement>(null)
  const previousSection = useRef(section)
  const rotation = useRef(0)

  useEffect(() => {
    if (!buttonsRef.current) {
      return
    } else if (!section) {
      rotation.current = 0
    }
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
    buttonsRef.current.style.transform = `rotate(${rotation.current}deg)`
    previousSection.current = section
  }, [section])

  return (
    <div
      className={classNames(styles.menu, {
        [styles.menuActive]: !!section,
        [styles.menuActiveTop]: section === 'about',
      })}
    >
      <div className={styles.content}>
        <DashedCircle width={450} height={450} />
        <div className={styles.text}>
          ATAI SAMAKOV
          <span>Frontend Developer</span>
        </div>
      </div>
      <div ref={buttonsRef} className={styles.buttons}>
        {SECTIONS.map((item) => (
          <MenuButton
            key={item.section}
            isActive={item.section === section}
            position={item.position}
            onClick={() => onChange(item.section)}
          >
            {item.label}
          </MenuButton>
        ))}
      </div>
    </div>
  )
}

export default Menu
