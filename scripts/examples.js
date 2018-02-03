const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const context = '../examples';
// realtive to current working directory, that is project root
const buildPath = path.resolve('build/examples'); 
const entrys = {
  // Transition Examples
  index: './transition',
  mountTransition: './mount-transition',
  appearTransition: './appear-transition',

  // CSSTransition Examples
  cssTransition: './css-transition',
  mountCSSTransition: './mount-css-transition',
  appearCSSTransition: './appear-css-transition',

  // TransitionGroup Examples
  transitionGroup: './transition-group',
  transitionGroupEnterExit: './transition-group-enter-exit'
};

const htmls = Object.keys(entrys).map(entry => {
  let filename = 'index.html';
  if (!(entry === 'index' || entry === 'app')) {
    filename = path.join(entrys[entry], filename)
  }
  return new HtmlWebpackPlugin({
    filename: filename,
    chunks: [entry, 'common']
  })
});


module.exports = {
  context: path.resolve(__dirname, context),
  devtool: 'cheap-source-map',
  entry: entrys,
  output: {
    publicPath: '/examples/',
    path: buildPath,
    filename: 'scripts/[name].js',
    chunkFilename: 'scripts/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.tsx?/,
        use: 'awesome-typescript-loader',
        exclude: /node_modules/
      },{
        test: /\.css$/,
        loader: ['style-loader', 'css-loader', 'postcss-loader'],
        // exclude: /node_modules/
      },{
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    }),
  ].concat(htmls),
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
};
