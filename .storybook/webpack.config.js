const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.md$/,
        use: 'raw-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              // localIdentName: '[local]___[hash:base64:5]'
            }
          },
          'postcss-loader'
        ]
      }
    ]
  }
}
