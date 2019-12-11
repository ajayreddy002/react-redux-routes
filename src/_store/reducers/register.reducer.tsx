import { LoginActionTypes } from '../actionTypes/login.action.types';

export function registration(state = {}, action: any) {
    switch (action.type) {
        case LoginActionTypes.REGISTER_REQUEST:
            return { registering: true };
        case LoginActionTypes.REGISTER_SUCCESS:
            return {};
        case LoginActionTypes.REGISTER_FAILURE:
            return {};
        default:
            return state
    }
}