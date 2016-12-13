// modules required for development
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var webpackConfig = require('./webpack.dev.config.js');
var webpackCompiler = webpack(webpackConfig);

module.exports = function(app) {
  // apply dev middleware
  app.use(webpackDevMiddleware(webpackCompiler, {
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    stats: true
  }));

  // apply hot middleware
  app.use(webpackHotMiddleware(webpackCompiler));
}
