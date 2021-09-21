let chai = require("chai");
const allure = require("allure-commandline");

//Requires to run several Appium servers programmatically via CLI

exports.config = {
  runner: "local",
  // port: 4723,
  path: "/wd/hub",
  hostname: "localhost",
  //   services: [
  //     [
  //       "appium",
  //       {
  //         command: "appium",
  //       },
  //     ],
  //   ],
  specs: ["./test/specs/**/*.js"],
  exclude: [
    // 'path/to/excluded/files'
  ],
  maxInstances: 2,
  logLevel: "info",
  framework: "mocha",
  capabilities: [
    {
      deviceName: "Android Emulator",
      platformName: "Android",
      automationName: "UiAutomator2",
      udid: "emulator-5554",
      appPackage: "com.wdiodemoapp",
      appActivity: ".MainActivity",
      port: 6000,
      //   systemPort: 6001,
    },
    {
      deviceName: "Samsung S10",
      platformName: "Android",
      automationName: "UiAutomator2",
      udid: "R28M13FJFZT",
      appPackage: "com.wdiodemoapp",
      appActivity: ".MainActivity",
      port: 7000,
      //   systemPort: 7001,
    },
  ],

  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableMochaHooks: true,
      },
    ],
  ],
  mochaOpts: {
    ui: "bdd",
    require: ["@babel/register"],
    timeout: 60000,
  },
  waitforTimeout: 10000,
  before: function () {
    global.chaiExpect = chai.expect;
  },
  onComplete: function () {
    const reportError = new Error("Could not generate Allure report");
    const generation = allure(["generate", "allure-results", "--clean"]);
    return new Promise((resolve, reject) => {
      const generationTimeout = setTimeout(() => reject(reportError), 5000);

      generation.on("exit", function (exitCode) {
        clearTimeout(generationTimeout);

        if (exitCode !== 0) {
          return reject(reportError);
        }

        console.log("Allure report successfully generated");
        resolve();
      });
    });
  },
};
