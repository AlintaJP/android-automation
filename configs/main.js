let chai = require("chai");
const allure = require("allure-commandline");

exports.config = {
  runner: "local",
  port: 4723,
  // path: "/wd/hub",
  // hostname: "localhost",
  services: [
    [
      "appium",
      {
        command: "appium",
      },
    ],
  ],
  specs: ["./test/specs/**/*.js"],
  exclude: [
    // 'path/to/excluded/files'
  ],
  maxInstances: 1,
  logLevel: "info",
  framework: "mocha",
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
