// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
    // Indicates whether each individual test should be reported during the run
    verbose: false,

    // A list of paths to directories that Jest should use to search for files in
    roots: [
        "<rootDir>/src/"
    ],

    // The regexp pattern Jest uses to detect test files
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$",

    // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
    testPathIgnorePatterns: [
        "<rootDir>/node_modules/"
    ],

    // A map from regular expressions to paths to transformers
    transform: {
        "^.+\\.jsx?$": "babel-jest"
    },

    // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
    transformIgnorePatterns: [
        "<rootDir>/node_modules/"
    ],

    // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
    testURL: "http://localhost",
};
