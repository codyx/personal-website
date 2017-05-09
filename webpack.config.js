const webpack = require('webpack');
const path = require('path');

const APP_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'public/dist');
const PORT = process.env.APP_PORT || 3000;

const config = {
  entry: [
    'react-hot-loader/patch', // Activate HMR for React
    `webpack-dev-server/client?http://localhost:${PORT}`,
    'webpack/hot/only-dev-server',
    `${APP_DIR}/index.js`,
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/statics/' // Necessary for HMR to know where to load the hot update chunks
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'inline-source-map',
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
      new webpack.HotModuleReplacementPlugin(), // Enable HMR globally
      new webpack.NamedModulesPlugin(), // Prints more readable module names in the browser console on HMR updates
      new webpack.NoEmitOnErrorsPlugin(), // Do not emit compiled assets that include errors
  ],
  devServer: {
    host: 'localhost',
    port: PORT,
    historyApiFallback: true, // Respond to 404s with index.html
    hot: true,
  },
};

module.exports = config;
