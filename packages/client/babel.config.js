import baseConfig from '@gifduck/config-babel/babel.config'

const presets = [
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
]

const config = {
  // babel will get appropriate configuration based on process.env.NODE_ENV or process.env.BABEL_ENV
  env: {
    development: {
      ...baseConfig,
      plugins: [...baseConfig.plugins, ['babel-plugin-styled-components', { displayName: true, preprocess: false }]],
      presets,
    },
    production: {
      plugins: [...baseConfig.plugins, ['babel-plugin-styled-components', { displayName: false, preprocess: false }]],
      presets,
    },
  },
}

export default config
