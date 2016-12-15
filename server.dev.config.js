// modules required for development
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const webpackConfig = require('./webpack.dev.config.js');
const webpackCompiler = webpack(webpackConfig);

module.exports = (app) => {
  // apply dev middleware
  app.use(webpackDevMiddleware(webpackCompiler, {
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    stats: true
  }));

  // apply hot middleware
  app.use(webpackHotMiddleware(webpackCompiler));
}
