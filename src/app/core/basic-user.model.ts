import { UserName } from 'app/core/user.model';
import { User } from 'app/core/user.model';

export class BasicUser implements User {
    id: number;
    fakeToken: string;
    name: UserName;
    login: string;
    password: string;

    constructor(properties: any) {
        Object.assign(this, properties);
    }
}
