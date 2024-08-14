const puppeteer = require("puppeteer")

async function scrapeProduct(url){
    const browser = await puppeteer.launch({
        // executablePath: 'node/modules/chromium-bidi/lib'
         args: ["--no-sandbox", "--disabled-setupid-sandbox"],
    });
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('//*[@id="root"]/div/div/div[2]/div/div/div/div[1]/div/main/div[1]/div[1]/div[2]/div[2]/div[1]/div[6]/div/h1//*[@id="imgBlkFont"]');
    const src = await el.getProperty('src');
    const srcTxt = await src.jsonValue();

    console.log(srcTxt);
}

scrapeProduct('https://www.eventbrite.com/e/afro-caribbean-rooftop-party-tickets-143005871411?aff=ebdssbdestsearch')