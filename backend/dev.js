/**
 * module dependencies for development
 */
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

/**
 * development configuration
 */
const devConfigs = (app) => {
  // webpack development configuration
  const webpackConfig = require('../config/webpack.dev.config');
  const webpackCompiler = webpack(webpackConfig);

  // apply dev middleware
  app.use(webpackDevMiddleware(webpackCompiler, {
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    stats: true,
  }));

  // apply hot middleware
  app.use(webpackHotMiddleware(webpackCompiler));
};

module.exports = devConfigs;
