import baseConfig from '@gifduck/config-babel/babel.config.js'

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
