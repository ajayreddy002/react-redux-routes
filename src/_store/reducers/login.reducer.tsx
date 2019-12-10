import { LoginActionTypes } from '../actionTypes/login.action.types';
let dummy: any = localStorage.getItem('user');
let user = JSON.parse(dummy);
const initialState = user ? { loggedIn: true, user } : {};
export function loginReducer(state = initialState, action: any) {
    switch (action.type) {
        case LoginActionTypes.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.user
            };
        case LoginActionTypes.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            };
        case LoginActionTypes.LOGIN_FAILURE:
            return {};
        case LoginActionTypes.LOGOUT:
            return {};
        default:
            return state
    }
}