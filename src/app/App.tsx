import React from 'react'

import AppDesktop from '@app/desktop/AppDesktop'
import AppMobile from '@app/mobile/AppMobile'

import useIsMobile from '@hooks/useIsMobile'

import './App.scss'

const App = () => {
  const isMobile = useIsMobile()

  return <div className={'theme--dark'}>{isMobile ? <AppMobile /> : <AppDesktop />}</div>
}

export default App
