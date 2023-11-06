class cashback {
    get cashbackTitle() {
        return $('//h3[@class="mobile-mod-h4" and text()="Как получить Кешбэк?"]')
    }
    get cashbackBlock() {
        return $$('//div[@class="standart-mobile-styles horizon-indents-90"]')
    }


    async titleCheck() {
        const titleText = await (await this.cashbackTitle).getText()
        await expect(titleText).toEqual('КАК ПОЛУЧИТЬ КЕШБЭК?')
    }
    async blockCheck() {
        await expect(this.cashbackBlock[2]).toBeDisplayed()
    }
}
export default new cashback ()