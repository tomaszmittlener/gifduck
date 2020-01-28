module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  verbose: true,
  transform: {
    '^.+\\.[t|j]sx?$': 'ts-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: ['./**/*.{ts,tsx,js,jsx}'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  testMatch: null,
}
