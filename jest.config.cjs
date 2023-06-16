/** @type {import("jest").Config} */
module.exports = {
  preset: "jest-expo",
  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect",
    "./tests/setup.ts",
  ],
  testMatch: ["./**/tests/**/*.+(spec|test).ts?(x)"],
};
