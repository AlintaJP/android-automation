import nav from "../pageObjects/navigation";
import formsPage from "../pageObjects/formsPage";
import formsData from "../testData/formsData.json";
import { swipeDown } from "../helpers/swipeDown";

class FormsFlow {
  async validateInput() {
    await nav.goToFormsPage();

    const expectedText = formsData.dummyText;
    await formsPage.enterText(expectedText);

    const actualText = await formsPage.getInputText();
    await expect(actualText).toEqual(expectedText);
  }

  async validateSwitchToggle() {
    await formsPage.clickSwitchToggle();

    const actualText = await formsPage.getSwitchToggleText();
    const expectedText = formsData.toggleText;
    await expect(actualText).toEqual(expectedText);
  }

  async swipeDownAndClickActiveBtn() {
    await formsPage.clickFormHeader();
    await swipeDown();
    await formsPage.clickActiveBtn();
    await formsPage.clickOkBtn();
  }
}

export default new FormsFlow();
