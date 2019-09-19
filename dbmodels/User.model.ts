import { Document, Model, model, Schema } from 'mongoose';

export interface IUser {
    uid: string;
    createdAt: number;
    name: string;
    email: string;
    password: string;
}

export interface IUserModel extends IUser, Document {}

export const UserSchema: Schema = new Schema({
    createdAt: Number,
    email: String,
    name: String,
    password: String,
    uid: String,
});

export const UserModel: Model<IUserModel> = model<IUserModel>('User', UserSchema);
