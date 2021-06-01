import axios from 'axios';

axios.interceptors.request.use = config => {
    config.headers['X-CAUSA-REFERER'] = window.location.href;
    return config;
};

axios.interceptors.response.use = data => {
    console.log(data, 'ssss');
    return data.data;
};

const request = (url, params, method = 'GET') => {
    return new Promise(() => {
        console.log(url, params, method);
    });
};

export default request;
