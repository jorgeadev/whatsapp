import { config } from "./config";
// import { findChrome } from "./find-chrome";
import path from "node:path";

// const executablePath = findChrome().pop();
const executablePath = "C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe";
const headless = config.window;
const tmpPath = path.resolve(__dirname, config.dataDir);
console.log("tmpPath", tmpPath);

export const puppeteerOptions = {
	headless: headless,
	executablePath: executablePath,
	defaultViewport: { width: config.windowWidth, height: config.windowHeight },
	userDataDir: tmpPath,
	devtools: false,
	handleSIGINT: false,
	ignoreHTTPSErrors: true,
	args: [
		"--log-level=3", // fatal only
		"--start-maximized",
		"--no-default-browser-check",
		"--disable-infobars",
		"--no-experiments",
		"--ignore-gpu-blacklist",
		"--disable-gpu",
		"--disable-extensions",
		"--disable-default-apps",
		"--enable-features=NetworkService",
		`--window-size=${ config.windowWidth + 100 },${ config.windowHeight + 100 }`,
		"--no-first-run",
		// "--no-startup-window"
	],
	ignoreDefaultArgs: ["--enable-automation"],
};