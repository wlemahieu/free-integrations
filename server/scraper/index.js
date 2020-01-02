// Credit goes to Bruce Wilcox & Sue Wilcox over at Brillig Understanding, Inc.
// http://brilligunderstanding.com/aboutus.html
// Their AI Bot named Rose had the most interested conversational responses out of most the bots I tested.
// http://brilligunderstanding.com/rosedemo.html

import puppeteer from 'puppeteer';

const roseUrl = 'http://ec2-54-215-197-164.us-west-1.compute.amazonaws.com/speech.php';

const extractRoseText = (text) => {
	return text.split(/\n/)[1].replace('Rose: ', '').trim(); // User is line 1, Rose is line 2, empty line 3.
};

async function scrape (message) {
	// launch browser and visit Rose AI
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(roseUrl);
	// update the message input and submit
	const messageInput = await page.$('#txtMessage');
	await messageInput.click({ clickCount: 3 });
	await messageInput.type(message);
	await page.keyboard.press('Enter', {delay: 1000});
	// extract text response
	const text = await page.evaluate(() => document.querySelector('#responseHolder').innerText);
	const extractedText = extractRoseText(text);
	return extractedText;
};

export default scrape;
