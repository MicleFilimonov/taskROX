import { When } from '@wdio/cucumber-framework'
import promo from '../../pageObject/PromoButton.js'
import cashForm from '../../pageObject/CashForm.js'
import promoButtons from '../../pageObject/PromoButtons.js'
import authButtons from '../../pageObject/AuthButtons.js'
import authFields from '../../pageObject/authFields.js';


When(/^Я кликаю на Вход$/, async () => {
    await authButtons.clickOnSignIn()
})

When(/^Я ввожу "([^"]*)" в "([^"]*)"$/, async (value, fieldName) => {
    const auth = new authFields()
    await $(auth.elements[fieldName]).setValue(auth.values[value])
});

When(/^Я нажимаю кнопку Войти$/, async () => {
    await authButtons.clickOnEnter()
})

When(/^Я нажимаю на Личный кабинет$/, async () => {
    await cashForm.cabinetDisplayed()
    await cashForm.cabinetClick()
})

When(/^Я навожу курсор на элемент Промо$/, async () => {
    await promo.moveToPromoButton()
})

When(/^Я нажимаю на "([^"]*)" в Промо$/, async (buttonName) => {
    const promo = new promoButtons();
    await promo.elements[buttonName].click();
});
