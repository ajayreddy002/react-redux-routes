// import React from 'react';
import { ILoginModel } from '../../_models/login.mode';
import { LoginActionTypes } from '../actionTypes/login.action.types';
// import { HttpService } from '../../_services/http.services';
import { alertActions } from '../actionTypes/alertConstants';
import { history } from '../../_helpers/history'
import { AuthService } from '../../_services/auth.service';
import { BaseCommonServices } from '../../_services/base.services';
export const LoginActions = {
    login,
    logout,
    register,
}

function login(url: string, payLoad: ILoginModel) {
    return (dispatch: any) => {
        dispatch(request({ payLoad }));

        BaseCommonServices.postData(url, payLoad)
            .then(
                res => {
                    if (res.status === 200) {
                        dispatch(success(res));
                        localStorage.setItem('user', JSON.stringify(res.data));
                        localStorage.setItem('token', JSON.stringify(res.data.token));
                        history.push('/');
                        window.location.reload()
                    } else {
                        if (res.data) {
                            dispatch(failure(res.data));
                            dispatch(alertActions.error(res.data));
                        }
                    }
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

        BaseCommonServices.postData(url, payLoad)
            .then(
                res => {
                    if (res.status === 200) {
                        dispatch(success(payLoad.school_name));
                        history.push('/login');
                        dispatch(alertActions.success('Registration successful'));
                    } else {
                        if (res.data) {
                            dispatch(failure(res.data));
                            dispatch(alertActions.error(res.data));
                        }
                    }
                },
                error => {
                    if (error.response.data) {
                        dispatch(failure(error.response.data));
                        dispatch(alertActions.error(error.response.data));
                    } else {
                        dispatch(failure(error.response.statusText));
                        dispatch(alertActions.error(error.response.statusText));
                    }
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
