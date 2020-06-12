
module.exports = {
  "coverageDirectory": "./coverage/",
  "coverageThreshold": {
    "global": { // global thresholds
    "branches": 45,
    "functions": 68,
    "lines": 70,
    "statements": 70
    }
    },
  "collectCoverage": true,
  "collectCoverageFrom": [
    "**/src/**/*.{js}",
    "!**/node_modules/**",
    "!**/coverage/**",
    "!**/test/**"
  ],
  "testURL": "http://localhost",
  "testEnvironment": 'node',
  projects: [
    {
      displayName: 'dxc-halstackc-lient',
      testMatch: [ '**/test/**/*.test.js' ]
    }
 ]
}