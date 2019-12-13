import axios from 'axios';
const BASE_URL = 'http://localhost:3000/';
export const BaseCommonServices = {
    postData,
    getData,
    putData,
    deleteData,
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
    return axios.post(`${BASE_URL}${url}`, payLoad);
}
function deleteData(url: string, payLoad: any) {
    return axios.post(`${BASE_URL}${url}`, payLoad);
}