import { Then } from '@wdio/cucumber-framework'
import { expect, $, browser } from '@wdio/globals'

Then("Проверяю, что статус пользователя New", async () => {
    await browser.waitUntil(async () => {
        const readyState = await browser.execute(() => document.readyState);
        return readyState === 'complete';
    }, { timeout: 8000 });
    
    const emailConfirm = await $('//*[@id="form-save-profile"]/div[1]/div/div[1]/div[1]/form/p[1]/span[2]')
    expect(emailConfirm).toExist
    const emailConfirmValue = await emailConfirm.getText()
    expect(emailConfirmValue).toEqual('Подтверждена')
})

Then("Проверяю, что почта подтверждена", async () => {
    await browser.waitUntil(async () => {
        const readyState = await browser.execute(() => document.readyState);
        return readyState === 'complete';
    }, { timeout: 8000 });
    
    const emailConfirm = await $('//*[@id="form-save-profile"]/div[1]/div/div[1]/div[1]/form/p[1]/span[2]')
    expect(emailConfirm).toExist
    const emailConfirmValue = await emailConfirm.getText()
    expect(emailConfirmValue).toEqual('Подтверждена')
})

Then("Отображения поп-апа кассы", async () => {
    await browser.waitUntil(async () => {
        const readyState = await browser.execute(() => document.readyState);
        return readyState === 'complete';
    }, { timeout: 5000 });
    
    const kassaWindow = await $('#my-kassa')
    expect(kassaWindow).isDisplayed(true);
})

Then("Проверяю, что статус ELITE существует и содержит текст ELITE", async () => {
    await browser.waitUntil(async () => {
        const readyState = await browser.execute(() => document.readyState);
        return readyState === 'complete';
    }, { timeout: 5000 });
    
    const statusElite = await $('//*[@id="contentBox"]/div[4]/div/div[7]/div[1]/div/p')
    const textStatusElite = await statusElite.getText()
    expect(statusElite).toExist()
    expect(textStatusElite).toEqual('ELITE')
})

Then("Проверяю наличие турнира с названием ROXSTARS", async () => {
    await browser.waitUntil(async () => {
        const readyState = await browser.execute(() => document.readyState);
        return readyState === 'complete';
    }, { timeout: 8000 });
    
    const tournamentBlock = await $('//*[@id="contentBox"]/div[4]/div/div');
    const desiredTournament = await tournamentBlock.$('div[data-tournament="roxstars"]');
    const text = await desiredTournament.getAttribute('data-tournament');
    expect(text).toContain('roxstars');
})

Then("Проверяю наличие бонуса ко дню рождения", async () => {
    await browser.waitUntil(async () => {
        const readyState = await browser.execute(() => document.readyState);
        return readyState === 'complete';
    }, { timeout: 8000 });
    
    const birthdayTitle = await $('//*[@id="birthday"]/div/div/div[1]/div')
    const birthdayText = await (birthdayTitle).getText()
    const expectedSubtext = "ПОДАРОК НА ДЕНЬ РОЖДЕНИЯ ДО"
    const conatainerBonus = await $('//*[@id="birthday"]/div/div/div[3]')
    expect(conatainerBonus).toExist
    expect(birthdayText).toContain(expectedSubtext)
})

Then("Проверяю наличие кнопки Узнать больше и проверяю правильность ссылки", async () => {
    await browser.waitUntil(async () => {
        const readyState = await browser.execute(() => document.readyState);
        return readyState === 'complete';
    }, { timeout: 8000 });
    
    const MoreButton = await $('//*[@id="contentBox"]/div[4]/div/div[2]/div/div/div[2]/a')
    const textMoreButton = await MoreButton.getText()
    const linkMoreButton = await MoreButton.getAttribute('href')
    expect(MoreButton).toHaveAttr('href')
    expect(linkMoreButton).toContain('/lottery/rox-chart-eur');
    expect(textMoreButton).toEqual('УЗНАТЬ БОЛЬШЕ')
})

Then("Проверяю наличие блока кэшбэка с текстом", async () => {
    await browser.waitUntil(async () => {
        const readyState = await browser.execute(() => document.readyState);
        return readyState === 'complete';
    }, { timeout: 8000 });
    
    const cashbackTitle = await $('//*[@id="contentBox"]/div[4]/h3')
    const classCashbackTitle = await cashbackTitle.getText()
    expect(classCashbackTitle).toEqual('КАК ПОЛУЧИТЬ КЕШБЭК?')
    const cashbackFullContainer = await $('//*[@id="contentBox"]/div[4]/div[3]')
    await cashbackFullContainer.isDisplayed(true)
    const firstTextBlock = await $('//*[@id="contentBox"]/div[4]/div[3]/p[1]')
    await firstTextBlock.isDisplayed(true)
    const secondTextBlock = await $('//*[@id="contentBox"]/div[4]/div[3]/p[2]')
    await secondTextBlock.isDisplayed(true)
})

Then("Проверяю наличие 2-х любых новостей", async () => {
    await browser.waitUntil(async () => {
        const readyState = await browser.execute(() => document.readyState);
        return readyState === 'complete';
    }, { timeout: 8000 });
    
    const firstNews = await $('//*[@id="contentBox"]/div[4]/div/div/div[1]')
    expect(firstNews).toExist()
    const firstNewsTitle = await $('//*[@id="contentBox"]/div[4]/div/div/div[1]/div[1]')
    const firstNewsText = await firstNewsTitle.getText()
    const firstNewsClass = await firstNewsTitle.getAttribute('class')
    expect(firstNewsText).toBeTruthy()
    expect(firstNewsClass).toBeTruthy()
    const secondNews = await $('//*[@id="contentBox"]/div[4]/div/div/div[2]')
    expect(secondNews).toExist()
    const secondNewsTitle = await $('//*[@id="contentBox"]/div[4]/div/div/div[2]/div[1]')
    const secondNewsText = await secondNewsTitle.getText();
    const secondNewsClass = await secondNewsTitle.getAttribute('class');
    expect(secondNewsText).toBeTruthy()
    expect(secondNewsClass).toBeTruthy()
})

Then("Проверяю наличие 2-х любых активных и 2-х любых завершенных акций", async () => {
    await browser.waitUntil(async () => {
        const readyState = await browser.execute(() => document.readyState);
        return readyState === 'complete';
    }, { timeout: 8000 });
    
    const firstActionName = await $('//*[@id="contentBox"]/div[4]/div/div[1]/div[1]/div[1]')
    const firstActionText = await (firstActionName).getText()
    expect(firstActionText).toExist
    expect(firstActionText).toBeDisplayed
    const secondActionName = await $('//*[@id="contentBox"]/div[4]/div/div[1]/div[2]/div[1]')
    const secondActionText = await (secondActionName).getText()
    expect(secondActionText).toExist
    expect(secondActionText).toBeDisplayed
    const firstEndedActionName = await $('//*[@id="contentBox"]/div[4]/div/div[3]/div[1]/div[1]')
    const firstdActionEndedText = await (firstEndedActionName).getText()
    expect(firstdActionEndedText).toExist
    expect(firstdActionEndedText).toBeDisplayed
    const secondEndedActionName = await $('//*[@id="contentBox"]/div[4]/div/div[3]/div[2]/div[1]')
    const secondActionEndedText = await (secondEndedActionName).getText()
    expect(secondActionEndedText).toExist
    expect(secondActionEndedText).toBeDisplayed
})

Then("Элемент промо отображается", async () => {
    const promoButtonDisplay = await $('/html/body/div[10]/div[1]/div[2]/div[2]/div[3]/div/ul/li[6]/a')
    await promoButtonDisplay.isDisplayed(true)
    await browser.waitUntil(async () => {
        const readyState = await browser.execute(() => document.readyState);
        return readyState === 'complete';
    }, { timeout: 8000 });
})

Then("Касса отображается", async () => {
    const mykassaDisplayed = await $('//*[@id="profile"]')
    await mykassaDisplayed.isDisplayed(true)
    await browser.waitUntil(async () => {
        const readyState = await browser.execute(() => document.readyState);
        return readyState === 'complete';
    }, { timeout: 8000 });
})
