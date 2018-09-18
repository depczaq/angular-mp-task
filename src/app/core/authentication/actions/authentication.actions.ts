import { Action } from '@ngrx/store';

export enum AuthenticationActionTypes {
    LOG_IN = '[Auth] Login',
    LOG_OUT = '[Auth] Logout',
    GET_USER_INFO = '[Auth] Get User Info',
    IS_AUTHENTICATED = '[Auth] Is Authenticated'
}

export class LogIn implements Action {
    readonly type = AuthenticationActionTypes.LOG_IN;

    constructor(public payload: { login: string, password: string }) { }
}

export class LogOut implements Action {
    readonly type = AuthenticationActionTypes.LOG_OUT;
}

export class GetUserInfo implements Action {
    readonly type = AuthenticationActionTypes.GET_USER_INFO;
}

export class IsAuthenticated implements Action {
    readonly type = AuthenticationActionTypes.IS_AUTHENTICATED;
}

export type AuthenticationActions =
    | LogIn
    | LogOut
    | GetUserInfo
    | IsAuthenticated;
