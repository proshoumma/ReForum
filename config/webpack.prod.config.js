/**
 * module dependencies for webpack production configuration
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
 * webpack production configuration
 */
module.exports = {
  target  : 'web',

  entry: [
    mainAppPath,
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
        exclude: [nodeModulesPath],
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        ],
      },
      { test: /\.(png|jpg)$/, loader: 'url?limit=8192' },
    ],
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ],

  resolve: {
    extensions: ['', '.js', '.css'],
    alias: {
      SharedStyles: sharedStylesPath,
      Components: componentsPath,
      Containers: containersPath,
      Views: viewsPath,
    },
  },

  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
};
