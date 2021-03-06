"use strict";

let path = require("path");
let pkg = require("../../package.json");
let secrets = require("../core/secrets");

module.exports = {
	app: {
		title: pkg.title,
		version: pkg.version,
		description: pkg.description,
		keywords: pkg.keywords.join(","),
		url: "http://localhost:" + (process.env.PORT || 3000) + "/",
		//googleAnalyticsID: 'UA-xxxxx-x',
		contactEmail: "hello@vem-app.com"
	},

	ip: "0.0.0.0",
	port: process.env.PORT || 3000,
	rootPath: global.rootPath,
	dataFolder: path.join(global.rootPath, "data"),
	uploadLimit: 2 * 1024 * 1024, // 2MB

	sessions: {
		cookie: {
			// session expiration is set by default to one week
			maxAge: 7 * 24 * (60 * 60 * 1000),

			// httpOnly flag makes sure the cookie is only accessed
			// through the HTTP protocol and not JS/browser
			httpOnly: true,

			// secure cookie should be turned to true to provide additional
			// layer of security so that the cookie is set only when working
			// in HTTPS mode.
			secure: false
		},

		// Cookie key name
		name: "sessionId",

		// Mongo store collection name
		collection: "sessions"
	},

	test: false,

	mailer: {
		from: "noreply@bolierplate-app.com",

		transport: "smtp",
		smtp: {
			host: "mailtrap.io",
			port: 2525,
			auth: {
				user: "367335eaa82697636",
				pass: "e5a76af9b056d0"
			}
		}

		/*transport: "smtp",
		smtp: {
			host: "smtp.gmail.com",
			port: 465,
			secure: true,
			auth: {
				user: "",
				pass: ""
			}
		}*/

		/*
		transport: "mailgun",
		mailgun: {
			apiKey: '',
			domain: ''
		}*/

		/*
		transport: "sendgrid",
		sendgrid: {
			apiKey: ""
		}*/
	},

	db: {
		uri: process.env.MONGO_URI || "mongodb://localhost/" + pkg.config.dbName + "-dev",
		options: {
			user: "",
			pass: "",
			server: {
				socketOptions: {
					keepAlive: 1
				}
			}
		}

	},

	logging: {

		graylog: {
			enabled: true,
			servers: [ { host: "192.168.0.174", port: 12201 } ]
		},

		papertrail: {
			enabled: secrets.papertrail != null,
			host: secrets.papertrail != null ? secrets.papertrail.host : null,
			port: secrets.papertrail != null ? secrets.papertrail.port : null,
			level: 'debug',
			program: 'vem'
		},

		logentries: {
			enabled: secrets.logentries != null,
			token: secrets.logentries != null ? secrets.logentries.token : null
		},

		loggly: {
			enabled: secrets.loggly != null,
			token: secrets.loggly != null ? secrets.loggly.token : null,
			subdomain: secrets.loggly != null ? secrets.loggly.subdomain : null
		},
		
		logsene: {
			enabled: secrets.logsene != null,
			token: secrets.logsene != null ? secrets.logsene.token : null
		},
		
		logzio: {
			enabled: secrets.logzio != null,
			token: secrets.logzio != null ? secrets.logzio.token : null
		},
		
	},

	disableSignUp: false,
	verificationRequired: true,

	agendaTimer: "one minute"
};