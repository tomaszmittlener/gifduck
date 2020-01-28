module.exports = {
  ...require('@gifduck/config-jest/jest.config.js'),
  name: '@gifduck/client',
  displayName: 'client',
  // use mapper for jest to understand the absolute paths inside project
  moduleNameMapper: {
    '^styles[/](.*)': '<rootDir>/src/styles/$1',
    '^components[/](.*)': '<rootDir>/src/components/$1',
    '^pages[/](.*)': '<rootDir>/src/pages/$1',
    '^containers[/](.*)': '<rootDir>/src/containers/$1',
    '^services[/](.*)': '<rootDir>/src/services/$1',
    '^utilities[/](.*)': '<rootDir>/src/utilities/$1',
    '^hooks[/](.*)': '<rootDir>/src/hooks/$1',
  },
}
