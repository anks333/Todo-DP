import { ITodo, ITodoModel, TodoModel } from '../dbmodels/Todo.model';
import { BaseModel } from './BaseModel';
import { Counter } from './Counter';

export class Todo extends BaseModel implements ITodo {

    public static getInstance(t: ITodo) {
        const todo: Todo = new Todo();
        todo.setProps(t);
        return todo;
    }

    public static async createTodo(byUser: string, text: string): Promise<Todo> {
        const c: Counter = await Counter.nextCounter('Todo');
        const t: ITodo = {
            byUser,
            createdAt: Date.now(),
            done: false,
            text,
            uid: 'TODO-' + c.getCount(),
        };

        return Todo.create<ITodo, ITodoModel, Todo>(t, TodoModel, Todo);
    }
    public uid!: string;
    public createdAt!: number;
    public byUser!: string;
    public text!: string;
    public done!: boolean;

    public async mark(done: boolean): Promise<Todo> {
        return Todo.findOneAndUpdate<ITodoModel, Todo>({ uid: this.uid }, { done }, TodoModel, Todo);
    }

    protected setProps(t: ITodo) {
        // Problem  in maintainence
        // Always need to add the map
        // TODO :  Find a better way to map the keys to class object
        this.createdAt = t.createdAt;
        this.byUser = t.byUser;
        this.done = t.done;
        this.text = t.text;
        this.uid = t.uid;
    }
}
