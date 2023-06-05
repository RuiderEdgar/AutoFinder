import Joi, { ObjectSchema } from 'joi';

const loginSchema: ObjectSchema = Joi.object().keys({
	username: Joi.string().required().min(4).max(10).messages({
		'string.base': 'Username must be of type string',
		'string.min': 'Invalid username, min 4 Characters',
		'string.max': 'Invalid username, max 10 Characters',
		'string.empty': 'Username is a required field'
	}),
	password: Joi.string().required().min(4).max(10).messages({
		'string.base': 'Password must be of type string',
		'string.min': 'Invalid password, min 4 Characters',
		'string.max': 'Invalid password, max 10 Characters',
		'string.empty': 'Password is a required field'
	})
});

export { loginSchema };
