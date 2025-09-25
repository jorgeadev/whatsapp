import { setUpLogger } from "./logger";
import path from "node:path";
import { cronTime, jobFactory, print } from "./utils";
import boxen from "boxen";

(async function main() {
	const logger = setUpLogger(path.basename(__filename));
	const yelena = "My Love";
	const jose = "Jose Cabrera { Chefle }";
	
	print({ message: boxen("WhatsApp Auto Messenger", { padding: 1, borderStyle: "double", borderColor: "green", backgroundColor: "green" }), color: "magentaBright" });
	
	const joseMorning =  cronTime(0, 59, 7, 9);
	const joseAfternoon = cronTime(0, 59, 12, 14);
	const joseEvening = cronTime(0, 59, 18, 20);
	const yelenaMorning = cronTime(36, 36, 8, 8);
	const yelenaTest = cronTime(0, 0, 10, 10);
	
	console.log({ joseMorning, joseAfternoon, joseEvening, yelenaMorning });
	
	try {
		jobFactory(jose, "Buenos dias Chefle, como esta la timba por alla, como va la vuena vida tuya", joseMorning);
		
		jobFactory(jose, "Buenas tarde Chefle, que inventas, como esta todo por ahi", joseAfternoon);
		
		jobFactory(jose, "Buenas noches Chefle, como esta ca cosa por ahi, les pusieron algo de corriente hoy", joseEvening);
		
		jobFactory(yelena, "Good morning my love, how are you doing today, how was your night", yelenaMorning);
		
		jobFactory(yelena, "Good morning my love, how are you doing today, how was your night", yelenaTest);
	} catch (error) {
		logger.error(error);
	}
})();

