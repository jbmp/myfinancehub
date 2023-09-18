/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  clearMocks: true,

  collectCoverage: true,
  coverageDirectory: 'coverage',

  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/src/db/',
  ],

  coverageProvider: 'v8',

  coverageReporters: [
    'json',
    'text',
    'lcov',
    'clover',
  ],
  moduleFileExtensions: [
    'js',
    'ts',
    'tsx',
  ],
  roots: [
    '<rootDir>/src',
  ],
  preset: 'ts-jest',
  testMatch: ['**/src/**/*.test.ts'],
  testEnvironment: 'node',
  testTimeout: 10000,
};