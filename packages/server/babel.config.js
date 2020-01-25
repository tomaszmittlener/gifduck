import baseConfig from '@gifduck/common-config/base.babel.config.js'

module.exports = {
  ...baseConfig,
  presets: [
    ...baseConfig.presets,
    [
      '@babel/preset-env',
      {
        targets: {
          node: '10',
        },
        modules: 'commonjs',
      },
    ],
  ],
}
