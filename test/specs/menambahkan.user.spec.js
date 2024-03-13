const Homepage = require('../pageobjects/home.page')

describe('Diet Meal App', () => {
    it('Menambahkan user', async () => {
        await Homepage.clickName('Dicky Anugrah');
        await Homepage.clickWeight('65');
        await Homepage.clickHeight('170');
        await Homepage.clickGenderMale();
        await Homepage.clickbtnNext();
        await Homepage.clickRadioBtnAktivitas();
        await Homepage.clickSelesai();
    }).timeout(300000)
})