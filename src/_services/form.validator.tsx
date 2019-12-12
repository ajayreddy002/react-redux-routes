import validator from 'validator'
export const validateFields = {
    fieldValidation
}
function fieldValidation(name: any, value: any) {
    switch (name) {
        case 'email':
            if (validator.isEmpty(value)) {
                return `Field is Required`
            } else {
                if (validator.isEmail(value)) {
                    return ''
                } else {
                    return 'Enter Valid Email'
                }

            }
        case 'phone_number':
            if (validator.isEmpty(value)) {
                return `Field is Required`
            } else {
                if (validator.isNumeric(value) && validator.isMobilePhone(value,'en-IN')) {
                    return ''
                } else {
                    return 'Enter Valid Phone Number'
                }
            }
        case 'employee_name':
        case 'subject':
        case 'password':
        case 'school_name':
        case 'user_name':
        case 'school_address':
            if (validator.isEmpty(value)) {
                return `Field is Required`
            } else {
                return ''
            }
        default:
            break;
    }
}