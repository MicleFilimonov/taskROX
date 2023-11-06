class promotions {

    get promotionList() {
        return $$ ('//div[@class="news-list__item"]')
    }
    
    async firstNewsCheck() {
        await expect(this.promotionList[0]).toBeDisplayed()
    }
    async secondNewsCheck() {
        await expect(this.promotionList[1]).toBeDisplayed()
    }
    async firstEndedNewsCheck() {
        await expect(this.promotionList[5]).toBeDisplayed()
    }
    async secondEndedNewsCheck() {
        await expect(this.promotionList[6]).toBeDisplayed()
    }
    
 }
    
export default new promotions ()