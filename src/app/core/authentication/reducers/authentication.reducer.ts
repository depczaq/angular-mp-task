import { AuthenticationActionTypes } from './../actions/authentication.actions';
import { AuthenticationActions } from 'app/core/authentication/actions/authentication.actions';
import { AuthenticationCredentials } from 'app/core/authentication/credentials.model';

const initialState: AuthenticationCredentials = {
    login: null,
    password: null
};

export function reducer(state: AuthenticationCredentials = initialState, action: AuthenticationActions) {
    switch (action.type) {
        case AuthenticationActionTypes.LOG_IN:
            return {
                ...state
            };
        case AuthenticationActionTypes.LOG_OUT:
            return {
                ...initialState
            };
    }
}
