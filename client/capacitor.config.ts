import { CapacitorConfig } from "@capacitor/cli";

const appId = "lazybook.ionic.io";
const appName = "lazybook";
const server = process.argv.includes("-hmr")
	? {
			url: "http://172.16.1.30:5173", // always have http:// in url
			cleartext: true
	  }
	: {};
const webDir = "build";

const config: CapacitorConfig = {
	appId,
	appName,
	webDir,
	server
};

if (process.argv.includes("-hmr"))
	console.log("WARNING: running capacitor with livereload config", config);

export default config;
