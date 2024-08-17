class WindowHelpers {
  static getWidth() {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  }

  static getHeight() {
    return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
  }
}

export default WindowHelpers
