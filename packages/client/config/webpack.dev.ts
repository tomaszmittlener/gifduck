import { Configuration } from 'webpack'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import merge from 'webpack-merge'
import commonConfig from './webpack.common'

const forkTsCheckerWebpackPlugin = new ForkTsCheckerWebpackPlugin({
  eslint: true,
})

const config: Configuration = {
  mode: 'development',
  devtool: 'eval',
  devServer: {
    port: 3000,
  },
  plugins: [forkTsCheckerWebpackPlugin],
}

export default merge(commonConfig, config)
