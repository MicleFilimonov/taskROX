class birthday {
    get birthday() {
        return $('//div[contains(text(), "ПОДАРОК на ДЕНЬ РОЖДЕНИЯ ДО")]')
    }

    async birthdayText() {
        const bdText = await this.birthday.getText()
        await expect(bdText).toContain('ПОДАРОК НА ДЕНЬ РОЖДЕНИЯ ДО')
    }
}
export default new birthday()