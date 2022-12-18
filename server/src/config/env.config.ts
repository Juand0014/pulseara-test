export const envConfig = () => ({
	database: {
		development: process.env.DB_URI,
		production: process.env.DB_URI_PROD
	},
	environment: process.env.NODE_ENV || 'development',
	dburi: process.env.DB_URI
});

export const { database, environment, dburi } = envConfig();