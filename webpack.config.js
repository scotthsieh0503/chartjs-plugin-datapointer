const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    bundle: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'chart-js-pointer-plugin.js'
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
};
