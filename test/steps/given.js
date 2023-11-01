import { Given } from '@wdio/cucumber-framework'
import { browser } from '@wdio/globals'


Given ("Я нахожусь на сайте ROX, мастер", async () => {
    await browser.url('https://roxcasino4053.com/')
    await browser.waitUntil(async () => {
        const readyState = await browser.execute(() => document.readyState);
        return readyState === 'complete';
    }, { timeout: 8000 });
})