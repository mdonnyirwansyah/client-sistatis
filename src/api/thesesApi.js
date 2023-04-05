import sistatisApi from './index';

const thesesApi = '/thesis';

export const getTheses = (params) =>
    sistatisApi
        .get(thesesApi, {
            params: {
                field_id: params.field_id,
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

export const getThesesClassification = () =>
    sistatisApi
        .get(`${thesesApi}/classification`)
        .then((response) => {
            localStorage.setItem(
                'thesesClassification',
                JSON.stringify(response.data.data)
            );
            return response.data.data;
        })
        .catch((error) => {
            var thesesClassification = JSON.parse(
                localStorage.getItem('thesesClassification')
            );
            if (thesesClassification) {
                return thesesClassification;
            }

            throw error.message;
        });

export const getThesesLecturerFilter = (params) =>
    sistatisApi
        .get(`${thesesApi}/lecturer-filter`, {
            params: {
                lecturer_id: params.lecturer_id,
                lecturer_status: params.lecturer_status,
                student_status: params.student_status,
                page: params.page,
            },
        })
        .then((response) => {
            localStorage.setItem(
                'thesesLecturerFilter',
                JSON.stringify(response.data.data)
            );
            return response.data.data;
        })
        .catch((error) => {
            var thesesLecturerFilter = JSON.parse(
                localStorage.getItem('thesesLecturerFilter')
            );
            if (thesesLecturerFilter) {
                return thesesLecturerFilter;
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
