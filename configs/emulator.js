const { config } = require("./main");

config.capabilities = [
  {
    deviceName: "Android Emulator",
    platformName: "Android",
    automationName: "UiAutomator2",
    udid: "emulator-5554",
    appPackage: "com.wdiodemoapp",
    appActivity: ".MainActivity",
  },
];

exports.config = config;
