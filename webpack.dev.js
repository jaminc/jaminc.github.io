const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

const config = merge.smartStrategy({ 'module.rules.use': 'prepend' })(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Jamin Cheung',
      favicon: 'src/assets/images/jamin-cheung/jamin-cheung.jpg',
      template: 'src/templates/index.hbs',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
        ],
      },
    ],
  },
});

module.exports = config;
