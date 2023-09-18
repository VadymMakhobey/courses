import { expect } from '@wdio/globals'


describe('Webdriverio main page', () => {
    

    xit("should check that the pop-up window is showing", async () =>{
        await browser.url('https://github.com/');
        await browser.pause(2000)
        const link = await $('[class="HeaderMenu-link border-0 width-full width-lg-auto px-0 px-lg-2 py-3 py-lg-2 no-wrap d-flex flex-items-center flex-justify-between js-details-target"]')
        await link.moveTo()
        await browser.pause(2000)
        let link1 = await $('[class="HeaderMenu-dropdown dropdown-menu rounded m-0 p-0 py-2 py-lg-4 position-relative position-lg-absolute left-0 left-lg-n3 d-lg-flex dropdown-menu-wide"]')
        let check = await link1.isDisplayed()
        console.log("available: " + check)
        await browser.pause(1000)
        

    });

});


