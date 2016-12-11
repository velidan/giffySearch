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
    new webpack.optimize.CommonsChunkPlugin({
        children: true,
        async: true,
    }),
    new webpack.optimize.UglifyJsPlugin({ 
      mangle: {
        keep_fnames: true
      },
      beautify: false,
      comments: false,
      compress: {
          sequences     : true,
          booleans      : true,
          loops         : true,
          unused      : true,
          warnings    : false,
          drop_console: true,
          unsafe      : true
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin("[name].css"),
    new webpack.DefinePlugin({
      "process.env": {
        "ENV": JSON.stringify(ENV)
      }
    })
  ]
});
