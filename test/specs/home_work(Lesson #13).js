import { expect } from '@wdio/globals'


describe('Webdriverio main page', () => {
    

    it("should show that we can follow this link", async () =>{
        await browser.url('https://webdriver.io/');

        const link = await $('nav a[href="/docs/api"]')
        await link.click()
        await browser.pause(2000)

        const getStartedLink = await $('.footer__link-item[href="/blog"]')
        await browser.pause(2000)
        await getStartedLink.scrollIntoView()
        await browser.pause(2000)
        let isDisplayed = await getStartedLink.isDisplayed()
        console.log("is displayedЖ " + isDisplayed)

        const checkButtun = await $('main a[href="/docs/api/protocols"]')
        await browser.pause(2000)
        let isEnabled = await checkButtun.isEnabled();
        console.log("activ " + isEnabled); //

        await browser.pause(2000)
        let clickable = await checkButtun.isClickable();
        console.log("clickable: " + clickable);

        await browser.pause(2000)

        
        const outerHTML = await checkButtun.getHTML()
        console.log("outerHTML :" + outerHTML)

        await browser.pause(1000)
        await checkButtun.click()

        await browser.pause(2000)

        await browser.waitUntil(async () =>{
            return $('#webdriver-protocol').isDisplayed();

        },5000, "Button is not displayed")

    });

});



