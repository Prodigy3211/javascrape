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