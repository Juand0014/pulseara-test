export const envConfig = () => ({
	database: {
		development: process.env.DB_URI
	},
	environment: process.env.NODE_ENV || 'development',
	dburi: process.env.DB_URI
});

export const { database, environment, dburi } = envConfig();