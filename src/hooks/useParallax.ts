import { DependencyList, useEffect, useRef } from 'react'

import WindowHelpers from '@helpers/window'

const useParallax = (
  {
    intensity = 50,
    elementsSelector = null,
  }: { intensity?: number; elementsSelector?: string | null } | undefined = {},
  deps: DependencyList | undefined = [],
) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const windowWidth = WindowHelpers.getWidth()
    const windowHeight = WindowHelpers.getHeight()

    const parallax = (event: MouseEvent) => {
      const pageX = event.clientX - windowWidth / 2
      const pageY = event.clientY - windowHeight / 2

      if (elementsSelector) {
        const items = ref.current?.querySelectorAll(elementsSelector) as NodeListOf<HTMLDivElement>

        items.forEach((item) => {
          item.style.transform =
            'translateX(-' +
            (50 + pageX / intensity) +
            '%) translateY(-' +
            (50 + pageY / intensity) +
            '%)'
        })
      } else if (ref.current) {
        ref.current.style.transform =
          'translateX(-' +
          (50 + pageX / intensity) +
          '%) translateY(-' +
          (50 + pageY / intensity) +
          '%)'
      }
    }

    document.addEventListener('mousemove', parallax)
    return () => document.removeEventListener('mousemove', parallax)
  }, deps)

  return ref
}

export default useParallax
