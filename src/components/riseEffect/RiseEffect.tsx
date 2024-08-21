import React, { FC, useRef } from 'react'
import { Transition } from 'react-transition-group'

import classNames from 'classnames'

import styles from './RiseEffect.module.scss'

type RiseEffectProps = {
  in: boolean
  timeout?: number
  children: React.ReactNode
}

const RiseEffect: FC<RiseEffectProps> = ({ in: inProp, timeout = 500, children }) => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <Transition className={styles.container} in={inProp} nodeRef={ref} timeout={timeout}>
      {(state) => (
        <div
          ref={ref}
          className={classNames(styles.container, state === 'entered' && styles.containerVisible)}
        >
          {state !== 'exited' && children}
        </div>
      )}
    </Transition>
  )
}

export default RiseEffect
