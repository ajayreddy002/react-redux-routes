import axios from 'axios';
const BASE_URL = 'http://localhost:3000/';
export const BaseCommonServices = {
    postData,
    getData,
    putData,
    deleteData,
}

function postData(url: string, payLoad: any) {
    return axios.post(`${BASE_URL}${url}`, payLoad);
}
function getData(url: string, payLoad: any) {
    return axios.post(`${BASE_URL}${url}`, payLoad);
}
function putData(url: string, payLoad: any) {
    return axios.post(`${BASE_URL}${url}`, payLoad);
}
function deleteData(url: string, payLoad: any) {
    return axios.post(`${BASE_URL}${url}`, payLoad);
}