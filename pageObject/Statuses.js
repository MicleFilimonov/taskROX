class statuses {
    // локаторы
    get newStatus() {
        return $ ('//span[@class="statuseName" and text()="New"]')
    }
    get emailStatus() {
        return $ ('//span[@class="confirme" and text()="Подтверждена"]')
    }

    // функции

    async confirmNew () {
        await expect(this.newStatus).toBeDisplayed()
    }
    async confirmaEmail () {
        await expect(this.emailStatus).toBeDisplayed()
    }
}
export default new statuses()