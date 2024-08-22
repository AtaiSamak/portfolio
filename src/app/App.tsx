import React from 'react'

import AppDesktop from '@app/desktop/AppDesktop'
import AppMobile from '@app/mobile/AppMobile'

import Loader from '@components/loader/Loader'

import useIsMobile from '@hooks/useIsMobile'

// import './App.scss'

const App = () => {
  const isMobile = useIsMobile()

  return (
    <div className={'theme--dark'}>
      {/*{isMobile ? <AppMobile /> : <AppDesktop />}*/}
      {/*<Loader />*/}
    </div>
  )
}

export default App
