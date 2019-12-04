// import React from 'react';
import {BehaviorSubject} from 'rxjs';
import { Redirect } from 'react-router-dom';
import React from 'react';
const userSignedIn = new BehaviorSubject(localStorage.getItem('user'))
export const  AuthService = {
    isUserLoggedIn,
    login,
    logout,
    signup,
    currentUser: userSignedIn.asObservable(),
}
function isUserLoggedIn(){
    if (localStorage.getItem('user')) {
        return true
    }
}
function login(){
    
}
function logout(){
    localStorage.clear();
    return <Redirect to={{pathname: '/login'}}></Redirect>
}
function signup(){}