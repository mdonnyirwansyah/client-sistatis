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
            var lecturers = JSON.parse(localStorage.getItem('lecturers'));
            if (lecturers) {
                return lecturers;
            }

            throw error.message;
        });

export const getLecturersClassification = (params) =>
    sistatisApi
        .get(`${lecturersApi}/classification`, {
            params: { semester: params.semester, page: params.page },
        })
        .then((response) => {
            localStorage.setItem(
                'lecturersClassification',
                JSON.stringify(response.data)
            );
            return response.data;
        })
        .catch((error) => {
            var lecturersClassification = JSON.parse(
                localStorage.getItem('lecturersClassification')
            );
            if (lecturersClassification) {
                return lecturersClassification;
            }

            throw error.message;
        });

export default lecturersApi;
