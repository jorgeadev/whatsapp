import { startChat } from "./chat";
import puppeteer from "puppeteer-core";
import { puppeteerOptions } from "./puppeteer-options";
import { config } from "./config";
import { rainbow } from "gradient-string";
import logSymbols from "log-symbols";
import { styleText } from "node:util";

export const task = async (user: string, message: string) => {
	console.log("Cron job running at ", new Date().toLocaleString());
	const browser = await puppeteer.launch(puppeteerOptions);
	const page = await browser.newPage();
	await page.setUserAgent(config.userAgent);
	await page.setViewport({ width: config.windowWidth, height: config.windowHeight });
	await page.setRequestInterception(true);
	
	page.on("request", (request) => {
		request.continue();
	});
	
	// close browser on exit
	process.on("SIGINT", () =>
		browser
			.close()
			.then(() => process.exit(0))
			.catch(() => process.exit(0))
	);
	
	console.log(rainbow("Initializing...\n"));
	
	await page.goto("https://web.whatsapp.com", {
		waitUntil: "networkidle2",
		timeout: 0
	}).then(async function() {
		const title = await page.evaluate(() => {
			const nodes = document.querySelectorAll(".window-title");
			const el = nodes[nodes.length - 1];
			return el ? el.innerHTML : "";
		});
		
		// this means browser upgrade warning came up for some reason
		if (title && title.includes("Google Chrome 36+")) {
			console.log(logSymbols.error, styleText("red", "Could not open whatsapp web, most likely got browser upgrade message...."));
			process.exit();
		}
		
		await startChat(page,user, message);
	});
};