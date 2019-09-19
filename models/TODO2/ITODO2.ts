import { Priority } from '../enums';
import { TODO2 } from './TODO2';

export interface ITODO2 {
    create(type: Priority, text: string, user: string): Promise<TODO2>;
}
