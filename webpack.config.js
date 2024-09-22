const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/index.js', // or './src/index.ts' if using TypeScript
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  externals: [nodeExternals()], // This prevents bundling of node_modules
  resolve: {
    extensions: ['.js', '.jsx'], // Add .ts and .tsx if using TypeScript
  },
};
