import { Document, Model, model, Schema } from 'mongoose';

export interface ICounter {
    counterFor: string;
    count: number;
}

export interface ICounterModel extends ICounter, Document { }

export const CounterSchema: Schema = new Schema({
    count: Number,
    counterFor: String,
});

export const CounterModel: Model<ICounterModel> = model<ICounterModel>('Counter', CounterSchema);
