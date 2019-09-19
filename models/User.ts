import { ITodoModel, TodoModel } from '../dbmodels/Todo.model';
import { IUser, IUserModel, UserModel } from '../dbmodels/User.model';
import { BaseModel } from './BaseModel';
import { Counter } from './Counter';
import { Todo } from './Todo';

export class User extends BaseModel implements IUser {

    public static getInstance(user: IUser): User {
        const u: User = new User();
        u.setProps(user);
        return u;
    }

    public static async createUser(name: string, email: string, password: string): Promise<User> {
        const c: Counter = await Counter.nextCounter('User');
        const u: IUser = {
            createdAt: Date.now(),
            email,
            name,
            password,
            uid: 'USER-' + c.getCount(),
        };
        return User.create<IUser, IUserModel, User>(u, UserModel, User);
    }

    public static async findUser(query: any): Promise<User|undefined> {
        return User.find<IUserModel, User>(query, UserModel, User);
    }
    public uid!: string;
    public createdAt!: number;
    public name!: string;
    public email!: string;
    public password!: string;

    public async addTodo(text: string): Promise<Todo> {
        return Todo.createTodo(this.uid, text);
    }

    public async getTodos(): Promise<Todo[]> {
        return Todo.findAll<ITodoModel, Todo>({ byUser: this.uid}, TodoModel, Todo);
    }

    protected setProps(user: IUser) {
        this.uid = user.uid;
        this.createdAt = user.createdAt;
        this.name = user.name;
        this.email = user.email;
        this.password = user.password;
    }
}
