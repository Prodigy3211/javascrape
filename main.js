const puppeteer = require("puppeteer");

async function scrapeProduct(url){
    const browser = await puppeteer.launch({
        // executablePath: 'node/modules/chromium-bidi/lib'
        //  args: ["--no-sandbox", "--disabled-setupid-sandbox"],
    });
    const page = await browser.newPage();
    await page.goto(url, {waitUntil: 'networkidle0'});

    const [el] = await page.$$('#root > div > div > div.eds-structure__body > div > div > div > div.eds-fixed-bottom-bar-layout__content > div > main > div.event-listing.event-listing--has-image > div.event-details.event-details--has-hero-section > div.event-details__wrapper > div.Layout-module__layout___1vM08 > div.Layout-module__module___2eUcs.Layout-module__mainContent___1b1nj > div.Layout-module__module___2eUcs.Layout-module__title___2YUKj > div > h1');
    const txt = await el.getProperty('textContent');
    const rawTxt = await txt.jsonValue();

    console.log(rawTxt);
    browser.close();
}

scrapeProduct('https://www.eventbrite.com/e/afro-caribbean-rooftop-party-tickets-143005871411')