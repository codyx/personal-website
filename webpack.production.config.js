const webpack = require('webpack');
const path = require('path');
const uglifyJsPlugin = require('uglifyjs-webpack-plugin');

const APP_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'public/dist');

const config = {
	mode: 'production',
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
      rules: [
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
  optimization: {
    minimizer: [
			// Enable source maps in production
      new uglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true
        },
        sourceMap: true
      })
    ]
  }
};

module.exports = config;
