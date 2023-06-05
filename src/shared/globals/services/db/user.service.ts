import { IUserDocument } from '@user/interfaces/userDocument.interface';
import { UserModel } from '@user/models/user.schema';
import mongoose from 'mongoose';

class UserSerive {
	public async addUserData(data: IUserDocument): Promise<void> {
		await UserModel.create(data);
	}

	public async getUserById(userId: string): Promise<IUserDocument> {
		const user: IUserDocument[] = await UserModel.aggregate([
			{ $match: { _id: new mongoose.Types.ObjectId(userId) } },
			{ $lookup: { from: 'Auth', localField: 'authId', foreignField: '_id', as: 'authId' } },
			{ $unwind: '$roles' },
			{ $project: this.aggregateProject() }
		]);
		return user[0];
	}

	private aggregateProject() {
		return {
			_id: 1,
			username: '$authId.username',
			email: '$authId.email',
			uid: '$authId.uid',
			createAt: '$authId.createAt',
			bio: '$authId.bio',
			favoriteCars: 1,
			favoriteMotorcycle: 1
		};
	}
}

export const userService: UserSerive = new UserSerive();
