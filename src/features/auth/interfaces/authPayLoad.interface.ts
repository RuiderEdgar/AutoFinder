declare global {
	namespace Express {
		interface Request {
			currentUser?: AuthPayLoad;
		}
	}
}

export interface AuthPayLoad {
	userId: string;
	uId: string;
	email: string;
	username: string;
	iat?: number; // expiracion time token
}
