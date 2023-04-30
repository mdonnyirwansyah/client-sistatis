import sistatisApi from './index';

const thesesApi = '/thesis';

export const getTheses = (params) =>
    sistatisApi
        .get(thesesApi, {
            params: {
                field_id: params.field_id,
                thesis_status: params.thesis_status,
                page: params.page,
            },
        })
        .then((response) => {
            localStorage.setItem(
                'theses',
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
            var theses = JSON.parse(localStorage.getItem('theses'));
            if (theses) {
                return theses;
            }

            throw error.message;
        });

export const thesisRegister = (data) =>
    sistatisApi.post(`${thesesApi}/register`, data);

export const thesisUpdate = (data) => {
    return sistatisApi.put(`${thesesApi}/${data.id}`, data);
};

export const getThesisClassificationCharts = () =>
    sistatisApi
        .get(`${thesesApi}/classification`)
        .then((response) => {
            let data = response.data.data;
            let sums = [];

            data?.forEach((student) => {
                const index = sums.findIndex(
                    (item) => item.generation === student.generation
                );

                if (index === -1) {
                    sums.push({
                        generation: student.generation,
                        count: 1,
                        gpa_sum: parseFloat(student.gpa),
                        study_duration_sum: parseFloat(student.study_duration),
                        thesis_duration_sum: parseFloat(
                            student.thesis.thesis_duration
                        ),
                    });
                } else {
                    sums[index].count += 1;
                    sums[index].gpa_sum += parseFloat(student.gpa);
                    sums[index].study_duration_sum += parseFloat(
                        student.study_duration
                    );
                    sums[index].thesis_duration_sum += parseFloat(
                        student.thesis.thesis_duration
                    );
                }
            });

            const avgs = Object.keys(sums).map(function (result) {
                const item = sums[result];

                return {
                    generation: item.generation,
                    count: item.count,
                    gpa_sum: item.gpa_sum,
                    gpa_avg: item.gpa_sum / item.count,
                    study_duration_sum: item.study_duration_sum,
                    study_duration_avg: item.study_duration_sum / item.count,
                    thesis_duration_sum: item.thesis_duration_sum,
                    thesis_duration_avg: item.thesis_duration_sum / item.count,
                };
            });

            const charts = Object.keys(avgs).map(function (result) {
                const item = avgs[result];

                return {
                    generation: item.generation,
                    count: item.count,
                    gpa_sum: item.gpa_sum.toFixed(2),
                    gpa_avg: item.gpa_avg.toFixed(2),
                    study_duration_sum: item.study_duration_sum.toFixed(2),
                    study_duration_avg: item.study_duration_avg.toFixed(2),
                    thesis_duration_sum: item.thesis_duration_sum.toFixed(2),
                    thesis_duration_avg: item.thesis_duration_avg.toFixed(2),
                };
            });

            localStorage.setItem(
                'thesisClassificationCharts',
                JSON.stringify(charts)
            );

            return charts;
        })
        .catch((error) => {
            const charts = JSON.parse(
                localStorage.getItem('thesisClassificationCharts')
            );

            if (charts) {
                return charts;
            }

            throw error.message;
        });

export const getThesisClassificationTables = (params) =>
    sistatisApi
        .get(`${thesesApi}/classification/paginate`, {
            params: {
                page: params.page,
            },
        })
        .then((response) => {
            let data = response.data;
            let sums = [];

            data?.data?.forEach((student) => {
                const index = sums.findIndex(
                    (item) => item.generation === student.generation
                );

                if (index === -1) {
                    sums.push({
                        generation: student.generation,
                        count: 1,
                        gpa_sum: parseFloat(student.gpa),
                        study_duration_sum: parseFloat(student.study_duration),
                        thesis_duration_sum: parseFloat(
                            student.thesis.thesis_duration
                        ),
                    });
                } else {
                    sums[index].count += 1;
                    sums[index].gpa_sum += parseFloat(student.gpa);
                    sums[index].study_duration_sum += parseFloat(
                        student.study_duration
                    );
                    sums[index].thesis_duration_sum += parseFloat(
                        student.thesis.thesis_duration
                    );
                }
            });

            const avgs = Object.keys(sums).map(function (result) {
                const item = sums[result];

                return {
                    generation: item.generation,
                    count: item.count,
                    gpa_sum: item.gpa_sum,
                    gpa_avg: item.gpa_sum / item.count,
                    study_duration_sum: item.study_duration_sum,
                    study_duration_avg: item.study_duration_sum / item.count,
                    thesis_duration_sum: item.thesis_duration_sum,
                    thesis_duration_avg: item.thesis_duration_sum / item.count,
                };
            });

            const tables = Object.keys(avgs).map(function (result) {
                const item = avgs[result];

                return {
                    generation: item.generation,
                    count: item.count,
                    gpa_sum: item.gpa_sum.toFixed(2),
                    gpa_avg: item.gpa_avg.toFixed(2),
                    study_duration_sum: item.study_duration_sum.toFixed(2),
                    study_duration_avg: item.study_duration_avg.toFixed(2),
                    thesis_duration_sum: item.thesis_duration_sum.toFixed(2),
                    thesis_duration_avg: item.thesis_duration_avg.toFixed(2),
                };
            });

            localStorage.setItem(
                'thesisClassificationTables',
                JSON.stringify({
                    data: tables,
                    meta: data.meta,
                })
            );

            return {
                data: tables,
                meta: data.meta,
            };
        })
        .catch((error) => {
            const tables = JSON.parse(
                localStorage.getItem('thesisClassificationTables')
            );

            if (tables) {
                return tables;
            }

            throw error.message;
        });

export const getThesisFilters = (params) =>
    sistatisApi
        .get(`${thesesApi}/filter`, {
            params: {
                lecturer_id: params.lecturer_id,
                lecturer_status: params.lecturer_status,
                student_status: params.student_status,
                page: params.page,
            },
        })
        .then((response) => {
            localStorage.setItem(
                'thesisFilters',
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
            const thesisFilters = JSON.parse(
                localStorage.getItem('thesisFilters')
            );

            if (thesisFilters) {
                return thesisFilters;
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
