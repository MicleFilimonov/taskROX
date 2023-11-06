class authButtons {
  
    // селекторы 
    get SignIn() {
        return $('//div[@data-test="main_signin"]')
    }
    get EnterButton() {
        return $('//input[@data-test="auth-form-btn"]')
    }

    //функции
    async clickOnSignIn() {
        await this.SignIn.click()
    }
    async clickOnEnter() {
        await this.EnterButton.click()
    }
}

export default new authButtons ()