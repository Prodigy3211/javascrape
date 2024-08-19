const puppeteer = require("puppeteer");

async function scrapeProduct(url){
    const browser = await puppeteer.launch({
        //Activate headless:false for troubleshooting
        headless:false

        //Below for future iterations only
        // executablePath: 'node/modules/chromium-bidi/lib'
        //  args: ["--no-sandbox", "--disabled-setupid-sandbox"]
    });
    const page = await browser.newPage();
    await page.goto(url, {waitUntil: 'networkidle0'});
    // const [response] = await Promise.all([
    // page.waitForNavigation({waitUntil: 'networkidle0'}),
    // // page.click('<h3 class="Typography_root__487rx #3a3247 Typography_body-lg__487rx event-card__clamp-line--two Typography_align-match-parent__487rx" style="--TypographyColor: #3a3247;">AFRO CARIBBEAN ROOFTOP PARTY</h3>', puppeteer.MouseButton ='left'),
    // ]);
    // await page.click('#panel0 > div > div > div > div > div.SegmentedCarousel-module__trackWrapper___3sLxM.segmented-carousel__track-wrapper > div > div.SegmentedCarousel-module__page___2NbSO.segmented-carousel__page.currentPage > div:nth-child(1) > div > section > div > section > div > a > h3');
    // await page.locator('.loading').wait();
//Collect the title for event
    const [el] = await page.$$('#root > div > div > div.eds-structure__body > div > div > div > div.eds-fixed-bottom-bar-layout__content > div > main > div.event-listing.event-listing--has-image > div.event-details.event-details--has-hero-section > div.event-details__wrapper > div.Layout-module__layout___1vM08 > div.Layout-module__module___2eUcs.Layout-module__mainContent___1b1nj > div.Layout-module__module___2eUcs.Layout-module__title___2YUKj > div > h1');
    const txt = await el.getProperty('textContent');
    const title = await txt.jsonValue();
//collect the image for event
    const [el2] = await page.$$('#root > div > div > div.eds-structure__body > div > div > div > div.eds-fixed-bottom-bar-layout__content > div > main > div.event-listing.event-listing--has-image > div.event-details.event-details--has-hero-section > div.event-hero-wrapper > div > div.css-1vu2yqv.e1kx2rja0 > div > div > div > picture > img');
    const src = await el2.getProperty('src');
    const imageURL = await src.jsonValue();

//collect the Venue for the event
    const[el3] = await page.$$('#root > div > div > div.eds-structure__body > div > div > div > div.eds-fixed-bottom-bar-layout__content > div > main > div.event-listing.event-listing--has-image > div.event-details.event-details--has-hero-section > div.event-details__wrapper > div.Layout-module__layout___1vM08 > div.Layout-module__module___2eUcs.Layout-module__mainContent___1b1nj > div.Layout-module__module___2eUcs.Layout-module__location___-D6BU > section > div > div > div > div.location-info > div');
    const txt2 = await el3.getProperty('textContent');
    const venue = await txt2.jsonValue();

//Collect Date and Time
    const[el4] = await page.$$('#root > div > div > div.eds-structure__body > div > div > div > div.eds-fixed-bottom-bar-layout__content > div > main > div.event-listing.event-listing--has-image > div.event-details.event-details--has-hero-section > div.event-details__wrapper > div.Layout-module__layout___1vM08 > div.Layout-module__module___2eUcs.Layout-module__mainContent___1b1nj > div.Layout-module__module___2eUcs.Layout-module__dateAndTime___2PiHo > section > div > div > div > div:nth-child(2) > div > div > div > span');
    const txt3 = await el4.getProperty('textContent');
    const dateTime = await txt3.jsonValue();

    console.log(title, venue, dateTime, imageURL);
    browser.close();
}



scrapeProduct('https://www.eventbrite.com/e/whitney-houston-adele-tribute-concert-tickets-954298551657')