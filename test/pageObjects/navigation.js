class Navigation {
  get loginIcon() {
    return $("~Login");
  }

  get formsIcon() {
    return $("~Forms");
  }

  get swipeIcon() {
    return $("~Swipe");
  }

  async goToLoginPage() {
    await (await this.loginIcon).click();
  }

  async goToFormsPage() {
    await (await this.formsIcon).click();
  }

  async goToSwipePage() {
    await (await this.swipeIcon).click();
  }
}

export default new Navigation();
