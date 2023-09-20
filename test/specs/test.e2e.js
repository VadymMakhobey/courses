import {expect} from '@wdio/globals'
import Pagemenu from "./../pages/main.pages.js"
import Fillingthesite from "../pages/text.pages.js"

describe ("Webdriverio main page",() => {
    it("should show whether the site is filled with text", async () => {
        await browser.url('https://dou.ua/');

        await Pagemenu.clickOnSalaryhref()
        await browser.pause(2000)

        expect (Fillingthesite.salary).toHaveValue( "I Квартиль")

        await Pagemenu.clickOnWork()
        await browser.pause(2000)
       
        expect (Fillingthesite.battunwork).toBeDisplayed( "Знайти")
        await browser.pause(2000)

        await Fillingthesite.clickOnSalaryhref()
        await browser.pause(2000)

        expect (Fillingthesite.transitiontext).toHaveValue( "Швидкий перехід:")

        await Pagemenu.clickOnRelocayt()
        await browser.pause(2000)


        expect (Fillingthesite.news).toHaveValue( "Новини")
        expect (Fillingthesite.blohs).toHaveValue( "Блоги")
        expect (Fillingthesite.popularontheforum).toHaveValue( "Популярне на форумі")
    
        

    });
});





