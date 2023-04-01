import sistatisApi from './index';

const thesesApi = '/thesis';

export const getTheses = (params) =>
    sistatisApi
        .get(thesesApi, {
            params: {
                field: params.field,
                status: params.status,
                page: params.page,
            },
        })
        .then((response) => {
            localStorage.setItem('theses', JSON.stringify(response.data));
            return response.data;
        })
        .catch((error) => {
            var theses = JSON.parse(localStorage.getItem('theses'));
            if (theses) {
                return theses;
            }

            throw error.message;
        });

export const getThesis = (id) =>
    sistatisApi
        .get(`${thesesApi}/${id}`)
        .then((response) => response.data.data);

export const getThesisByNim = (nim) =>
    sistatisApi
        .get(`${thesesApi}/show`, {
            params: { nim: nim },
        })
        .then((response) => {
            return response.data.data;
        });

export default thesesApi;
