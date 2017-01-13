/**
 * module dependencies for webpack dev configuration
 */
const path = require('path');
const webpack = require('webpack');

// define paths
const nodeModulesPath = path.resolve(__dirname, '../node_modules');
const buildPath = path.resolve(__dirname, '../public', 'build');
const mainAppPath = path.resolve(__dirname, '../frontend', 'App', 'index.js');
const sharedStylesPath = path.resolve(__dirname, '../frontend', 'SharedStyles');
const componentsPath = path.resolve(__dirname, '../frontend', 'Components');
const containersPath = path.resolve(__dirname, '../frontend', 'Containers');
const viewsPath = path.resolve(__dirname, '../frontend', 'Views');

/**
 * webpack development configuration
 */
module.exports = {
  target  : 'web',
  devtool: 'inline-source-map',

  entry: [
    'webpack-hot-middleware/client',
    mainAppPath,
  ],

  output: {
    filename: 'bundle.js',
    path: buildPath,
    publicPath: '/build/',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'react-hot', 'babel-loader' ],
        exclude: [nodeModulesPath],
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader?sourceMap=inline',
        ],
      },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
      { test: /\.svg$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
    ],
  },

  postcss: [ require('autoprefixer'), require('postcss-nesting') ],

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],

  resolve : {
    extensions: ['', '.js', '.css'],
    alias: {
      SharedStyles: sharedStylesPath,
      Components: componentsPath,
      Containers: containersPath,
      Views: viewsPath,
    },
  },
};
