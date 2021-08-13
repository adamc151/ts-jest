// jest.config.js
module.exports = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    moduleNameMapper: {
        '\\.(scss|sass|css)$': 'identity-obj-proxy',
    },
    testEnvironment: 'jsdom',
    testTimeout: 30000,
    bail: 0,
    globalSetup: '<rootDir>/test-utils/setup.js',
    globalTeardown: '<rootDir>/test-utils/teardown.js',
    testEnvironment: '<rootDir>/test-utils/testEnvironment.js',
};