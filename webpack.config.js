const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: {
    bundle: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'chart-js-pointer-plugin.js'
  },
  module: {
       rules: [
           {
               test: /\.(js)$/,
               exclude: /(node_modules|bower_components)/,
               loader: 'babel-loader'
           }
       ]
   },
  plugins: [
    new HtmlWebpackPlugin(),
     new webpack.IgnorePlugin(/moment/)
  ]
};
