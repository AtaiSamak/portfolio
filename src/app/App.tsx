import React from 'react'

import AppDesktop from '@app/desktop/AppDesktop'
import AppMobile from '@app/mobile/AppMobile'

import useIsMobile from '@hooks/useIsMobile'

import './App.scss'

const App = () => {
  const isMobile = useIsMobile()

  return isMobile ? <AppMobile /> : <AppDesktop />
}

export default App
