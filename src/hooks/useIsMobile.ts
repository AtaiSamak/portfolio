import useWindowSize from '@hooks/useWindowSize'

const useIsMobile = () => {
  const size = useWindowSize()

  return size.width <= 768
}

export default useIsMobile
