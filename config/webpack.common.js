var path = require('path');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

var webpack = require("webpack"),
  helpers = require("./helpers"),
  glob = require("glob"),

  HtmlWebpackPlugin = require("html-webpack-plugin"),
  ExtractTextPlugin = require("extract-text-webpack-plugin"),
  CopyWebpackPlugin = require("copy-webpack-plugin"),

  srcName = "src";

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    'babel-polyfill',
    helpers.root(srcName, "index.js")
  ],
  eslint: {
    configFile: '.eslintrc',
    failOnWarning: false,
    failOnError: false
  },
  module: {
    preLoaders: [ 
      {
        test: /\.js$/,
        loaders: ['eslint'],
        include: [
          helpers.root(srcName)
        ],
      }
    ],
    loaders: [
      {
        loaders: ['babel-loader'],
        include: [
          helpers.root(srcName)
        ],
        test: /\.js$/,
      },
      {
        test:   /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      }
    ]
  },
  postcss: function () {
    return [autoprefixer, precss];
  }
}
