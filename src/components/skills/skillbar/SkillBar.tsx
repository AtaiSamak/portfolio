import React, { FC } from 'react'

import styles from './SkillBar.module.scss'

type SkillBarProps = {
  label: string
  value: number
  color: string
  className?: string
}

const SkillBar: FC<SkillBarProps> = ({ label, value, className, color }) => {
  return (
    <div className={className}>
      <div className={styles.name}>{label}</div>
      <div className={styles.bar}>
        <div style={{ maxWidth: `${value}%`, backgroundColor: color }} className={styles.barLine}>
          <span style={{ color: color }} className={styles.barValue}>
            {value}%
          </span>
        </div>
      </div>
    </div>
  )
}

export default SkillBar
