import React, { useEffect, useMemo, useRef } from 'react'

import WindowHelpers from '@helpers/window'

import DotsHelpers from '@components/dots/Dots.helpers'

import useWindowSize from '@hooks/useWindowSize'

import styles from './Dots.module.scss'

const Dots = () => {
  const ref = useRef<HTMLDivElement>(null)
  const windowSize = useWindowSize()

  const dotsList = useMemo(() => DotsHelpers.getDots(), [windowSize])

  useEffect(() => {
    const windowWidth = WindowHelpers.getWidth()
    const windowHeight = WindowHelpers.getHeight()

    const parallax = (event: MouseEvent) => {
      const dots = ref.current?.querySelectorAll(`.${styles.dot}`) as NodeListOf<HTMLDivElement>

      dots.forEach((item, i) => {
        const pageX = event.clientX - windowWidth / 2
        const pageY = event.clientY - windowHeight / 2
        item.style.transform =
          'translateX(-' + (50 + pageX / 50) + '%) translateY(-' + (50 + pageY / 50) + '%)'
      })
    }

    document.addEventListener('mousemove', parallax)
    return () => document.removeEventListener('mousemove', parallax)
  }, [dotsList])

  return (
    <div ref={ref}>
      {dotsList.map((item, index) => (
        <div
          data-top={item.top}
          data-left={item.left}
          className={styles.dot}
          key={index}
          style={{ width: item.size, height: item.size, top: item.top, left: item.left }}
        />
      ))}
    </div>
  )
}

export default Dots
