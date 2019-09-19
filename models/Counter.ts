import { CounterModel, ICounter, ICounterModel } from '../dbmodels/Counter.model';
import { BaseModel } from './BaseModel';

export class Counter extends BaseModel implements ICounter {

    public static getInstance(c: ICounter): Counter {
        const counter = new Counter();
        counter.setProps(c);
        return counter;
    }

    public static nextCounter(counterFor: string): Promise<Counter> {
        return Counter.findOneAndUpsert<ICounterModel, Counter>(
            { counterFor },
            { $inc: { count : 1} },
            CounterModel,
            Counter,
        );
    }

    public counterFor!: string;
    public count!: number;

    public getCount(): number {
        return this.count;
    }

    protected setProps(c: ICounter) {
        this.count = c.count;
        this.counterFor = c.counterFor;
    }
}
