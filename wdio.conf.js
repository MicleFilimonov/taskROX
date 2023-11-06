export const config = {
    runner: 'local',
    specs: [
        './test/features/1.feature'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        // 'goog:chromeOptions': {
        //     args: ["--headless"]
        // }
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 30000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    cucumberOpts: {
        require: [
            './test/steps/*.js',
        ],
        failFast: false
    },
}
