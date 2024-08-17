import React, { useMemo } from 'react'

import DotsHelpers from '@components/dots/Dots.helpers'

import useParallax from '@hooks/useParallax'
import useWindowSize from '@hooks/useWindowSize'

import styles from './Dots.module.scss'

const Dots = () => {
  const ref = useParallax({ elementsSelector: `.${styles.dot}` })
  const windowSize = useWindowSize()

  const dotsList = useMemo(() => DotsHelpers.getDots(), [windowSize])

  return (
    <div ref={ref}>
      {dotsList.map((item, index) => (
        <div
          key={index}
          className={styles.dot}
          style={{ width: item.size, height: item.size, top: item.top, left: item.left }}
        />
      ))}
    </div>
  )
}

export default Dots
