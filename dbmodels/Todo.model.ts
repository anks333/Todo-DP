import { Document, Model, model, Schema } from 'mongoose';

export interface ITodo {
    uid: string;
    createdAt: number;
    byUser: string;
    text: string;
    done: boolean;
}

export interface ITodoModel extends ITodo, Document {}

export const TodoSchema: Schema = new Schema({
    byUser: String,
    createdAt: Number,
    done: Boolean,
    text: String,
    uid: String,
});

export const TodoModel: Model<ITodoModel> = model<ITodoModel>('Todo', TodoSchema);
