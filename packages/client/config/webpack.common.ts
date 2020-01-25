import path from 'path'
import { Configuration, ProgressPlugin } from 'webpack'
import HtmlWebPackPlugin from 'html-webpack-plugin'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'

const SRC_DIR = path.join(__dirname, '../src')

const htmlWebPackPlugin = new HtmlWebPackPlugin({
  template: `${SRC_DIR}/index.html`,
})

const progressPlugin = new ProgressPlugin()

const config: Configuration = {
  entry: {
    app: `${SRC_DIR}/index.tsx`,
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
        exclude: [/node_modules/],
      },
    ],
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'],
  },
  plugins: [htmlWebPackPlugin, progressPlugin],
}

export default config
