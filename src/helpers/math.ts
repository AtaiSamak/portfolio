class MathHelpers {
  static getRandomNumber(min: number, max: number, options?: { round?: boolean }): number {
    const randomValue = Math.random() * (max - min) + min
    return options?.round ? Math.round(randomValue) : randomValue
  }
}

export default MathHelpers
