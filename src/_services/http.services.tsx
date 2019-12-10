import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import { ILoginModel } from '../_models/login.mode';
const BASE_URL = 'http://localhost:3000/'
export const HttpService = {
    login,
    register
}
function login(url: string, payLoad: ILoginModel) {
    return axios.post(BASE_URL + url, payLoad)
        .then(handleResponse)
        .then(
            (data: any) => {
                localStorage.setItem('user', data);
                return data
            }
        ).catch(e => { return e })
}
function register(url: string, payLoad: ILoginModel) {
    return axios.post(BASE_URL + url, payLoad)
        .then(handleResponse);
}

function logout() {
    localStorage.clear();
    return <Redirect to={{ pathname: '/login' }}></Redirect>
}

function handleResponse(response: any) {
    return response.text().then((text: any) => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}