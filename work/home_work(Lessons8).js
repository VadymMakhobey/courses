import { expect } from 'chai'; 

describe('Webdriverio main page', () => {
    it('should have correct title', async () => {
        await browser.url('https://webdriver.io/');

        await browser.pause(2000)
        let link = await $('a[href="/docs/api"]');
        await link.click()
        await browser.pause(2000)

        const currentURL = await browser.getUrl();
        if(currentURL == 'https://webdriver.io/docs/api' ){
            console.log("Поточний URL-адрес вірний  ");
        }
        else{
            console.log("Поточа URL-адреса: " + currentURL);
        }
        
        const h1Element = $('h1'); 
        const text = await h1Element.getText();
        if(text == 'Introduction'){
            console.log('Заголовок відповідає дійсності : ' + text); 
        }
        else{
            console.log('Заголовок невідповідає дійсності'); 
        }

        const link2 = await $('a[href="/docs/api/webdriver"]');

        await link2.moveTo();
        await browser.pause(4000);
        
        const tooltipText = await link2.getAttribute('title');
        const currentURL2 = await link2.getAttribute('href');
        if( currentURL2 == '/docs/api/webdriver' ){
            console.log('Посилання вірне підсказска виводиться'); 
        }
        else{
            console.log('Невірне посилання чи невиводиться підсказка' + currentURL2);
        }
        
        console.log("вивід :" + tooltipText);
        
        const tooltipIsDisplayed = await link2.isDisplayed();

        if (tooltipIsDisplayed) {
            console.log('Підказка відображається');
        } else {
            console.log('Підказка не відображається');
        }

        await browser.pause(2000);
        let clickSearch = await $('.DocSearch-Button-Placeholder')
        await clickSearch.click()
        await browser.pause(2000);

        let inputSearch = await $('#docsearch-input')
        await inputSearch.setValue("all is done")
        await browser.pause(2000);

        let clearkSearch = await $('.DocSearch-Reset')
        await clearkSearch.click()
        await browser.pause(1000);
        
    });
});
