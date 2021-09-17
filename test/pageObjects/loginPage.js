class LoginPage {
  get emailInput() {
    return $("~input-email");
  }
  get passwordInput() {
    return $("~input-password");
  }
  get loginBtn() {
    return $("~button-LOGIN");
  }
  get okBtn() {
    return $(`//*[@resource-id="android:id/button1"]`);
  }

  get msgTitle() {
    return $('//*[@resource-id="android:id/alertTitle"]');
  }

  get msgContent() {
    return $('//*[@resource-id="android:id/message"]');
  }

  get msgAcceptBtn() {
    return $('//*[@resource-id="android:id/button1"]');
  }

  get invalidEmailText() {
    return $('//*[@text="Please enter a valid email address"]');
  }

  get invalidPasswordText() {
    return $('//*[@text="Please enter at least 8 characters"]');
  }

  async isOnLoginScreen() {
    if (await (await this.loginBtn).isDisplayed()) return true;
    return false;
  }

  async clickLoginBtn() {
    await (await this.loginBtn).waitForDisplayed();
    await (await this.loginBtn).click();
  }

  async setEmail(email) {
    await (await this.emailInput).setValue(email);
  }

  async setPassword(password) {
    await (await this.passwordInput).setValue(password);
  }

  async waitAndClickOkBtn() {
    await (await this.okBtn).waitForDisplayed();
    await (await this.okBtn).click();
  }

  async waitTilMsgTitleDisplayed() {
    await (await this.msgTitle).waitForDisplayed();
  }

  async isInvalidEmailFormatMsgDisplayed() {
    await (await this.invalidEmailText).waitForDisplayed();
    const isDisplayed = await (await this.invalidEmailText).isDisplayed();
    return isDisplayed;
  }

  async isInvalidPasswordFormatMsgDisplayed() {
    await (await this.invalidPasswordText).waitForDisplayed();
    const isDisplayed = await (await this.invalidPasswordText).isDisplayed();
    return isDisplayed;
  }
}

export default new LoginPage();
