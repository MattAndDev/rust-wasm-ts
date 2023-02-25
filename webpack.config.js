const { resolve } = require('path')
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  context: resolve('./'),
  entry: './src/index.ts',
  output: {
    path: resolve(__dirname, 'public'),
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  stats: 'errors-only',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
      },
    ],
  },
  performance: {
    hints: false,
  },
  plugins: [
    new WasmPackPlugin({
      crateDirectory: resolve(__dirname, '.'),
      watchDirectories: [resolve(__dirname, './src/lib')],
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devServer: {
    compress: true,
    port: 2424,
  },
  resolve: {
    extensions: ['.js', '.ts', '.json', '.html'],
  },
  experiments: {
    asyncWebAssembly: true,
  },
}
