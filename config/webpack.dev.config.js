/**
 * module dependencies for webpack dev configuration
 */
const path = require('path');
const webpack = require('webpack');

// define paths
const nodeModulesPath = path.resolve(__dirname, '../node_modules');
const buildPath = path.resolve(__dirname, '../public', 'build');
const mainAppPath = path.resolve(__dirname, '../frontend', 'App', 'index.js');

/**
 * webpack development configuration
 */
module.exports = {
  target  : 'web',
  devtool: 'inline-source-map',

  entry: [
    'webpack-hot-middleware/client',
    mainAppPath
  ],

  output: {
    filename: 'bundle.js',
    path: buildPath,
    publicPath: '/build/'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'react-hot', 'babel-loader' ],
        exclude: [nodeModulesPath]
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        ],
      },
      { test: /\.(png|jpg)$/, loader: 'url?limit=8192' }
    ],
  },

  resolve : {
    extensions: ['', '.js', '.css']
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
