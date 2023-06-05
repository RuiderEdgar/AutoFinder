import { ObjectId } from 'mongodb';

export interface ISignUpData {
	_id: ObjectId;
	uid: string;
	email: string;
	username: string;
	password: string;
}
