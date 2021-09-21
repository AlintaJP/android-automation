import loginPage from "../pageObjects/loginPage";
import nav from "../pageObjects/navigation";
import loginMsgData from "../testData/loginMsgData.json";
import allureReporter from "@wdio/allure-reporter";

class LoginFlow {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  async loginWithCredentials() {
    if (loginPage.isOnLoginScreen()) await nav.goToLoginPage();
    allureReporter.addStep(`Input email as ${this.email}`);
    await loginPage.setEmail(this.email);
    allureReporter.addStep(`Input email as ${this.password}`);
    await loginPage.setPassword(this.password);
    allureReporter.addStep(`Click on Login button`);
    await loginPage.clickLoginBtn();
  }

  async verifyLoginSuccessfully() {
    const expectedMsgTitle = loginMsgData.msgTitle;
    const expectedMsgContent = loginMsgData.msgContent;
    await expect(await loginPage.msgTitle).toHaveText(expectedMsgTitle);
    await expect(await loginPage.msgContent).toHaveText(expectedMsgContent);
    await loginPage.waitAndClickOkBtn();
  }

  async verifyLoginUnsuccessfully() {
    if (!this.email && this.password.length >= 8) {
      await expect(await loginPage.isInvalidEmailFormatMsgDisplayed()).toEqual(
        true
      );
      await expect(
        await loginPage.isInvalidPasswordFormatMsgDisplayed()
      ).toEqual(false);
    } else if (this.email.length > 0 && this.password.length < 8) {
      await expect(await loginPage.isInvalidEmailFormatMsgDisplayed()).toEqual(
        false
      );
      await expect(
        await loginPage.isInvalidPasswordFormatMsgDisplayed()
      ).toEqual(true);
    } else {
      await expect(await loginPage.isInvalidEmailFormatMsgDisplayed()).toEqual(
        true
      );
      await expect(
        await loginPage.isInvalidPasswordFormatMsgDisplayed()
      ).toEqual(true);
    }
  }
}

export default LoginFlow;
