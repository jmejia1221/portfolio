import axios from 'axios';

const isProd = process.env.NODE_ENV === 'production';
const host = isProd ?
    'https://portfolio-inky-eta.vercel.app/' :
    'http://localhost:3000/';

const instance = axios.create({
    baseURL: host,
});

export default instance;