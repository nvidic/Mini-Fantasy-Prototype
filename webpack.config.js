const path = require('path');

module.exports = {
  target: "web",
  entry: {
    app: [
      '@babel/polyfill',
      './src/frontend.js',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'frontend.bundle.js',
  },
  module: {
    rules: [{
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
           presets: ['@babel/preset-env']
        }
    }]
  }

}
