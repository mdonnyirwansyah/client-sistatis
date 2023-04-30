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
                account.is_offline = true;
                if (account) {
                    return account;
                }

                throw error;
            }
        });

export const logout = () => sistatisApi.post(`${authsApi}/logout`);
