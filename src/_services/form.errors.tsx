// import React from 'react';
export const formValid = {
    validateForm
}
function validateForm(formErrors: any, ...rest: any) {
    let valid = true;
    // validate form errors being empty
    Object.values(formErrors).forEach((val: any) => {
        val.length > 0 && (valid = false);
    });

    // validate the form was filled out
    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });

    return valid;
}