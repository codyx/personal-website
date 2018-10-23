const webpack = require('webpack');
const path = require('path');

const APP_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'public/dist');

const config = {
  entry: [
    `${APP_DIR}/index.js`,
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '',
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
      loaders: [
        {
          test: /.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules|public/,
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      })
      // TODO: use config.optimization.minimize (instead of old UglifyJsPlugin)
  ],
};

module.exports = config;
