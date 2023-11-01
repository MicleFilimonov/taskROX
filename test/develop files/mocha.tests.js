import { expect, browser } from '@wdio/globals'

describe('Страница промо', () => {
    it('и проверка статуса ELITE', async () => {
        // Открываю сайт ROX (мастер)
        await browser.url('https://roxcasino4053.com/')

        // Нахожу элемент, на который нужно навести курсор (промо)
        const promoButton = await $('/html/body/div[10]/div[1]/div[2]/div[2]/div[3]/div/ul/li[6]/a')

        // Навожу курсор на элемент (промо)
        await promoButton.moveTo()

        browser.pause(3000)

        // Нажимаю на "статусы" в дродауне
        const statusButtonDrpodown = await $('/html/body/div[10]/div[1]/div[2]/div[2]/div[3]/div/ul/li[6]/ul/li[1]/a')
        await statusButtonDrpodown.click()

        // Нахожу статус ELITE и проверяю, что он существует и содержит текст "ELITE" 
        const statusElite = await $('//*[@id="contentBox"]/div[4]/div/div[7]/div[1]/div/p')
        const textStatusElite = await statusElite.getText()

        // Ожидаю, что запрашиваемый элемент сущетсвует
        expect(statusElite).toExist()

        // Ожидаю, что в элементе href будет содержаться текст 'ELITE'
        expect(textStatusElite).toEqual('ELITE')

    })

    it('и проверка наличия турнира ROXSTARS', async () => {

        browser.pause(5000)

        // Нахожу элемент, на который нужно навести курсор (промо)
        const promoButton = await $('/html/body/div[10]/div[1]/div[2]/div[2]/div[3]/div/ul/li[6]/a')

        // Навожу курсор на элемент (промо)
        await promoButton.moveTo()

        browser.pause(2000)

        // Нажимаю на "турниры" в дропауне
        const statusButtonDrpodown = await $('/html/body/div[10]/div[1]/div[2]/div[2]/div[3]/div/ul/li[6]/ul/li[2]/a')
        await statusButtonDrpodown.click()

        // Так как общие контейнеры, в которых лежат элементы с турнирами недоступны для взаимодействия (невидимы, перекрыты или недоступны)
        //  вплоть до выбора конкретного через Select Element в devtools, я решил добираться до них через сохранения в переменные 

        browser.pause(5000)

        // await browser.debug(30000)
        const tournamentBlock = await $('//*[@id="contentBox"]/div[4]/div/div');

        const desiredTournament = await tournamentBlock.$('div[data-tournament="roxstars"]');

        const text = await desiredTournament.getAttribute('data-tournament');

        // Проверка с использованием expect
        expect(text).toContain('roxstars');
    })

    it('и бонуса ко дню рождения', async () => {
        // Открываю сайт ROX (мастер)
        await browser.url('https://roxcasino4053.com/')

        // Нахожу элемент, на который нужно навести курсор (промо)
        const promoButton = await $('/html/body/div[10]/div[1]/div[2]/div[2]/div[3]/div/ul/li[6]/a')

        // Навожу курсор на элемент (промо)
        await promoButton.moveTo()

        browser.pause(2000)

        // Нажимаю на "бонусы" в дропдауне
        const statusButtonDrpodown = await $('/html/body/div[10]/div[1]/div[2]/div[2]/div[3]/div/ul/li[6]/ul/li[3]/a')
        await statusButtonDrpodown.click()

        const birthdayTitle = await $('//*[@id="birthday"]/div/div/div[1]/div')
        
        const birthdayText = await (birthdayTitle).getText()

        const expectedSubtext = "ПОДАРОК НА ДЕНЬ РОЖДЕНИЯ ДО"

        const rubCurrencyElement = await $('//*[@id="birthday"]/div/div/div[1]/div/span[1]')

        const rubCurrencyText = await rubCurrencyElement.getText()

        // Ожидаю, что в заголовке будет содержаться текст 'ПОДАРОК на ДЕНЬ РОЖДЕНИЯ ДО 20000'
        expect(birthdayText).toContain(expectedSubtext + ' ' + rubCurrencyText )
        
        expect(birthdayText).toExist()
        expect(rubCurrencyText).toExist()
        
        expect(birthdayText).toContain('ПОДАРОК НА ДЕНЬ РОЖДЕНИЯ ДО')
        expect(rubCurrencyText).toContain('₽')
        expect(rubCurrencyText).toContain('20 000')

    })

    it('и кнопки "Узнать больше" в лотереях', async () => {
        // Открываю сайт ROX (мастер) 
        await browser.url('https://roxcasino4053.com/')

        // Нахожу элемент, на который нужно навести курсор (промо)
        const promoButton = await $('/html/body/div[10]/div[1]/div[2]/div[2]/div[3]/div/ul/li[6]/a')
        
        // Навожу курсор на элемент (промо)
        await promoButton.moveTo()

        browser.pause(2000)

        // Нажимаю на "лоттереи" в дродауне
        const statusButtonDrpodown = await $('/html/body/div[10]/div[1]/div[2]/div[2]/div[3]/div/ul/li[6]/ul/li[4]/a')
        await statusButtonDrpodown.click()

        const MoreButton = await $('//*[@id="contentBox"]/div[4]/div/div[2]/div/div/div[2]/a')
        const textMoreButton = await MoreButton.getText()
        const linkMoreButton = await MoreButton.getAttribute('href')

        // Ожидаю, что элемент с кнопкой сущетствует
        expect(MoreButton).toExist
        //Ожидаю, что в этом месте будет элемент HTML, который определяет гипер-ссылку
        expect(MoreButton).toHaveHref()

        // Ожидаю, что элемент href будет содержать ссылку, которая ведет на целевую страницу '.../lottery/rox-chart-eur' с большей информацией о лотерее
        expect(linkMoreButton).toContain('/lottery/rox-chart-eur');

        // Ожидаю, что в элементе href будет содержаться текст 'УЗНАТЬ БОЛЬШЕ' 
        expect(textMoreButton).toEqual('УЗНАТЬ БОЛЬШЕ')
        
    })

    it('и проверка наличия блока кэшбэка', async () => {
        // Открываю сайт ROX (мастер) 
        await browser.url('https://roxcasino4053.com/')

        // Нахожу элемент, на который нужно навести курсор (промо)
        const promoButton = await $('/html/body/div[10]/div[1]/div[2]/div[2]/div[3]/div/ul/li[6]/a')
        
        // Навожу курсор на элемент (промо)
        await promoButton.moveTo()

        browser.pause(2000)

        // Нажимаю на "кэшбэк" в дродауне
        const statusButtonDrpodown = await $('/html/body/div[10]/div[1]/div[2]/div[2]/div[3]/div/ul/li[6]/ul/li[5]/a')
        await statusButtonDrpodown.click()

        // Сперва проверяю наличие тайтла с названием 'Как получить Кешбэк' (в указанном названии содержится ошибка - на сайте отображается "Как получить Кэшлбэк" написанное через 'Э')
        const cashbackTitle = await $('//*[@id="contentBox"]/div[4]/h3')
        const classCashbackTitle= await cashbackTitle.getText() 
        expect(classCashbackTitle).toExist()
        expect(classCashbackTitle).toEqual('КАК ПОЛУЧИТЬ КЕШБЭК?')

        // Затем проверяю, что присутствует контейнер, в котором содержится полное описание 
        const cashbackFullContainer = await $('//*[@id="contentBox"]/div[4]/div[3]')
        expect(cashbackFullContainer).toExist()

        // Затем проверяю первый блок текста (что текст существует)
        const firstTextBlock = await $('//*[@id="contentBox"]/div[4]/div[3]')
        const firstTextContent = await firstTextBlock.getText()
        expect(firstTextContent).toExist()

        // Затем проверяю второй блок текста
        const secondTextBlock = await $('//*[@id="contentBox"]/div[4]/div[3]/p[2]')
        const secondTextContent = await secondTextBlock.getText()
        expect(secondTextContent).toExist()

        // // Затем проверяю третий блок текста
        const thirdTextBlock = await $('//*[@id="contentBox"]/div[4]/div[3]/ul')
        const thirdTextContent = await thirdTextBlock.getText()
        expect(thirdTextContent).toExist()
    })

    it('и наличие 2-х любых новостей', async () => {
        // Открываю сайт ROX (мастер) 
        await browser.url('https://roxcasino4053.com/')

        // Нахожу элемент, на который нужно навести курсор (промо)
        const promoButton = await $('/html/body/div[10]/div[1]/div[2]/div[2]/div[3]/div/ul/li[6]/a')
        
        // Навожу курсор на элемент (промо)
        await promoButton.moveTo()

        browser.pause(3000)
        // Нажимаю на "новости" в дродауне
        const statusButtonDrpodown = await $('/html/body/div[10]/div[1]/div[2]/div[2]/div[3]/div/ul/li[6]/ul/li[6]/a')
        await statusButtonDrpodown.click()

        // await browser.debug(30000);

        // Проверка первой новости в структуре на наличие 
        const firstNews = await $('//*[@id="contentBox"]/div[4]/div/div/div[1]')
        expect(firstNews).toExist()
        
        // Дпоплнительные проверки на то, что у первого элемента в дереве есть класс и текст 
        const firstNewsTitle = await $ ('//*[@id="contentBox"]/div[4]/div/div/div[1]/div[1]')
        const firstNewsText = await firstNewsTitle.getText()
        const firstNewsClass = await firstNewsTitle.getAttribute('class')

        expect (firstNewsText).toBeTruthy()
        expect (firstNewsClass).toBeTruthy()
       
        // await browser.debug(30000)


        // Проверка второй новости в структуре на наличие 
        const secondNews = await $('//*[@id="contentBox"]/div[4]/div/div/div[2]')
        expect(secondNews).toExist()
        
        // Дпоплнительные проверки на то, что у второго элемента в дереве есть класс и текст 
        const secondNewsTitle = await $ ('//*[@id="contentBox"]/div[4]/div/div/div[2]/div[1]')
        const secondNewsText = await secondNewsTitle.getText();
        const secondNewsClass = await secondNewsTitle.getAttribute('class');
        
        expect (secondNewsText).toBeTruthy()
        expect (secondNewsClass).toBeTruthy()
        
    })

    it('и наличие 2-х любых активных и 2-х любых завершенных акций', async () => {
        // Открываю сайт ROX (мастер) 
        await browser.url('https://roxcasino4053.com/')

        // Нахожу элемент, на который нужно навести курсор (промо)
        const promoButton = await $('/html/body/div[10]/div[1]/div[2]/div[2]/div[3]/div/ul/li[6]/a')

        // Навожу курсор на элемент (промо)
        await promoButton.moveTo()

        browser.pause(3000)
        // Нажимаю на "акции" в дродауне
        const statusButtonDrpodown = await $('/html/body/div[10]/div[1]/div[2]/div[2]/div[3]/div/ul/li[6]/ul/li[7]/a')
        await statusButtonDrpodown.click()

        // Проверка наличия первой активной акции 
        // Получение первого заголовка, его класс, текст и сам элемент

        // await browser.debug(30000)

        // Получение элемента и текста названия первой активной акции 
        const firstActionName = await $('//*[@id="contentBox"]/div[4]/div/div[1]/div[1]/div[1]')
        const firstActionText = await (firstActionName).getText()

        // Проверка, что заголовок - существует
        expect (firstActionText).toExist
        expect (firstActionText).toBeDisplayed

        // await browser.debug(30000)

        // Проверка наличия второй активной акции 
        // Получение элемента названия акции и текста в нем  

        // await browser.debug(30000)

        const secondActionName = await $('//*[@id="contentBox"]/div[4]/div/div[1]/div[2]/div[1]')
        const secondActionText = await (secondActionName).getText()

        // Проверка, что заголовок - существует
        expect (secondActionText).toExist
        expect (secondActionText).toBeDisplayed

        // Проверка первой завершенной акции 
        // Получение элемента названия акции и текста в нем  
        const firstEndedActionName = await $('//*[@id="contentBox"]/div[4]/div/div[3]/div[1]/div[1]')
        const firstdActionEndedText = await (firstEndedActionName).getText()

        // Проверка, что заголовок - существует
        expect (firstdActionEndedText).toExist
        expect (firstdActionEndedText).toBeDisplayed

        // Проверка второй завершенной акции 
        // Получение элемента названия акции и текста в нем  
        const secondEndedActionName = await $('//*[@id="contentBox"]/div[4]/div/div[3]/div[2]/div[1]')
        const secondActionEndedText = await (secondEndedActionName).getText()

        // Проверка, что заголовок - существует
        expect (secondActionEndedText).toExist
        expect (secondActionEndedText).toBeDisplayed

    })

})


describe('Авторизация на сайте', () => {

    it('и отображение кассы', async () => {

        await browser.url(`https://roxcasino4053.com/`)

        // Здесь кликаю на "Вход"
        await $('#headLine > div:nth-child(1) > div > div > div:nth-child(2) > div').click()

        // Ввожу почту в форму авторизации
        await $('#registr-email').setValue('m.filimonov+2@jetmail.cc')

        // Ввожу пароль в форму авторизации
        await $('#signinPopup > div.js-constructor-container > div.new-input.new-modal__input-image.image-password.js-input-wrapper > input').setValue('Qwertyui')

        // Нажимаю кнопку "Войти" в форме атворизации 
        await $('//*[@id="signinPopup"]/div[5]/input').click()


        browser.waitUntil(() => {
            return browser.execute(() => document.readyState === 'complete')
        }, { timeout: 5000 })

        // Ожидание отображения поп-апа кассы (содержит active в классе HTML)
        const classAttribute = await $('#my-kassa').getAttribute('class');
        expect(classAttribute.includes('active')).toBe(true);

    })

    it('и проверка, что почта подтверждена', async () => {

        await $('//*[@id="my-profile"]').click()

        // Получаю нужный элемент, в котором отображается статус почты
        const emailConfirm = await $('//*[@id="form-save-profile"]/div[1]/div/div[1]/div[1]/form/p[1]/span[2]')

        // Проверяю, что элемент существует
        expect(emailConfirm).toExist

        // Получаю текст, который приходит в этом элементе
        const emailConfirmValue = await emailConfirm.getText()

        // Проверяю, что полученный из элемента текст равен ожидаемому - в случае теста - Подтверждена
        expect(emailConfirmValue).toEqual('Подтверждена')

    })

    it('и проверка, что статус пользователя - New', async () => {

        // Получаю нужный элемент, в котором отображается статус
        const statusNew = await $('//*[@id="form-save-profile"]/div[1]/div/div[1]/div[3]/div/div/p/span[2]')

        // Проверяю, что элемент существует 
        expect(statusNew).toExist

        // Получаю текст, который приходит в этом элементе
        const statusNewValue = await statusNew.getText()

        // Проверяю, что полученный из элемента текст равен ожидаемому - в случае теста - NEW
        expect(statusNewValue).toEqual('New')

    })

})


// // features/steps/sampleSteps.js

