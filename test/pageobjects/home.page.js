const { delay } = require('../helper/delayHelper'); 
const waitUtils = require('../helper/waitUntils'); 

class HomePage {
    get fieldName(){
        return $('//*[@resource-id="com.fghilmany.dietmealapp:id/et_name"]')
    }
    
    get fieldWeight(){
        return $('//*[@resource-id="com.fghilmany.dietmealapp:id/et_weight"]')
    }
    get fieldHeight(){
        return $('//*[@resource-id="com.fghilmany.dietmealapp:id/et_height"]')
    }
    get fieldGenderMale(){
        return $('//*[@resource-id="com.fghilmany.dietmealapp:id/rb_male"]')
    }
    get fieldGenderFemale(){
        return $('//*[@resource-id="com.fghilmany.dietmealapp:id/rb_female"]')
    }
    get btnNext(){
        return $('//*[@resource-id="com.fghilmany.dietmealapp:id/bt_next"]')
    }
    get radioBtnAktivitas() {
        return $('//*[@resource-id="com.fghilmany.dietmealapp:id/rb_low_to_medium"]')
    }
    get btnFinish(){
        return $('//*[@resource-id="com.fghilmany.dietmealapp:id/bt_finish"]')
    }

    async clickName(keyword){
        await waitUtils.waitUntilElementExist(this.fieldName);
        await this.fieldName.setValue(keyword);
        delay(500);
    }
    async clickWeight(keyword){
        await waitUtils.waitUntilElementExist(this.fieldWeight);
        await this.fieldWeight.setValue(keyword);
        delay(500);
    }
    async clickHeight(keyword){
        await waitUtils.waitUntilElementExist(this.fieldHeight);
        await this.fieldHeight.setValue(keyword);
        delay(500);
    }
    async clickGenderMale(){
        await waitUtils.waitUntilElementExist(this.fieldGenderMale);
        await this.fieldGenderMale.click();
        delay(500);
    }
    async clickbtnNext(){
        await waitUtils.waitUntilElementExist(this.btnNext);
        await this.btnNext.click();
        delay(500);
    }
    async clickRadioBtnAktivitas(){
        await waitUtils.waitUntilElementExist(this.radioBtnAktivitas);
        await this.radioBtnAktivitas.click();
        delay(500);
    }
    async clickSelesai() {
        await waitUtils.waitUntilElementExist(this.btnFinish);
        await this.btnFinish.click();
        delay(500);
    }

}
module.exports = new HomePage()