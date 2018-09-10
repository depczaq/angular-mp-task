export interface User {
    id: number;
    fakeToken: string;
    name: UserName;
    login: string;
    password: string;
}

export interface UserName {
    first: string;
    last: string;
}
