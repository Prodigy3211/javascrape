const puppeteer = require('puppeteer');

async function scraperTest(url) {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto(url);
    
    const [eventData] = await page.$$('#panel0 > div > div > div > div');
    const txt = await eventData.getProperty('textContent');
    const  title = await txt.jsonValue(); 
    const jsonTitle = await JSON.stringify(title);
    console.log(jsonTitle);
    browser.close();
    }

scraperTest('https://www.eventbrite.com')
    

