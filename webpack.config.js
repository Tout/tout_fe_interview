const path = require('path');

const baseConfig = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      // Compile everything with babel.
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'src'),
        ],
      },
    ], // rules:
  }, // module:

  // devServer adds it's own code before serving bundle.js
  // If you look in the netwrok tab, you will see a lot of things not in the actual file.
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/'
  }, // devServer
};

// Export the completed config.
// https://webpack.js.org/configuration/configuration-types/#exporting-a-function-to-use-env
module.exports = function() {
  return baseConfig;
}
