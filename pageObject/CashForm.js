class cashForm {
    // селекторы
     get cashForm() {
        return $('//div[@class="c-cashbox--deposit"]')
     }
     get personalCabinet() {
        return $('//a[@id="my-profile"]')
     }

    //  функции
    async cashDisplayed() {
        await expect(this.cashForm).toBeDisplayed()
    }
    async cabinetDisplayed() {
        await expect(this.personalCabinet).toBeDisplayed()
    }
    async cabinetClick() {
        await this.personalCabinet.click()
    }
}

export default new cashForm()