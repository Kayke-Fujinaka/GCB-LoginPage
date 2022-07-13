const {defaults} = require('jest-config');

module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  roots: ["<rootDir>"],
  testMatch: ['<rootDir>/src/**/?(*.)test.{ts,tsx}'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  coverageDirectory: "coverage",
  bail: true,
  collectCoverage: true,
  clearMocks: true,
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>jestSetup.ts"],
};