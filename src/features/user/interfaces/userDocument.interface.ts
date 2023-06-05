import mongoose, { Document, ObjectId } from 'mongoose';

export interface IUserDocument extends Document {
	_id: string | ObjectId;
	authId: string | ObjectId;
	username?: string;
	email?: string;
	password?: string;
	uid?: string;
	createAt?: Date;
	bio?: string;
	favoriteCars: mongoose.Types.ObjectId[];
	favoriteMotorcycle: mongoose.Types.ObjectId[];
}
