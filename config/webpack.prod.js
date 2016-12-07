var helpers = require("./helpers"),
  webpack = require("webpack"),

  webpackMerge = require("webpack-merge"),
  ExtractTextPlugin = require("extract-text-webpack-plugin"),
  StringReplacePlugin = require("string-replace-webpack-plugin"),
  CopyWebpackPlugin = require("copy-webpack-plugin"),
  commonConfig = require("./webpack.common.js"),
  HtmlWebpackPlugin = require("html-webpack-plugin");


const ENV = process.env.NODE_ENV = process.env.ENV = "production";

// this stuff used to replace base in the index.html in case of deploying to the production
// var stringReplaceLoader = {
//   test: /index.ejs$/,
//   loader: StringReplacePlugin.replace({
//     replacements: [
//       {
//         pattern: /(\<base(?:.+)?href=(?:"|')?)([^'"]+)((?:"|')?(?:.+)?>)/mig,
//         replacement: function (match, p1, p2, p3) {
//           return p1 + "/admin" + p3;
//         }
//       }
//     ]
//   })
// };

//commonConfig.module.loaders.push(stringReplaceLoader);
//   path : helpers.root("dist"),
module.exports = webpackMerge(commonConfig, {
  devtool: "source-map",

  output: {
    path: "../built/admin",
    publicPath: "/admin/",
    filename: "[name].[hash].js",
    chunkFilename: "[id].[hash].chunk.js"
  },

  htmlLoader: {
    minimize: false // workaround for ng2
  },

  plugins: [
    new HtmlWebpackPlugin({
      rootPath: '/admin',
      template: "src/index.ejs"
    }),
    new StringReplacePlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ // https ://github.com/angular/angular/issues/10618
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
