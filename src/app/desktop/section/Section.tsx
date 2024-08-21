import React, { FC, useEffect, useState } from 'react'

import NavigationTypes from '@customTypes/navigation'

import About from '@components/about/About'
import Education from '@components/education/Education'
import RiseEffect from '@components/riseEffect/RiseEffect'
import Skills from '@components/skills/Skills'
import Work from '@components/work/Work'

import styles from './Section.module.scss'

const SECTION_RISE_DURATION = 200

type SectionProps = {
  section: NavigationTypes.Section | null
}

const Section: FC<SectionProps> = ({ section }) => {
  const [localSection, setLocalSection] = useState(section)

  useEffect(() => {
    const id = setTimeout(() => setLocalSection(section), SECTION_RISE_DURATION)
    return () => clearTimeout(id)
  }, [section])

  return (
    <div className={styles.section}>
      <RiseEffect
        in={
          localSection === NavigationTypes.Section.ABOUT &&
          section === NavigationTypes.Section.ABOUT
        }
        timeout={SECTION_RISE_DURATION}
      >
        <About />
      </RiseEffect>
      <RiseEffect
        in={
          localSection === NavigationTypes.Section.EDUCATION &&
          section === NavigationTypes.Section.EDUCATION
        }
        timeout={SECTION_RISE_DURATION}
      >
        <Education />
      </RiseEffect>
      <RiseEffect
        in={
          localSection === NavigationTypes.Section.SKILLS &&
          section === NavigationTypes.Section.SKILLS
        }
        timeout={SECTION_RISE_DURATION}
      >
        <Skills />
      </RiseEffect>
      <RiseEffect
        in={
          localSection === NavigationTypes.Section.WORK && section === NavigationTypes.Section.WORK
        }
        timeout={SECTION_RISE_DURATION}
      >
        <Work />
      </RiseEffect>
    </div>
  )
}

export default Section
