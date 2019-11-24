/* eslint-disable @typescript-eslint/no-var-requires,no-param-reassign,@typescript-eslint/explicit-function-return-type */
const cloneDeep = require('lodash.clonedeep')
// const utils = require('@docusaurus/core/lib/webpack/utils') // Method 2

module.exports = function webpackConfig() {
  // Merge defaults with user-defined options.
  return {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    configureWebpack(config, isServer) {
      // METHOD 1 - Create a loader by cloning .jsx config
      // Config is created in @docusaurus/core/lib/webpack/base.js
      const babelJsxRule = config.module.rules.find(
        rule => String(rule.test) === String(/\.jsx?$/),
      )
      const babelLoader = cloneDeep(babelJsxRule)
      babelLoader.test = /\.tsx?$/
      babelLoader.exclude = '/node_modules/'
      babelLoader.use[1].options.presets.push('@babel/typescript')
      babelLoader.use[1].options.plugins = [
        ...babelLoader.use[1].options.plugins,
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-nullish-coalescing-operator',
        '@babel/plugin-proposal-numeric-separator',
      ]
      config.module.rules.push(babelLoader)

      // ---------------------------------------------------
      // METHOD 2 - Create a loader based on the .jsx loader
      // const babelLoader = utils.getBabelLoader(isServer)
      // babelLoader.options.presets.push('@babel/typescript')

      // Based on @docusaurus/core/lib/webpack/base.js
      // .jsx loader
      // config.module.rules.push({
      //   test: /\.tsx?$/,
      //   exclude: /node_modules/,
      //   use: [utils.getCacheLoader(isServer), babelLoader].filter(Boolean),
      // })

      // ----------------------------------------------------
      // Load tsx and ts files by default
      config.resolve.extensions = [
        '.wasm',
        '.mjs',
        '.js',
        '.json',
        '.ts',
        '.tsx',
      ]
    },
  }
}
