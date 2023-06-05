import { Document } from 'mongoose';
import { ObjectId } from 'mongodb';

export interface IAuthDocument extends Document {
	_id: string | ObjectId;
	uid: string;
	username: string;
	email: string;
	password?: string;
	createdAt: Date;
	passwordResetToken?: string;
	passwordResetExpires?: number | string;
	comparePassword(password: string): Promise<boolean>;
}
