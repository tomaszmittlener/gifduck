module.exports = {
  ...require('@gifduck/common-config/base.jest.config.js'),
  name: '@gifduck/client',
  displayName: 'client',
  // use mapper for jest to understand the absolute paths inside project
  moduleNameMapper: {
    '^styles[/](.*)': '<rootDir>/src/styles/$1',
    '^components[/](.*)': '<rootDir>/src/components/$1',
  },
}
