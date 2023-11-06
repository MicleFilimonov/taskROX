import { Given } from '@wdio/cucumber-framework'
import roxPage from '../../pageObject/RoxPage.js'

Given ("Я нахожусь на сайте ROX", async () => {
    await roxPage.visit()
})