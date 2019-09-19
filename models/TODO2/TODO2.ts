import { ITodo } from '../../dbmodels/Todo.model';

export abstract class TODO2 {

    public uid!: string;
    public createdAt!: number;
    public byUser!: string;
    public text!: string;
    public done!: boolean;

    protected abstract setProps(todo: ITodo): void;
    protected abstract create(todo: ITodo): void;
}
