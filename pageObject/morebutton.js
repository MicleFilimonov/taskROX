class morebutton {
    // локатор
    get morebutton() {
        return $('//a[text()="Узнать больше"]')
    }
    // функции
    async getMoreButton() {
        await this.morebutton.scrollIntoView()
        await expect(this.morebutton).toBeDisplayed()
    }
}
export default new morebutton