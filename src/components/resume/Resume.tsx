import React from 'react'

import { ReactComponent as Download } from '@icons/download.svg'

import styles from './Resume.module.scss'

const Resume = () => {
  return (
    <div className={styles.resume}>
      Resume <Download width={32} height={32} />
    </div>
  )
}

export default Resume
