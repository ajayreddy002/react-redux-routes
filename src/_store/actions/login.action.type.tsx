import React from 'react';
import { ILoginModel } from '../../_models/login.mode';
import { LoginActionTypes } from '../actionTypes/login.action.types';
import { HttpService } from '../../_services/http.services';
import { alertActions } from '../actionTypes/alertConstants';
import { history } from '../../_helpers/history'
import { AuthService } from '../../_services/auth.service';
export const LoginActions = {
    login,
    logout,
    register,
}

function login(url: string, payLoad: ILoginModel) {
    return (dispatch: any) => {
        dispatch(request({ payLoad }));

        HttpService.login('login', payLoad)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };
    function request(payLoad: any) { return { type: LoginActionTypes.LOGIN_REQUEST, payLoad } };
    function success(payLoad: any) { return { type: LoginActionTypes.LOGIN_SUCCESS, payLoad } };
    function failure(payLoad: any) { return { type: LoginActionTypes.LOGIN_FAILURE, payLoad } };
}
function register(url: string, payLoad: any) {
    return (dispatch: any) => {
        dispatch(request(payLoad));

        HttpService.register('register', payLoad)
            .then(
                user => {
                    dispatch(success(payLoad.school_name));
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(payLoad: any) { return { type: LoginActionTypes.REGISTER_REQUEST, payLoad } }
    function success(payLoad: any) { return { type: LoginActionTypes.REGISTER_SUCCESS, payLoad } }
    function failure(error: any) { return { type: LoginActionTypes.REGISTER_FAILURE, error } }
}
function logout() {
    AuthService.logout();
    return { type: LoginActionTypes.LOGOUT };
}
