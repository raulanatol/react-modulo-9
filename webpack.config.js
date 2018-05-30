const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
      {
        test: /\.css?$/, use: ['style-loader', { loader: 'css-loader', options: { modules: true, importLoaders: 1, localIdentName: '[sha1:hash:hex:4]' } }]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};
