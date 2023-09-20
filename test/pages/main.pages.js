class Pagemenu {
    get salary() { return $('a[href="https://jobs.dou.ua/salaries/"]')}
    get work() { return $('a[href="https://jobs.dou.ua/"]')}
    get relocayt() { return $('a[href="https://relocate.dou.ua/?from=button"]')}
    
    

    

    async clickOnSalaryhref() {
        await this.salary.click()
    }
    async clickOnWork(){
        await this.work.click()
    }
    async clickOnRelocayt(){
        await this.relocayt.click()
    }

    
} 
export default new Pagemenu()