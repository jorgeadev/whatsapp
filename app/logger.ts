import * as fs from "node:fs";
import winston from "winston";
import { config } from "./config";

export const setUpLogger = (name: string) => {
	const env = process.env.NODE_ENV || "development";
	
	if (!fs.existsSync(config.logDir)) {
		fs.mkdirSync(config.logDir);
	}
	
	const logger = winston.createLogger({
		level: env === "development" ? "debug" : "info",
		format: winston.format.combine(
			winston.format.timestamp(),
			winston.format.printf(info => `{ "timestamp": ${ info.timestamp }, "level": ${ info.level }, "service": "${ name.toString() }", "message": "${ info.message }" }`)
		),
		defaultMeta: { service: "user-service" },
		transports: [
			new winston.transports.File({ filename: `${ config.logDir }/error.log`, level: "error" }),
			new winston.transports.File({ filename: `${ config.logDir }/logs.log` })
		]
	});
	
	if (process.env.NODE_ENV !== "production") {
		logger.add(new winston.transports.Console({
			format: winston.format.simple(),
			level: "debug"
		}));
	}
	
	return logger;
};