import sistatisApi from './index';

const lecturersApi = '/lecturer';

export const getLecturers = () =>
    sistatisApi
        .get(lecturersApi)
        .then((response) => {
            localStorage.setItem(
                'lecturers',
                JSON.stringify(response.data.data)
            );
            return response.data.data;
        })
        .catch((error) => {
            const lecturers = JSON.parse(localStorage.getItem('lecturers'));
            if (lecturers) {
                return lecturers;
            }

            throw error.message;
        });

export const getLecturerClassifications = (params) =>
    sistatisApi
        .get(`${lecturersApi}/classification`, {
            params: { semester: params.semester, page: params.page },
        })
        .then((response) => {
            localStorage.setItem(
                'lecturerClassifications',
                JSON.stringify({
                    data: response.data.data,
                    meta: response.data.meta,
                })
            );
            return {
                data: response.data.data,
                meta: response.data.meta,
            };
        })
        .catch((error) => {
            const lecturerClassifications = JSON.parse(
                localStorage.getItem('lecturerClassifications')
            );
            if (lecturerClassifications) {
                return lecturerClassifications;
            }

            throw error.message;
        });

export const getLecturer = (id) =>
    sistatisApi
        .get(`${lecturersApi}/${id}`)
        .then((response) => response.data.data);

export default lecturersApi;
