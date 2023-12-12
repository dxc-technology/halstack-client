module.exports = {
  coverageDirectory: "./coverage/",
  coverageThreshold: {
    global: {
      // global thresholds
      branches: 20,
      functions: 20,
      lines: 20,
      statements: 20,
    },
  },
  collectCoverage: true,
  collectCoverageFrom: ["**/src/**/*.{js}", "!**/node_modules/**", "!**/coverage/**", "!**/test/**"],
  testURL: "http://localhost",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  projects: [
    {
      displayName: "dxc-halstack-client",
      testMatch: ["**/test/**/*.test.js"],
    },
  ],
};
