import * as joi from 'joi';

export const JoiValidationSchema = joi.object({
	DB_URI: joi.string().required(),
	NODE_ENV: joi.string().valid('development', 'production', 'test').default('development'),
	PORT: joi.number().default(3001),
});