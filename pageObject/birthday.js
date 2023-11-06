class birthday {
    get birthday() {
        return $('//div[contains(text(), "ПОДАРОК на ДЕНЬ РОЖДЕНИЯ ДО")]')
    }

    async birthdayText() {
        await this.birthday.scrollIntoView()
        const bdText = await this.birthday.getText()
        await expect(bdText).toContain('ПОДАРОК НА ДЕНЬ РОЖДЕНИЯ ДО')
    }
}
export default new birthday()