import { expect } from '@wdio/globals'


describe('Webdriverio main page', () => {
    

    xit("should check that the pop-up window is showing", async () =>{
        await browser.url('https://github.com/');
        await browser.pause(2000)
        const link = await $('[class="HeaderMenu-link border-0 width-full width-lg-auto px-0 px-lg-2 py-3 py-lg-2 no-wrap d-flex flex-items-center flex-justify-between js-details-target"]');
        await link.moveTo()
        await browser.pause(2000)
        let link1 = await $('[class="HeaderMenu-dropdown dropdown-menu rounded m-0 p-0 py-2 py-lg-4 position-relative position-lg-absolute left-0 left-lg-n3 d-lg-flex dropdown-menu-wide"]');
        let check = await link1.isDisplayed()
        console.log("available: " + check)
        await browser.pause(1000)
        

    });

    xit("should show whether the text is displayed correctly", async () =>{
        await browser.url('https://github.com/');
        await browser.pause(2000)

        let link = await $('[class="HeaderMenu-link HeaderMenu-link--sign-up flex-shrink-0 d-none d-lg-inline-block no-underline border color-border-default rounded px-2 py-1"]');
        await link.click()

        await browser.pause(5000)

        let link1 = await $('h1');
        let check = await link1.isDisplayed()
        console.log("available: " + check)

        await browser.pause(2000)

        let text =  await link1.getText()
        if(text = "Welcome to GitHub! Let's begin the adventure"){
            console.log("text correct: " + text )
        }
        await browser.pause(2000)
    });

    xit("the button must be inactivey", async () =>{
        await browser.url('https://github.com/');
        await browser.pause(2000)

        let link = await $('[class="HeaderMenu-link HeaderMenu-link--sign-up flex-shrink-0 d-none d-lg-inline-block no-underline border color-border-default rounded px-2 py-1"]');
        await link.click()
        await browser.pause(5000)

        let search = await $('#email')
        await search.setValue("Ddasdmcx@dsdf.")
        await browser.pause(2000)

        let button = await $('[class="js-continue-button signup-continue-button form-control px-3 width-full width-sm-auto mt-4 mt-sm-0"]');
        let clickable = await button.isClickable();
        console.log("buttom inactive: " + clickable);
    });

});


