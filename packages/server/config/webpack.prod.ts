import path from 'path'
import { Configuration, ProgressPlugin } from 'webpack'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import nodeExternals from 'webpack-node-externals'
import Dotenv from 'dotenv-webpack'

const SRC_DIR = path.join(__dirname, '../src')
const DIST_DIR = path.join(__dirname, '../dist')

const progressPlugin = new ProgressPlugin()
const DotEnvPlugin = new Dotenv()

const config: Configuration = {
  mode: 'production',
  devtool: 'source-map',
  externals: [nodeExternals()],
  target: 'node',
  entry: {
    app: `${SRC_DIR}/index.ts`,
  },
  output: {
    path: DIST_DIR,
    filename: 'index.js',
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
  plugins: [DotEnvPlugin, progressPlugin],
}

export default config
