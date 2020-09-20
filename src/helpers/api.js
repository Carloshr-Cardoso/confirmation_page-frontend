import axios from 'axios';

export const getApiUrl = (path) =>{
    return `http://localhost:3001${path}`;
}

export const getHeaders = (params) =>{
    return {};
}

export const apiPost = (path, data = {}) =>{
    const url = getApiUrl(path);
    const options = {
        headers: getHeaders()
    }
    
    return axios.post(url, data, options)
}

export const apiGet = (path, data = {}) => {
    const url = getApiUrl(path);
    const options = {
        // headers: {
        //     Authorization: 'Bearer ' + token 
        //   }
    }
    
    return axios.get(url, options);
}