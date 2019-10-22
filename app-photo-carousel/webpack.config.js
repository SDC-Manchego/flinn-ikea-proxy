var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var PUB_DIR = path.join(__dirname, '/client/public');

module.exports = {
  entry: `${SRC_DIR}/main.jsx`,
  output: {
    filename: 'bundle.js',
    path: PUB_DIR
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader : 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};