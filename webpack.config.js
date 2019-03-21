var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: ["babel-polyfill", "./js/client.js"],

  output: {
    path: __dirname + "/src/dist/",
    filename: "client.min.js"
  },

  //loaders
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        query: {
          plugins: ['emotion', 'react-html-attrs', 'transform-class-properties'],
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      {
        loaders: ["style-loader", "css-loader", "less-loader"],
        test: /\.css|\.less$/
      },
      {
        loader: "file-loader",
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff(2)?$|\.ttf$|\.eot$/
      }
    ]
  },

  plugins: debug ? [] : [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false}),
    ],
};
