import { selectors } from "./selectors";
import { Page } from "puppeteer-core";

export const startChat = async (page: Page, user: string, message: string): Promise<void> => {
	console.log("Starting chat with ", user);
	let userChatSelector = selectors.userChat;
	userChatSelector = userChatSelector.replace("XXX", user);
	
	setTimeout(async () => {
		// search for user
		await page.waitForSelector(selectors.searchBox);
		await page.click(selectors.searchBox);
		// TODO: next line has a deprecated method
		await page.evaluate(() => document.execCommand("selectall", false, undefined));
		await page.keyboard.press("Backspace");
		await page.keyboard.type(user, { delay: 200 });
		
		// select user chat
		await page.waitForSelector(userChatSelector);
		await page.click(userChatSelector);
		
		// cancel search
		await page.waitForSelector(selectors.cancelSearch);
		await page.click(selectors.cancelSearch);
		
		// type message
		await page.click(selectors.chatInput);
		// TODO: next line has a deprecated method
		await page.evaluate(() => document.execCommand("selectall", false, undefined));
		await page.keyboard.type(message, { delay: 100 });
		
		// send message
		await page.keyboard.press("Enter");
		
		// close browser
		setTimeout(async () => {
			await page.browser().close();
		}, 5000);
	}, 5000);
};