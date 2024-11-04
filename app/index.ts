import { setUpLogger } from "./logger";
import path from "node:path";
import { cronTime, jobFactory, print } from "./utils";
import boxen from "boxen";

(async function main() {
	const logger = setUpLogger(path.basename(__filename));
	const yelena = "My Love";
	const jose = "Jose Cabrera { Chefle }";
	
	print({ message: boxen("WhatsApp Auto Messenger", { padding: 1, borderStyle: "double", borderColor: "green", backgroundColor: "green" }), color: "magentaBright" });
	
	try {
		jobFactory(
			jose,
			"Buenos dias Chefle, como esta la timba por alla, como va la vuena vida tuya",
			cronTime(0, 59, 7, 9)
		);
		
		jobFactory(
			jose,
			"Buenas tarde Chefle, que inventas, como esta todo por ahi",
			cronTime(0, 59, 12, 14)
		);
		
		jobFactory(
			jose,
			"Buenas noches Chefle, como esta ca cosa por ahi, les pusieron algo de corriente hoy",
			cronTime(0, 59, 18, 20)
		);
		
		jobFactory(
			yelena,
			"Good morning my love, how are you doing today, how was your night",
			cronTime(42, 42, 4, 4)
		);
	} catch (error) {
		logger.error(error);
	}
})();

