'use strict';

module.exports = {
  rootDir: 'src',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/failTestOnConsoleError.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'mjs', 'json', 'vue', 'node'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': '@vue/vue2-jest',
    //Uncomment below line and comment above line to test with Workaround
    //"\\.vue$": require.resolve("./vue-preprocessor.ts"),
    '^.+\\.tsx?$': 'ts-jest',
  },
};
