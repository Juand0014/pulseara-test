export const envConfig = () => ({
	database: {
		development: process.env.DB_URI
	},
	environment: process.env.NODE_ENV || 'development',
	cors: {
		origin: process.env.CORS_ALLOWED_HOSTS.split(','),
		credential: true
	},
	dburi: process.env.DB_URI
});

export const { database, environment, cors, dburi } = envConfig();