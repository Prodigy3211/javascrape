const puppeteer = require("puppeteer");

async function scrapeProduct(url){
    const browser = await puppeteer.launch({
        //Activate headless:false for troubleshooting
        headless:false
    });
    const page = await browser.newPage()
    await page.goto(url, {waitUntil: 'networkidle0'})

    const eventData = await page.evaluate((url) => {
        const eventCard  = document.querySelectorAll('.Container_root__4i85v .NestedActionContainer_root__1jtfr .event-card .event-card__vertical .vertical-event-card__action-visibility');
        const data = eventCard.map((event) => ({
            title: event.querySelector('h3').innerText,
            image: url + event.querySelector('img').getAttribute('src'),
            venueName: event.querySelector('p').getAttribute('.Typography_root__487rx #585163 Typography_body-md__487rx event-card__clamp-line--one Typography_align-match-parent__487rx'),
            dateTime: event.querySelector('p').innerText,

    })
    )
    console.log(data);
    return data
    },url)

    console.log(eventData);

    browser.close();
}



scrapeProduct('https://www.eventbrite.com')