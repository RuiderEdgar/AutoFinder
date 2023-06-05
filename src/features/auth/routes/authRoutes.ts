import express, { Router } from 'express';
import { SignUp } from '@auth/controllers/signup';

class AuthRouters {
	private router: Router;

	constructor() {
		this.router = express.Router();
	}

	public routes(): Router {
		this.router.post('/signup', SignUp.prototype.create);

		return this.router;
	}
}

export const authRoutes: AuthRouters = new AuthRouters();
