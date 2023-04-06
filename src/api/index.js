import axios from 'axios';

const fetchClient = () => {
    const defaultOptions = {
        baseURL: 'https://api-sistatis.000webhostapp.com/api',
        headers: {
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
    };

    // Create instance
    let instance = axios.create(defaultOptions);

    // Set the AUTH token for any request
    instance.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access_token');
        config.headers.Authorization = token ? `Bearer ${token}` : '';
        return config;
    });

    return instance;
};

const sistatisApi = fetchClient();

export const storeAuthentication = (token) => {
    localStorage.setItem('access_token', token);
};

export const storeUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
};

export const removeAuthentication = () => {
    localStorage.removeItem('access_token');
};

export default sistatisApi;
