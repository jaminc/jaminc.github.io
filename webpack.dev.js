const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

const config = merge.smartStrategy({ 'module.rules.use': 'prepend' })(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "style-loader",
        ]
      },
    ]
  }
});

module.exports = config;