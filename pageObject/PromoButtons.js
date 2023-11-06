class promoButtons {
    constructor() {
        this.elements = {
            Статусы: this.buttonStatus,
            Турниры: this.buttonTournament,
            Бонусы: this.buttonBonus,
            Лотереи: this.buttonLottery,
            Кэшбэк: this.buttonCashback,
            Новости: this.buttonNews,
            Акции: this.buttonAction
        }
    }
    // селекторы для страницы 
    get buttonStatus() {
        return $('//a[@href="/status"]')
    }
    get buttonTournament() {
        return $('//a[@href="/tournaments"]')
    }
    get buttonBonus() {
        return $('//a[@href="/bonus"]')
    }
    get buttonLottery() {
        return $('//a[@href="/lottery"]')
    }
    get buttonCashback() {
        return $('//a[@href="/cashback"]')
    }
    get buttonNews() {
        return $('//a[@href="/news"]')
    }
    get buttonAction() {
        return $('//a[@href="/promotions"]')
    }

}

export default  promoButtons