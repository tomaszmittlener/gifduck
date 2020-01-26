module.exports = {
  ...require('@gifduck/common-config/base.jest.config.js'),
  name: '@gifduck/client',
  displayName: 'client',
  // use mapper for jest to understand the absolute paths inside project
  moduleNameMapper: {
    '^styles[/](.*)': '<rootDir>/src/styles/$1',
    '^components[/](.*)': '<rootDir>/src/components/$1',
    '^pages[/](.*)': '<rootDir>/src/pages/$1',
    '^containers[/](.*)': '<rootDir>/src/containers/$1',
    '^services[/](.*)': '<rootDir>/src/services/$1',
  },
}
