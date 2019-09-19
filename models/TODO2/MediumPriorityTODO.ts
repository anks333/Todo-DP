import { ITodo } from '../../dbmodels/Todo.model';
import { Priority } from '../enums';
import { TODO2 } from './TODO2';

export class MediumPriorityTask extends TODO2 {
    public readonly type: Priority = Priority.MEDIUM;

    protected setProps(todo: ITodo): void {
        this.uid = todo.uid;
        this.text = todo.text;
        this.byUser = todo.byUser;
        this.done = todo.done;
        this.createdAt = todo.createdAt;
    }
}
