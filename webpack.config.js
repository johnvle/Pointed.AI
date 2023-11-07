// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.tsx', // The entry point for your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Name of the output bundle
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Regular expression to match TypeScript and JavaScript files
        use: 'ts-loader', // Use the ts-loader to transpile TypeScript
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
};
