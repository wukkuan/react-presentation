var path = require('path');

module.exports = {
  entry: "./entry.js",
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'built_assets_bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css/,
        loader: 'style-loader!raw-loader'
      }, {
        test: /\.js$/,
        loader: 'jsx-loader?harmony'
      }
    ]
  }
};
