module.exports = {
  coverageDirectory: "./coverage/",
  coverageThreshold: {
    global: {
      // global thresholds
      branches: 50,
      functions: 50,
      lines: 80,
      statements: 80,
    },
  },
  collectCoverage: true,
  collectCoverageFrom: ["src/*.js", "src/**/*.js", "!src/main.js", "!**/node_modules/**"],
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
