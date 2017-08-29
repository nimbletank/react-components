const {resolve} = require('path')

module.exports = {
  context: resolve(__dirname, 'components'),
  entry: {
    // index: './index.js',
    Button: './Button/index.js',
    Container: './Container/index.js',
    Element: './Element/index.js',
    Heading: './Heading/index.js',
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
        },
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
              // localIdentName: '[local]___[hash:base64:5]',
            }
          },
          'postcss-loader'
        ]
      }
    ]
  },
  externals: [
    'classnames',
    {
      react: {
        root: 'React',
        commonjs2: './react',
        commonjs: ['./react'],
        amd: 'react',
      },
    },
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: './react-dom',
        commonjs: ['./react-dom'],
        amd: 'react-dom',
      },
    },
  ],
}
