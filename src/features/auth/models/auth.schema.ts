import { IAuthDocument } from '@auth/interfaces/authDocument.interface';
import { compare } from 'bcryptjs';
import { Model, model, Schema } from 'mongoose';

const authSchema: Schema = new Schema(
	{
		username: { type: 'String' },
		uid: { type: 'String' },
		email: { type: 'String' },
		password: { type: 'String' },
		createdAt: { type: Date, default: Date.now() },
		passwordResetToken: { type: String, default: '' },
		passwordResetExpires: { type: Number }
	},
	{
		toJSON: {
			transform: (_doc, ret) => {
				delete ret.password;
				return ret;
			}
		}
	}
);

//Design pattern: AAA
authSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
	const hashedPassword: string = (this as IAuthDocument).password!;
	return compare(password, hashedPassword);
};

const AuthModel: Model<IAuthDocument> = model<IAuthDocument>('Auth', authSchema, 'Auth');

export { AuthModel };
