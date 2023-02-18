const HtmlWebpackPlugin = require('html-webpack-plugin');
const { mergeWithRules } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

const config = mergeWithRules({ module: { rules: { test: "match", use: 'prepend' } } })(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
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
        test: /\.js?$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          emitWarning: true,
          fix: true,
          configFile: './.eslintrc.js',
        },
      },
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
