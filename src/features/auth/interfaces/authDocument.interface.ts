import { Document, ObjectId } from 'mongoose';

export interface IAuthDocument extends Document {
	_id: string | ObjectId;
	uid: string;
	username: string;
	email: string;
	password?: string;
	createdAt: Date;
}
