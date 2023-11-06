class news{

    get allNews() {
        return $$ ('//div[@class="news-list__item"]')
    }

    async firstNewsCheck() {
        await expect(this.allNews[0]).toBeDisplayed()
    }
    async secondNewsCheck() {
        await expect(this.allNews[1]).toBeDisplayed()
    }
    
}
export default new news ()