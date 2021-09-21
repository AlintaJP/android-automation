import LoginFlow from "../flows/loginFlow";
import formsFlow from "../flows/formsFlow";
import loginCreds from "../testData/loginCreds.json";
import { swipeRight } from "../helpers/swipeRight";

describe(`Login flow test suite for ${browser.capabilities.deviceName}`, async () => {
  it.only("Should login successfully with valid creds", async () => {
    const email = loginCreds.validCreds.email;
    const password = loginCreds.validCreds.password;
    const loginFlow = new LoginFlow(email, password);

    await loginFlow.loginWithCredentials();
    await loginFlow.verifyLoginSuccessfully();
  });

  it.only("Should login unseccessully with invalid creds", async () => {
    const email = loginCreds.invalidCreds.email;
    const password = loginCreds.invalidCreds.password;
    const loginFlow = new LoginFlow(email, password);

    await loginFlow.loginWithCredentials();
    await loginFlow.verifyLoginUnsuccessfully();
  });

  it("Should toggle the switch button", async () => {
    await formsFlow.validateInput();
    await formsFlow.validateSwitchToggle();
    await formsFlow.swipeDownAndClickActiveBtn();
  });

  it("Should swipe to right", async () => {
    const swipeIcon = "~Swipe";

    await (await $(swipeIcon)).click();

    for (let swipeTimes = 0; swipeTimes < 4; swipeTimes++) {
      await swipeRight();
    }
  });
});
