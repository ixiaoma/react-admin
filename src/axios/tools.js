/**
 * http通用工具函数
 */
import axios from 'axios';
import _API from './config'
import { message } from 'antd';
const server = axios.create({
    timeout:1000,
    headers:{'Content-Type':'application/json'},
    baseURL:"http://10.116.54.163:8771/"
})
// http request 拦截器
server.interceptors.request.use(config => {
    config.headers = {
        'Content-Type': 'application/json'
    }
    let token = sessionStorage.getItem('cookieaccess_token');
    if(config.url !== _API.LOGIN){
        if (token) {
            config.headers.Authorization = 'Bearer ' + token
        }
    }
    config.data = JSON.stringify(config.data);
    return config;
},error => {
    return Promise.reject(error);
    }
);

// http response 拦截器
server.interceptors.response.use(
    response => {
        if (response.data.errCode === 2) {
            
        }
        return response;
    },
    error => {
        if (error.response) {
            message.error({content:error.response.data.message,duration: 5})
        }
    }
);

export const post = (url, data) =>{
    return server.post(url, data)
}

export const get = (url, data) =>{
    return server.get(url, {params:data})
}
