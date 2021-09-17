class FormsPage {
  get textInput() {
    return $("~text-input");
  }
  get switchToggle() {
    return $("~switch");
  }
  get activeBtn() {
    return $("~button-Active");
  }
  get formHeader() {
    return $("~Forms-screen");
  }

  get okBtn() {
    return $(`//*[@resource-id="android:id/button1"]`);
  }

  async enterText(text) {
    await (await this.textInput).setValue(text);
  }

  async getInputText() {
    const text = await (await this.textInput).getText();
    return text;
  }

  async clickSwitchToggle() {
    await (await this.switchToggle).click();
  }

  async getSwitchToggleText() {
    const text = await (await this.switchToggle).getAttribute("text");
    return text;
  }

  async clickFormHeader() {
    await (await this.formHeader).click();
  }

  async clickActiveBtn() {
    await (await this.activeBtn).click();
  }

  async waitAndClickOkBtn() {
    await (await this.okBtn).waitForDisplayed();
    await (await this.okBtn).click();
  }
}

export default new FormsPage();
