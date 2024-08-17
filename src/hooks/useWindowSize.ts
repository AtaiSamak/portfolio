import { useEffect, useState } from 'react'

import WindowHelpers from '@helpers/window'

const useWindowSize = () => {
  const [size, setSize] = useState({
    width: WindowHelpers.getWidth(),
    height: WindowHelpers.getHeight(),
  })

  useEffect(() => {
    const onResize = () => {
      setSize({ width: WindowHelpers.getWidth(), height: WindowHelpers.getHeight() })
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return size
}

export default useWindowSize
