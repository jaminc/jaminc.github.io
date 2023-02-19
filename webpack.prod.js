const { mergeWithRules } = require('webpack-merge');
const TerserJSPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');

const config = mergeWithRules({ module: { rules: { test: "match", use: 'prepend' } } })(common, {
  mode: 'production',
  output: {
    clean: true,
  },
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserJSPlugin({
        test: /\.js(\?.*)?$/i,
      }),
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Jamin Cheung',
      favicon: 'src/assets/images/jamin-cheung/jamin-cheung.jpg',
      template: 'src/templates/index.hbs',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
        ],
      },
    ],
  },
});

module.exports = config;
