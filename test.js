const puppeteer = require('puppeteer');
const fs = require('fs/promises');

async function scraperTest(url) {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto(url);
    
    const [eventData] = await page.$$('#root > div > div.eds-structure__body.eds-structure__body--overflow-set > div > div > div > div.eds-fixed-bottom-bar-layout__content > div');
    const txt = await eventData.getProperty('textContent');
    const  title = await txt.jsonValue(); 
    const jsonTitle = JSON.stringify(title);
    await fs.writeFile("title.json",jsonTitle);
    const[screenshoter] = await page.screenshot('PNG');

    console.log(jsonTitle);
    browser.close();
    }

scraperTest('https://www.eventbrite.com')
    

