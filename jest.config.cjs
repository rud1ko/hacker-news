module.exports = {
    preset: 'ts-jest',
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    collectCoverageFrom: ["src/**/*.{ts,tsx}"],
    transformIgnorePatterns: [
        '/node_modules/(?!(@vkontakte/vk-mini-apps-router)/)',
    ],
    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "identity-obj-proxy"
    },
    testEnvironment: 'jsdom',
    roots: ["<rootDir>/src/"],
};