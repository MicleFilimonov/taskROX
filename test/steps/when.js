import { When } from '@wdio/cucumber-framework'
import { browser, $ } from '@wdio/globals'

When("Я кликаю на Вход", async () => {
    const alloowButton = await $('#headLine > div:nth-child(1) > div > div > div:nth-child(2) > div')
    await alloowButton.click()
    await browser.waitUntil(async () => {
        const readyState = await browser.execute(() => document.readyState);
        return readyState === 'complete';
    }, { timeout: 8000 });
})

When("Ввожу почту в форму авторизации", async () => {
    await $('#registr-email').setValue('m.filimonov+2@jetmail.cc')
})

When("Ввожу пароль в форму авторизации", async () => {
    await $('#signinPopup > div.js-constructor-container > div.new-input.new-modal__input-image.image-password.js-input-wrapper > input').setValue('Qwertyui')
})

When("Нажимаю кнопку Войти в форме авторизации", async () => {
    const enterButton = await $('//*[@id="signinPopup"]/div[5]/input')
    await enterButton.click()
    await browser.waitUntil(async () => {
        const readyState = await browser.execute(() => document.readyState);
        return readyState === 'complete';
    }, { timeout: 8000 });
})

When("Я нажимаю на Личный кабинет", async () => {
    await browser.waitUntil(async () => {
        const readyState = await browser.execute(() => document.readyState);
        return readyState === 'complete';
    }, { timeout: 8000 });
    const menu = await $('//*[@id="profile"]/div[3]/div[1]')
    await menu.$('a[id = "my-profile"]').click()
})

When("Навожу курсор на элемент Промо", async () => {
    const promoButton = await $('/html/body/div[10]/div[1]/div[2]/div[2]/div[3]/div/ul/li[6]/a')
    await promoButton.moveTo()
    await browser.waitUntil(async () => {
        const readyState = await browser.execute(() => document.readyState);
        return readyState === 'complete';
    }, { timeout: 8000 });
})

When("Нажимаю на статусы в дропдауне", async () => {
    const statusButtonDrpodown = await $('/html/body/div[10]/div[1]/div[2]/div[2]/div[3]/div/ul/li[6]/ul/li[1]/a')
    await statusButtonDrpodown.click()
    await browser.waitUntil(async () => {
        const readyState = await browser.execute(() => document.readyState);
        return readyState === 'complete';
    }, { timeout: 8000 });})

When("Нажимаю на турниры в дропдауне", async () => {
    const statusButtonDrpodown = await $('/html/body/div[10]/div[1]/div[2]/div[2]/div[3]/div/ul/li[6]/ul/li[2]/a')
    await statusButtonDrpodown.click()
    await browser.waitUntil(async () => {
        const readyState = await browser.execute(() => document.readyState);
        return readyState === 'complete';
    }, { timeout: 8000 });})

When("Нажимаю на бонусы в дропдауне", async () => {
    const statusButtonDrpodown = await $('/html/body/div[10]/div[1]/div[2]/div[2]/div[3]/div/ul/li[6]/ul/li[3]/a')
    await statusButtonDrpodown.click()
    await browser.waitUntil(async () => {
        const readyState = await browser.execute(() => document.readyState);
        return readyState === 'complete';
    }, { timeout: 8000 });})

When("Нажимаю на лоттереи в дропдауне", async () => {
    const statusButtonDrpodown = await $('/html/body/div[10]/div[1]/div[2]/div[2]/div[3]/div/ul/li[6]/ul/li[4]/a')
    await statusButtonDrpodown.click()
    await browser.waitUntil(async () => {
        const readyState = await browser.execute(() => document.readyState);
        return readyState === 'complete';
    }, { timeout: 8000 });})

When("Нажимаю на кэшбэк в дропдауне", async () => {
    const statusButtonDrpodown = await $('/html/body/div[10]/div[1]/div[2]/div[2]/div[3]/div/ul/li[6]/ul/li[5]/a')
    await statusButtonDrpodown.click()
    await browser.waitUntil(async () => {
        const readyState = await browser.execute(() => document.readyState);
        return readyState === 'complete';
    }, { timeout: 8000 });})

When("Нажимаю на новости в дропдауне", async () => {
    const statusButtonDrpodown = await $('/html/body/div[10]/div[1]/div[2]/div[2]/div[3]/div/ul/li[6]/ul/li[6]/a')
    await statusButtonDrpodown.click()
    await browser.waitUntil(async () => {
        const readyState = await browser.execute(() => document.readyState);
        return readyState === 'complete';
    }, { timeout: 8000 });})

When("Нажимаю на акции в дропдауне", async () => {
    const statusButtonDrpodown = await $('/html/body/div[10]/div[1]/div[2]/div[2]/div[3]/div/ul/li[6]/ul/li[7]/a')
    await statusButtonDrpodown.click()
    await browser.waitUntil(async () => {
        const readyState = await browser.execute(() => document.readyState);
        return readyState === 'complete';
    }, { timeout: 8000 });
})

