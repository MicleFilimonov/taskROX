class roxstars {
    // локаторы
    get roxstar() {
        return $('//div[@data-tournament="roxstars"]')
    }
    
    // функции 
    async roxstarsTournament() {
        const existingRoxstar = await (await this.roxstar).isExisting()
        await expect(existingRoxstar).toBeTruthy()
    }
}

export default new roxstars();
