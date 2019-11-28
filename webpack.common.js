const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  // entry: ['babel-polyfill', './src/index.ts'],
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              context: path.resolve(__dirname, 'src/assets'),
              outputPath: 'assets',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
      {
        test: /\.hbs$/,
        use: {
          loader: 'handlebars-loader',
          query: {
            inlineRequires: '/images/',
            partialDirs: [
              path.join(__dirname, 'src', 'templates', 'partials'),
            ],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'css-loader', // translates CSS into CommonJS
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      },
      {
        test: /\.ts(x?)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.m?js$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread'],
          },
        },
      },
    ],
  },
};
