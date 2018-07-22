import { User } from 'app/core/user.model';

export class BasicUser implements User {
    id: number;
    firstName: string;
    lastName: string;

    constructor(properties: any) {
        Object.assign(this, properties);
    }
}