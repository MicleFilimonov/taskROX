class elite {
    get eliteStatus() {
        return $('//p[@class=\'status-title\' and text()=\'elite\']')
    }

    async checkElite() {
        await this.eliteStatus.scrollIntoView()
        await expect(this.eliteStatus).toBeDisplayed()
    }
}

export default new elite()
