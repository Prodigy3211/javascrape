const puppeteer = require('puppeteer');

async function scraperTest(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    
    const [eventData] = await page.$$('#panel0 > div > div > div > div');
    console.log(eventData);
    const txt = await eventData.getProperty('textContent');
    const  title = await txt.jsonValue(); 
    console.log(title);
    browser.close();
    }

scraperTest('https://www.eventbrite.com')
    

