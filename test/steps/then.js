import { Then } from '@wdio/cucumber-framework'
import cashForm from '../../pageObject/CashForm.js'
import promo from '../../pageObject/PromoButton.js'
import statuses from '../../pageObject/Statuses.js'
import roxstars from '../../pageObject/roxstars.js'
import elite from '../../pageObject/eliteStatus.js'
import birthday from '../../pageObject/birthday.js'
import morebutton from '../../pageObject/morebutton.js'
import cashback from '../../pageObject/cashback.js'
import news from '../../pageObject/news.js'
import promotions from '../../pageObject/promotions.js'


Then("Я проверяю статус New", async () => {
    await statuses.confirmNew()
})

Then("Я проверяю, что почта подтверждена", async () => {
    await statuses.confirmaEmail()
})

Then("Я вижу окно кассы", async () => {
    await cashForm.cashDisplayed()
})

Then("Я проверяю статус ELITE", async () => {
    await elite.checkElite()
})

Then("Я проверяю наличие турнира ROXSTARS", async () => {
    await roxstars.roxstarsTournament()
})

Then("Я проверяю наличие подарка на ДР", async () => {
    await birthday.birthdayText()
})

Then("Я проверяю наличие кнопки Узнать больше", async () => {
    await morebutton.getMoreButton()
})

Then("Я проверяю наличие блока Как получить кешбэк?", async () => {
    await cashback.titleCheck()
    await cashback.blockCheck()
})

Then("Я проверяю наличие 2-х любых новостей", async () => {
    await news.firstNewsCheck()
    await news.secondNewsCheck()
})

Then("Я проверяю наличие 2-х любых активных акций", async () => {
    await promotions.firstNewsCheck()
    await promotions.secondNewsCheck()
})

Then("Я проверяю наличие 2-х любых завершенных акций", async () => {
    await promotions.firstEndedNewsCheck()
    await promotions.secondEndedNewsCheck()
})

Then("Я вижу выпавший дропдаун", async () => {
    await promo.waitPromoButton()
})

Then("Я вижу окно кассы", async () => {
    cashForm.cashDisplayed()
})
