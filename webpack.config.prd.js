const { resolve } = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [
    './src/index'
  ],

  resolve: {
    extensions: [ '.js', '.html' ]
  },

  output: {
    path: resolve(__dirname, 'lib'),
    filename: 'huepicker.js',
    library: 'huepicker',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.(html|js)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: 'svelte-loader'
      }
    ]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),

    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compressor: {
        warnings: false
      }
    })
  ]
}
