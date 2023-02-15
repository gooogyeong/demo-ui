const path = require('path')
const { getLoader, loaderByName } = require('@craco/craco')

const packages = []
packages.push(path.join(__dirname, "../button/src"))

module.exports = {
  webpack: {
    configure: (webpackConfig, arg) => {
      const { isFound, match } = getLoader(
        webpackConfig,
        loaderByName('babel-loader')
      ) // get loader from cra 
      if(isFound) {
        const include = Array.isArray(match.loader.include) 
        ? match.loader.include
        : [match.loader.include]

        match.loader.include = include.concat(packages)

        return webpackConfig
      }
    }
  }
}