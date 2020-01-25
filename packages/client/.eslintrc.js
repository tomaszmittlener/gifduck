const baseConfig = require('@gifduck/common-config/base.eslintrc')

module.exports = {
  ...baseConfig,
  extends: [
    ...baseConfig.extends,
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
  ],
  rules: {
    ...baseConfig.rules,
    'react/prop-types': 'off',
  },
  env: {
    browser: true,
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
}
