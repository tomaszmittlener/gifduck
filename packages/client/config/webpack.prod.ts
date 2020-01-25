import path from 'path'
import { Configuration } from 'webpack'
import merge from 'webpack-merge'
import commonConfig from './webpack.common'

const DIST_DIR = path.join(__dirname, '../dist')

const config: Configuration = {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: DIST_DIR,
    filename: 'index.js',
  },
}

export default merge(commonConfig, config)
