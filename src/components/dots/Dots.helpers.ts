import MathHelpers from '@helpers/math'
import WindowHelpers from '@helpers/window'

import DotsTypes from '@components/dots/Dots.types'

const DOTS_COUNT = 50
const DOTS_SIZES = [5, 10, 15, 20, 25]

class DotsHelpers {
  static getDots(): DotsTypes.Dot[] {
    const [width, height] = [WindowHelpers.getWidth(), WindowHelpers.getHeight()]

    return Array.from({ length: DOTS_COUNT }).map(() => ({
      size: `${DOTS_SIZES[MathHelpers.getRandomNumber(0, DOTS_SIZES.length, { round: true })]}px`,
      top: `${MathHelpers.getRandomNumber(0, height)}px`,
      left: `${MathHelpers.getRandomNumber(0, width)}px`,
    }))
  }
}

export default DotsHelpers
