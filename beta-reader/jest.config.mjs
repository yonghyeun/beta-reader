// jest.config.mjs

const jestConfig = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        useESM: true
      }
    ]
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  transformIgnorePatterns: [
    "node_modules/(?!(react-native|react-native-.*|@react-native-.*)/)"
  ]
};

export default jestConfig;
