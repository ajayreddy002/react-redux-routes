// import React from 'react';
export const formValid = {
    validateForm
}
function validateForm(params: any) {
    let valid = true;
    Object.values(params).forEach((val: any) =>
        val.length > 0 && (valid = false));
    return valid
}