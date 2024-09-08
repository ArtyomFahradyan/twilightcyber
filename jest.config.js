export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  roots: ["<rootDir>/src"],
  moduleNameMapper: {
    "^src/(.*)$": ["<rootDir>/src/$1"],
  },
  modulePaths: ["<rootDir>/src/"],
  moduleDirectories: ["node_modules", "<rootDir>"],
};
