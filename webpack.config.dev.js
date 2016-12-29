const { resolve } = require('path')

module.exports = {
  entry: [
    './src/index'
  ],

  resolve: {
    extensions: [ '.js', '.html' ]
  },

  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'colorpicker.js',
  },

  devtool: 'inline-source-map',

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
  }
}
