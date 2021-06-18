const puppeteer = require('puppeteer');

async function scrapeDoge(url){
    const browser = await puppeteer.launch({
        headless: true,
    });
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('//*[@id="quote-header-info"]/div[3]/div[1]/div/span[1]');
    const doge = await el.getProperty('textContent');
    const dogePrice = await doge.jsonValue();

    browser.close();

    return dogePrice;
}

module.exports = scrapeDoge;