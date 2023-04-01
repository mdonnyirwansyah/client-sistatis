import sistatisApi from './index';

const seminarsApi = '/seminar';

export const getThesisSeminar = (id) =>
    sistatisApi
        .get(`${seminarsApi}/${id}`)
        .then((response) => response.data.data);

export const getThesisSeminars = (params) =>
    sistatisApi
        .get(seminarsApi, {
            params: { name: params.name, page: params.page },
        })
        .then((response) => {
            localStorage.setItem(
                'thesisSeminars',
                JSON.stringify(response.data)
            );
            return response.data;
        })
        .catch((error) => {
            var thesisSeminars = JSON.parse(
                localStorage.getItem('thesisSeminars')
            );
            if (thesisSeminars) {
                return thesisSeminars;
            }

            throw error.message;
        });

export const getThesisSeminarsSchedule = (params) =>
    sistatisApi
        .get(seminarsApi, {
            params: {
                name: params.name,
                status: params.status,
            },
        })
        .then((response) => {
            localStorage.setItem(
                'thesisSeminarsSchedule',
                JSON.stringify(response.data)
            );
            return response.data;
        })
        .catch((error) => {
            var thesisSeminarsSchedule = JSON.parse(
                localStorage.getItem('thesisSeminarsSchedule')
            );
            if (thesisSeminarsSchedule) {
                return thesisSeminarsSchedule;
            }

            throw error.message;
        });

export const getThesisSeminarsValidate = (params) =>
    sistatisApi
        .get(seminarsApi, {
            params: {
                name: params.name,
                status: params.status,
            },
        })
        .then((response) => {
            localStorage.setItem(
                'thesisSeminarsValidate',
                JSON.stringify(response.data)
            );
            return response.data;
        })
        .catch((error) => {
            var thesisSeminarsValidate = JSON.parse(
                localStorage.getItem('thesisSeminarsValidate')
            );
            if (thesisSeminarsValidate) {
                return thesisSeminarsValidate;
            }

            throw error.message;
        });

export default seminarsApi;
