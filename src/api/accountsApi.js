import sistatisApi from './index';

const accountsApi = '/account';

export default accountsApi;

export const profileUpdate = (data) =>
    sistatisApi.put(`${accountsApi}/profile-update`, data);

export const passwordUpdate = (data) =>
    sistatisApi.put(`${accountsApi}/password-update`, data);
