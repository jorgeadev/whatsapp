export const config = {
	// Data directory is used so that we can persist cookies per session and not have to
	// authorize this application every time.
	// NOTE: This directory can get quite large overtime, in that case simply delete it
	// and re-authorize Whatsapp.
	dataDir: "./tmp",
	
	// Directory where logs will be stored
	logDir: "logs",
	
	// When true, browser will be shown, when false, it will be headless
	window: true,
	
	//
	windowWidth: 1920,
	windowHeight: 1080,
	
	// If true, colored messages will be shown in the console
	colors: true,
	
	// user-agent to be used by the browser
	userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3641.0 Safari/537.36"
};