const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        loader: require.resolve('file-loader')
      }
    ]
  }
}
