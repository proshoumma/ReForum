// modules for webpack production configuration
var path = require('path');
var webpack = require('webpack');

// define paths
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');
var mainAppPath = path.resolve(__dirname, 'app', 'index.js');

module.exports = {
  target  : 'web',

  entry: [
    mainAppPath
  ],

  output: {
    filename: 'bundle.js',
    path: buildPath,
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [
          'react-hot',
          'babel-loader',
        ],
        exclude: /node_modules/
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
};
