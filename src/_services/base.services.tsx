import axios from 'axios';
import swal from 'sweetalert';
const BASE_URL = 'http://localhost:3000/';
export const BaseCommonServices = {
    postData,
    getData,
    putData,
    deleteData,
    deletePop
}
if (localStorage.getItem('token')) {
    //    let AUTH_TOKEN: any = localStorage.getItem('token')
    let AUTH_TOKEN: any = localStorage.getItem('token')
    axios.defaults.headers.common['Authorization'] = JSON.parse(AUTH_TOKEN);
}
function postData(url: string, payLoad: any) {
    return axios.post(`${BASE_URL}${url}`, payLoad);
}
function getData(url: string) {
    return axios.get(`${BASE_URL}${url}`);
}
function putData(url: string, payLoad: any) {
    return axios.put(`${BASE_URL}${url}`, payLoad);
}
function deleteData(url: string) {
    return axios.delete(`${BASE_URL}${url}`);
}
function deletePop(url: string) {
   return swal({
        title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover!',
        icon: 'warning',
        buttons: { cancel: true, delete: true },
        dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            axios.delete(`${BASE_URL}${url}`)
        } else {
            swal("Ok!");
        }
    });
}