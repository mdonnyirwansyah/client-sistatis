import sistatisApi from './index';

const seminarsApi = '/seminar';

export const getThesisSeminar = (id) =>
    sistatisApi
        .get(`${seminarsApi}/${id}`)
        .then((response) => response.data.data);

export const thesisSeminarRegister = (data) =>
    sistatisApi.post(`${seminarsApi}/register`, data);

export const thesisSeminarSchedule = (data) =>
    sistatisApi.put(`${seminarsApi}/schedule/${data.id}`, data);

export const thesisSeminarValidate = (data) =>
    sistatisApi.put(`${seminarsApi}/validate/${data.id}`);

export const thesisSeminarUpdate = (data) =>
    sistatisApi.put(`${seminarsApi}/${data.id}`, data);

export const getThesisSeminars = (params, key) =>
    sistatisApi
        .get(seminarsApi, {
            params: {
                type: params.type,
                status: params.status,
                page: params.page,
            },
        })
        .then((response) => {
            localStorage.setItem(
                key,
                JSON.stringify({
                    data: response.data.data,
                    meta: response.data.meta,
                })
            );
            return response.data;
        })
        .catch((error) => {
            var thesisSeminars = JSON.parse(localStorage.getItem(key));
            if (thesisSeminars) {
                return thesisSeminars;
            }

            throw error.message;
        });

export default seminarsApi;
