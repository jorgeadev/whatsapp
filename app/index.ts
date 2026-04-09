import { setUpLogger } from "./logger";
import path from "node:path";
import { cronTime, jobFactory, print } from "./utils";
import boxen from "boxen";

(async function main() {
	const logger = setUpLogger(path.basename(__filename));
	const name = "Contact Name";

	print({ message: boxen("WhatsApp Auto Messenger", { padding: 1, borderStyle: "double", borderColor: "green", backgroundColor: "green" }), color: "magentaBright" });

	const nameTest = cronTime(11, 11, 23, 23); // 11:11 PM

	try {
		jobFactory(name, "Buenos dias Chefle, como esta la timba por alla, como va la vuena vida tuya", nameTest);
	} catch (error) {
		logger.error(error);
	}
})();

