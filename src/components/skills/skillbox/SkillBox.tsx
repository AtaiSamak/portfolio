import React, { FC } from 'react'

import styles from './SkillBox.module.scss'

type SkillBoxProps = {
  children: React.ReactNode
}

const SkillBox: FC<SkillBoxProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}

export default SkillBox
