const puppeteer = require('puppeteer');

async function scrapeDoge(url){
    const browser = await puppeteer.launch({
        headless: false,
    });
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('//*[@id="quote-header-info"]/div[3]/div[1]/div/span[1]');
    const doge = await el.getProperty('textContent');
    const dogePrice = await doge.jsonValue();

    console.log(dogePrice);
    browser.close();

    return dogePrice;
}
scrapeDoge('https://finance.yahoo.com/quote/DOGE-USD?p=DOGE-USD&.tsrc=fin-srch');