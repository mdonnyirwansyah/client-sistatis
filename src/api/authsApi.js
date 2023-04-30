import sistatisApi from './index';

const authsApi = '/auth';

export default authsApi;

export const login = (data) => sistatisApi.post(`${authsApi}/login`, data);

export const getMe = () =>
    sistatisApi
        .post(`${authsApi}/me`)
        .then((response) => {
            localStorage.setItem('account', JSON.stringify(response.data.data));
            return response.data.data;
        })
        .catch((error) => {
            if (error.response) {
                if (error.response.status === 401) {
                    throw error;
                }
            } else {
                var account = JSON.parse(localStorage.getItem('account'));
                if (account) {
                    account.is_offline = true;
                    return account;
                }

                throw error.message;
            }
        });

export const logout = () => sistatisApi.post(`${authsApi}/logout`);
