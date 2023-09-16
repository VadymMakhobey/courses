import { expect } from '@wdio/globals'


describe('Webdriverio main page', () => {
    xit('should have correct title', async () => {
        await browser.url('https://webdriver.io/');

        const title = await browser.getTitle()
        console.log(title);

        await expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO')
    });

    xit("should show addCalue command", async () => {
        await browser.url('https://the-internet.herokuapp.com/login');
    
        let input = await $("#username")
        await input.addValue("hello")
        await browser.pause(2000)
    
        await input.addValue(123)
        await browser.pause(2000)
        
        console.log(await input.getValue())
        await expect(input).toHaveValue("hello123")
    });

    xit("should show setValue command", async () => {
        await browser.url('https://the-internet.herokuapp.com/login');

        let input = await $("#username")
        await input.setValue("world")
        await input.setValue("hello")
        await browser.pause(2000)

        console.log(await input.getValue())
        await expect(input).toHaveValue("hello")
    });

    xit("should show setValue command", async () => {
        await browser.url('https://the-internet.herokuapp.com/login');

        let loginButton = await $('.radius')
        await browser.pause(2000)
        await loginButton.click()
        await browser.pause(4000)

        let inputUsername = await $("#username")
        await inputUsername.addValue("tomsmith")
        await browser.pause(2000)

        let inputPassword = await $("#password")
        await inputPassword.addValue("SuperSecretPassword!")
        await browser.pause(2000)

        await loginButton.click()
        await browser.pause(4000)

    });

    xit("should show getAttribute comand", async ( ) =>{
        await browser.url('https://dou.ua/search');

        let inputSearch = await $('#gsc-i-id1')
        let attr = await inputSearch.getAttribute("aria-label")
        console.log("Placeholder attribute is: "+ attr)

        await inputSearch.setValue("Cat")
        attr = await inputSearch.getValue()
        await browser.pause(2000)
        console.log("Value attribute is: " + attr)
    });

    xit("should show getLocation command", async () => {
        await browser.url('https://dou.ua');

        let inputSearch = await $('#txtGlobalSearch')
        let location = await inputSearch.getLocation()
        console.log("Location is: " + location )

        let xLocation = await inputSearch.getLocation("x")
        console.log("Location by x is:" + xLocation)

    });

    xit("should show getText command", async () => {
        await browser.url('https://webdriver.io');

        let subtitle = await $('.hero__subtitle')
        console.log("Subtitle text is: " + await subtitle.getText())
    });

    xit("should show if an element is clickable", async () =>{
        await browser.url('https://webdriver.io');

        const blogButton = await $('.button[href="/docs/gettingstarted"]')
        let clickable = await blogButton.isClickable()
        console.log("Is clickable: " + clickable)

    });

    xit("should show if an element is displayed", async () =>{
        await browser.url('https://webdriver.io');

        const blogButton = await $('.button[href="/docs/gettingstarted"]')
        let displayed = await blogButton.isDisplayed()
        console.log("Is Displayed: " + displayed)

    });

    xit("should show if an element is visible", async () =>{
        await browser.url('https://webdriver.io');

        const blogButton = await $('.button[href="/docs/gettingstarted"]')
    
        let displayedInViewport  = await blogButton.isDisplayedInViewport()
        console.log("Is blog button displayed in viewport: " + displayedInViewport)

    });

    it("should show if an element is enabled", async () =>{
        await browser.url('https://webdriver.io');

        const getStartedButton = await $('.button[href="/docs/gettingstarted"]')
    
        let isEnabled  = await getStartedButton .isDisplayedInViewport()
        console.log("Is get started button enabled: " + isEnabled)
    });
    it("should show if an element is focused", async () =>{
        await browser.url('https://webdriver.io');

        const getStartedButton = await $('.button[href="/docs/gettingstarted"]')
    
        let isFocused  = await getStartedButton .isFocused()
        console.log("Is get started button focused before click: " + isFocused)
        await browser.pause(2000)
        await getStartedButton.click()
        console.log("Is get started button focused after click: " + isFocused)
        await browser.pause(2000)

    });

    it("should show if an element is enabled action", async () =>{
        await browser.url('https://webdriver.io');

        const getStartedLink = await $('.footer__link-item[href="/docs/gettingstarted"]')
        await browser.pause(2000)
        await getStartedLink.scrollIntoView()
        await  browser.pause(2000)
    });


});



