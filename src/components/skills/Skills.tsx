import React from 'react'

import SkillBar from '@components/skillbar/SkillBar'
import skillsConfig from '@components/skills/Skills.config'
import SkillBox from '@components/skills/skillbox/SkillBox'

import styles from './Skills.module.scss'

const Skills = () => {
  return (
    <>
      {skillsConfig.bars.map((item, index) => (
        <SkillBar
          key={index}
          className={styles.skillBar}
          label={item.name}
          value={item.value}
          color={item.color}
        />
      ))}
      <div className={styles.skillBoxes}>
        {skillsConfig.boxes.map((item, index) => (
          <SkillBox key={index}>{item}</SkillBox>
        ))}
      </div>
    </>
  )
}

export default Skills
