// Things I still need to do:

// 1) Add uglifier plugin for minification

var path = require('path');

var webpack = require('webpack');
var cssnext = require('cssnext');
var cssimport = require('postcss-import');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var isProd = process.env.NODE_ENV === 'production' ? true : false;

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './app/index'
  ],
  stylePath: path.resolve(__dirname, 'app', 'style'),
  postcss: function () {
    return [
      cssimport({
        path: './app/style/index.css',
        onImport: function (files) {
          files.forEach(this.addDependency)
        }.bind(this)
      }),
      cssnext()
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    cssFilename: 'style.css',
    publicPath: '/static/'
  },
  plugins: [
    new ExtractTextPlugin('style.css', {
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'app')
    },
    {
    test: /\.css$/,
    loader: isProd ? ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss') : 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss'
    }]
  },
  resolve: {
    root: path.resolve(__dirname),
    extensions: [
      '',
      '.js',
      '.css'
    ],
    modulesDirectories: [
      'app',
      'node_modules'
    ]
  }
};
