import axios from 'axios';

const api = axios.create({
    baseURL: 'https://deliverall-api.herokuapp.com'
})

export default api;
