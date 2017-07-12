'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/index.js',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    inline: true,
    port: 7777,
    historyApiFallback: true,
    compress: false,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify('development')
      }
    })
  ],
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
    }],
  },
  resolve: {
    extensions: ['.js'],
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
};