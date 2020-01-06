// Credit goes to Bruce Wilcox & Sue Wilcox over at Brillig Understanding, Inc. (http://brilligunderstanding.com/aboutus.html)
// Their AI Bot script named Rose had the most interested conversational responses out of most the bots I tested. (http://brilligunderstanding.com/rosedemo.html)
// This script talks to Rose through a browser and returns the results here for us to use.
import puppeteer from 'puppeteer';

const roseUrl = 'http://ec2-54-215-197-164.us-west-1.compute.amazonaws.com/speech.php';
const extractRoseText = (text) => {
	return text.split(/\n/)[1].replace('Rose: ', '').trim(); // User is line 1, Rose is line 2, empty line 3.
};

export const rose = async (payload) => {
	try {
		const input = payload.input;
		const name = payload.name;
		// launch browser and visit Rose AI
	  const browser = await puppeteer.launch();
	  const page = await browser.newPage();
	  await page.goto(roseUrl);
		// update the name (to prevent response collisions)
		const userInput = await page.$('#txtUser');
		await userInput.click({ clickCount: 3 });
		await userInput.type(name);
		// update the message input and submit
		const messageInput = await page.$('#txtMessage');
		await messageInput.click({ clickCount: 3 });
		await messageInput.type(input);
		await page.keyboard.press('Enter', {delay: 1000});
		// extract text response
		const text = await page.evaluate(() => document.querySelector('#responseHolder').innerText);
		const extractedText = extractRoseText(text);
		await browser.close();
		return extractedText;
	} catch (e) {
		console.log(e);
	}
};
