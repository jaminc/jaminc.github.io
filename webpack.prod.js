const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = merge.smartStrategy({ 'module.rules.use': 'prepend' })(common, {
  mode: 'production',
  output: {
    publicPath: 'dist/',
  },
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'Jamin Cheung',
        favicon: 'src/assets/images/jamin-cheung/jamin-cheung.jpg',
        template: 'src/templates/index.hbs',
        filename: '../index.html',
      }),
      new TerserJSPlugin({}),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: "[id].css"
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
        ]
      },
    ]
  }
});

module.exports = config;