import { IUserDocument } from '../interfaces/userDocument.interface';
import mongoose, { model, Model, Schema } from 'mongoose';

const userSchema: Schema = new Schema({
	authId: { type: mongoose.Schema.Types.ObjectId, ref: 'Auth' },
	bio: { type: String, default: '' },
	favoriteCars: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Car' }],
	favoriteMotorcycle: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Car' }]
});

const UserModel: Model<IUserDocument> = model<IUserDocument>('User', userSchema, 'User');

export { UserModel };
