class Fillingthesite {
    get salary() { return $('.item ')}
    get battunwork() { return $('.btn-search')}
    get transitiontext() { return $('.example')}
    get news() { return $('a[href="https://dou.ua/lenta/news/?from=fpnews"]')}
    get blohs() { return $('//*[text()="Блоги"]')}
    get popularontheforum() { return $('a[href="https://dou.ua/forums/?from=fptopics"]')}

    
    async clickOnSalaryhref() {
        await this.battunwork.click()
    }
    
} 
export default new Fillingthesite()

