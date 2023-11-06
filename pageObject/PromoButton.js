class promo {
    // селектор 
    get promoButton() {
        return $('//a[text()="Промо"]')
    }

    // Наведение курсора на кнопку "Промо" 
    async moveToPromoButton() {
        await this.promoButton.moveTo()
    }
    // Отображение
    async waitPromoButton() {
        await this.promoButton.waitForDisplayed()
        await this.promoButton.isDisplayed()
    }
}

export default new promo();
