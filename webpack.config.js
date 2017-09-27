var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'builddir');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      },
      {
        test : /\.css$/,
        include : APP_DIR,
        loader : 'style-loader!css-loader'
      }
    ]
  },
  plugins : [
      new HtmlWebpackPlugin({
        title: "React App",
        template: "src/index.ejs",
        inject: false,
        chucksSortMode: 'dependency'
      })
  ]
};

module.exports = config;
