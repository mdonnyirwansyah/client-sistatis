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
                        study_duration_sum: parseFloat(student.duration),
                        thesis_duration_sum: parseFloat(
                            student.thesis.duration
                        ),
                    });
                } else {
                    sums[index].count += 1;
                    sums[index].gpa_sum += parseFloat(student.gpa);
                    sums[index].study_duration_sum += parseFloat(
                        student.duration
                    );
                    sums[index].thesis_duration_sum += parseFloat(
                        student.thesis.duration
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

            const results = Object.keys(avgs).map(function (result) {
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
                'thesesClassification',
                JSON.stringify(results)
            );

            return results;
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
