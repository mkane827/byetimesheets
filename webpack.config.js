var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: __dirname + '/src/app.jsx',
	output: {
		path: __dirname + '/dist',
		filename: 'app.bundle.js'
	},

  module: {
    loaders: [
      {
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.html"
    })
  ],

  devServer: {
    colors: true,
    inline: true
  }
}
