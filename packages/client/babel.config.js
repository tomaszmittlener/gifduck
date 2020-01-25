import baseConfig from '@gifduck/common-config/base.babel.config'

module.exports = {
  ...baseConfig,
  presets: [
    ...baseConfig.presets,
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['last 2 versions'],
        },
        modules: false,
      },
    ],
    '@babel/preset-react',
  ],
}
