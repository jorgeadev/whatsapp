import { config } from "./config";
import { styleText } from "node:util";
import { InterfaceColors } from "./types";
import { CronJob } from "cron";
import { task } from "./task";

export const print = ({ message, color }: InterfaceColors) => {
	if (!config.colors || color == null) {
		console.log("\n" + message + "\n");
		return;
	}
	
	if (color) {
		console.log(styleText(color, "\n" + message + "\n"));
	} else {
		console.log("\n" + message + "\n");
	}
};

export const jobFactory = (user: string, message: string, time: string) => {
	const job = new CronJob(time, async () => {
		await task(user, message);
	}, null, true, "America/New_York");
	job.start();
};

const getRandomInt = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const cronTime = (minMin: number, maxMin: number, minHour: number, maxHour: number) => {
	return `${ getRandomInt(minMin, maxMin) } ${ getRandomInt(minHour, maxHour) } * * *`;
};