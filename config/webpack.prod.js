var helpers = require("./helpers"),
  webpack = require("webpack"),

  webpackMerge = require("webpack-merge"),
  ExtractTextPlugin = require("extract-text-webpack-plugin"),
  CopyWebpackPlugin = require("copy-webpack-plugin"),
  commonConfig = require("./webpack.common.js"),
  HtmlWebpackPlugin = require("html-webpack-plugin");


const ENV = process.env.NODE_ENV = process.env.ENV = "production";

//   path : helpers.root("dist"),
module.exports = webpackMerge(commonConfig, {
  devtool: "source-map",

  output: {
    path: helpers.root("dist"),
    publicPath: "/",
    filename: "[name].[hash].js",
    chunkFilename: "[id].[hash].chunk.js"
  },

  plugins: [
    new HtmlWebpackPlugin({
      rootPath: '',
      template: "src/index.ejs"
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ 
      compress: {
        warnings: false
      },
      mangle: {
        keep_fnames: true
      }
    }),
    new ExtractTextPlugin("[name].[hash].css"),
    new webpack.DefinePlugin({
      "process.env": {
        "ENV": JSON.stringify(ENV)
      }
    })
  ]
});
