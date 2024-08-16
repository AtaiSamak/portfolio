const path = require('path')

const DOT_IN_START = /^\./

const getWebpackAlias = (appPath, pathsConfig = 'tsconfig.paths.json') => {
  let result = {}
  const configFile = require(path.resolve(appPath, pathsConfig))

  for (let [shortcut, array] of Object.entries(configFile.compilerOptions.paths)) {
    shortcut = shortcut.replace('/*', '')
    if (result[shortcut]) {
      return
    }

    result[shortcut] = []
    array.forEach((value) => {
      value = value.replace('*', '')
      if (configFile.compilerOptions.baseUrl) {
        value = value.replace(DOT_IN_START, configFile.compilerOptions.baseUrl)
      }
      result[shortcut].push(path.resolve(appPath, value))
    })
  }

  return result
}

module.exports = {
  webpack: {
    alias: getWebpackAlias(__dirname),
  },
}
