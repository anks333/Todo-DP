import { Priority } from '../enums';
import { HighPriorityTODO } from './HightPriorityTODO';
import { ITODO2 } from './ITODO2';
import { TODO2 } from './TODO2';

export class TODO2Factory implements ITODO2 {
    public create(type: Priority, text: string, user: string): Promise<TODO2> {
        switch (type) {
            case Priority.HIGH:
                return HighPriorityTODO.create(text: string, user: string);
            default:
                break;
        }
    }

}
