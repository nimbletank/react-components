module.exports = {
  sections: [
    {
      name: 'Design System',
      content: 'components/styleguide/readme.md',
      components: 'components/styleguide/**/[A-Z]*.js',
    },
    {
      name: 'UI Components',
      content: 'components/ui/readme.md',
      components: 'components/ui/**/[A-Z]*.js',
    }
  ],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
      ]
    }
  }
}
