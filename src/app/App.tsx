import React, { useEffect, useMemo } from 'react'

import AppDesktop from '@app/desktop/AppDesktop'
import AppMobile from '@app/mobile/AppMobile'

import useIsMobile from '@hooks/useIsMobile'

import './App.scss'

const App = () => {
  const isMobile = useIsMobile()

  useEffect(() => {
    setTimeout(() => {
      setTimeout(() => {
        const loader = document.getElementById('loader')
        loader?.classList.remove('show')
        setTimeout(() => {
          loader?.classList.add('hide')
          setTimeout(() => {
            loader?.remove()
            document.getElementById('loader-script')?.remove()
            document.getElementById('loader-styles')?.remove()
          }, 200)
        }, 600)
      }, 600)
    }, 200)
  }, [])

  return <div className={'theme--dark'}>{isMobile ? <AppMobile /> : <AppDesktop />}</div>
}

export default App
