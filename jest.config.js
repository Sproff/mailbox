module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@mbl-modules/(.*)$": "<rootDir>/src/modules/$1",
    "^@mbl-ui/(.*)$": "<rootDir>/src/ui/$1",
    "^@mbl-utils/(.*)$": "<rootDir>/src/utils/$1",
    "^@mbl-lib/(.*)$": "<rootDir>/src/lib/$1",
    "^next/font/local$": "<rootDir>/src/__mocks__/next/font/local.js",
  },
}
