var helpers = require("./helpers"),
  webpackMerge = require("webpack-merge"),
  ExtractTextPlugin = require("extract-text-webpack-plugin"),
  commonConfig = require("./webpack.common.js"),
  CssSourcemapPlugin = require("css-sourcemaps-webpack-plugin"),
  CopyWebpackPlugin = require("copy-webpack-plugin"),
  HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = webpackMerge(commonConfig, {
  devtool: "source-map",
  output: {
    path: helpers.root("dist"),
    publicPath: "/",
    filename: "[name].[hash].js",
    chunkFilename: "[id].chunk.js"
  },

  plugins: [
    new HtmlWebpackPlugin({
      rootPath: '',
      template: "src/index.ejs"
    }),
    new CssSourcemapPlugin(),
    new ExtractTextPlugin("[name].css")
  ],

  devServer: {
    inline: true,
    open: true,
    hot: true,
    historyApiFallback: true,
    stats: "minimal",
    port: 5000
  }
});
