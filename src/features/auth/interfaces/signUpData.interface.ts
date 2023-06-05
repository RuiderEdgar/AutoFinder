import { ObjectId } from 'mongoose';

export interface ISignUpData {
	_id: ObjectId;
	uid: string;
	email: string;
	username: string;
	password: string;
}
