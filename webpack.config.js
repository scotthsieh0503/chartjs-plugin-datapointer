const path = require('path');
const webpack = require('webpack');
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
               use: [
                 'babel-loader',
                  'eslint-loader'
               ]
           }
       ]
   },
  plugins: [
     new webpack.IgnorePlugin(/moment/)
  ]
};
