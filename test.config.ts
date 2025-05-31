import { pathsToModuleNameMapper } from 'ts-jest'
import { compilerOptions } from './tsconfig.json'

export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'],
  globals: {
    'ts-jest': {
      useESM: true
    }
  },
  moduleNameMapper: pathsToModuleNameMapper(
    compilerOptions.paths || {},
    { prefix: '<rootDir>/' }
  ),
  transform: {},
  testMatch: ['**/tests/**/*.test.ts']
}
