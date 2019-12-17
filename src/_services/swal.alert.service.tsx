import swal from 'sweetalert';
import { BaseCommonServices } from './base.services';
export const SwalActions = {
    successAlert,
    errorAlert,
}
function successAlert(message: string) {
    return swal(message, {
        icon: 'success'
    })
}
function errorAlert(message: string) {
    return swal(message, {
        icon: 'error'
    })
}