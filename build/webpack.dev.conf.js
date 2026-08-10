var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
var enableHotReload = process.env.TICKET_PREVIEW_STABLE !== '1'

// add hot-reload related code to entry chunks
if (enableHotReload) {
  Object.keys(baseWebpackConfig.entry).forEach(function (name) {
    baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
  })
}

var plugins = [
  new webpack.DefinePlugin({
    'process.env': config.dev.env
  }),
  new webpack.NoEmitOnErrorsPlugin(),
  // https://github.com/ampedandwired/html-webpack-plugin
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'index.html',
    inject: true
  }),
  new FriendlyErrorsPlugin({
    clearConsole: false
  })
]

if (enableHotReload) {
  plugins.splice(1, 0, new webpack.HotModuleReplacementPlugin())
}

module.exports = merge(baseWebpackConfig, {
  output: {
    // Use a unique bundle URL for remote previews so intermediary caches cannot
    // pair a stale app bundle with the current compiler state.
    filename: enableHotReload ? '[name].js' : '[name].[hash].js'
  },
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: plugins
})
