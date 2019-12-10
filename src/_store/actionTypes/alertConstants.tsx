import { alertConstants } from "./alert.actions";


export const alertActions = {
    success,
    error,
    clear
};

function success(message: any) {
    return { type: alertConstants.SUCCESS, message };
}

function error(message: any) {
    return { type: alertConstants.ERROR, message };
}

function clear() {
    return { type: alertConstants.CLEAR };
}