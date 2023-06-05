import { ObjectId } from 'mongodb';
import { Request, Response } from 'express';
import { joiValidation } from '@decorators/joi-validation.decorators';
import { signupSchema } from '@auth/schemas/signup';
import { IAuthDocument } from '@auth/interfaces/authDocument.interface';
import { authService } from '@services/db/auth.service';
import { BadRequestError } from '@helpers/errors/badRequestError';
import { Generators } from '@helpers/generators/generators';
import HTTP_STATUS from 'http-status-codes';
import { SignUpUtility } from './utilities/signup.utility';

export class SignUp extends SignUpUtility {
	@joiValidation(signupSchema)
	public async create(req: Request, res: Response): Promise<void> {
		const { username, email, password } = req.body;
		const checkIfUserExist = await authService.getUserByUsernameOrEmail(username, email);
		if (checkIfUserExist) {
			throw new BadRequestError('Invalid credentials for this user');
		}

		const authObjectId: ObjectId = new ObjectId();
		const userObjectId: ObjectId = new ObjectId();
		const uid = `${Generators.generateRandomIntegers(12)}`;
		const passwordHash = await Generators.hash(password);
		//patron de diseño: prototype
		const authData: IAuthDocument = SignUp.prototype.signUpData({
			_id: authObjectId,
			uid,
			username,
			password: passwordHash,
			email
		});

		const userJwt: string = SignUp.prototype.signToken(authData, userObjectId);
		req.session = { jwt: userJwt };

		res.status(HTTP_STATUS.CREATED).json({
			message: 'User created successfully',
			token: userJwt
		});
	}
}
