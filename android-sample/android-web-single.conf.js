exports.config = {
    user: process.env.LT_USERNAME || "garvits",
    key: process.env.LT_ACCESS_KEY || "GRpg9COu6m4D6NMQghaMdbsjVna5mvFKPEjhN6fSM0QL2RQVH7",
  
    updateJob: false,
    specs: ["./../specs/android-ios-web-test.js"],
    exclude: [],
  
    capabilities: [
      {
        build: "NodeJS WebDriverIO iOS",
        name: "Sample Test - WebDriverIO",
        isRealMobile: true,
        deviceName: "Pixel .*",
        autoGrantPermissions: true,
        platformVersion: "12",
        platformName: "android"
      },
    ],
  
    logLevel: "info",
    coloredLogs: true,
    screenshotPath: "./errorShots/",
    baseUrl: "",
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    path: "/wd/hub",
    hostname: "mobile-hub.lambdatest.com",
    port: 80,
  
    framework: "mocha",
    mochaOpts: {
      ui: "bdd",
      timeout: 20000,
    },
  };
  