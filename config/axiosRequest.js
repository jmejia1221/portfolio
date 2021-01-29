import axios from 'axios';

const isProd = process.env.NODE_ENV === 'production';
const host = isProd ?
    'https://johnmejia.co/' :
    'http://localhost:3000/';

const instance = axios.create({
    baseURL: host,
});

export default instance;