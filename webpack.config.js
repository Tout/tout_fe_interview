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
          path.resolve(__dirname, 'node_modules/tout_video_player/src'),
          path.resolve(__dirname, 'node_modules/tout_analytics_client'),
        ],
      },
      // Compile CSS with modules
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
    ], // rules:
  }, // module:
};

// Export the completed config.
// https://webpack.js.org/configuration/configuration-types/#exporting-a-function-to-use-env
module.exports = function() {
  return baseConfig;
}
