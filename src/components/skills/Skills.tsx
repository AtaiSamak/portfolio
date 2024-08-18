import React from 'react'

import SkillBar from '@components/skillbar/SkillBar'
import skillsConfig from '@components/skills/Skills.config'

import styles from './Skills.module.scss'

const Skills = () => {
  return (
    <div>
      {skillsConfig.map((item, index) => (
        <SkillBar
          key={index}
          className={styles.skillBar}
          label={item.name}
          value={item.value}
          color={item.color}
        />
      ))}
    </div>
  )
}

export default Skills
