import { setUpLogger } from "./logger";

(async function main() {
	console.log("Hello World");
	
	const logger = setUpLogger();
	console.log(logger);
})();