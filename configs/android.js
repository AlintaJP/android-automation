const { config } = require("./main");

config.capabilities = [
  {
    platformName: "Android",
    automationName: "UiAutomator2",
    udid: "R28M13FJFZT",
    appPackage: "com.wdiodemoapp",
    appActivity: ".MainActivity",
  },
];

exports.config = config;
