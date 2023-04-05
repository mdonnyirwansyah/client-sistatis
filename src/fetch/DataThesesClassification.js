import React from 'react';
import { useQuery } from 'react-query';
import { getThesesClassification } from '../api/thesesApi';
import { DataError, DataLoading, DataNotFound } from '../components';

function DataThesesClassification() {
    const {
        isLoading,
        isError,
        data: thesesClassification,
    } = useQuery('thesesClassification', getThesesClassification, {
        retry: false,
    });

    if (isLoading) {
        return <DataLoading colSpan="8" />;
    }

    if (isError) {
        return <DataError colSpan="8" />;
    }

    let sums = [];

    thesesClassification?.forEach((student) => {
        const generation = student.generation;

        const index = sums.findIndex(
            (item) => item.generation === student.generation
        );

        if (index === -1) {
            sums.push({
                generation: generation,
                count: 1,
                gpa_sum: parseFloat(student.gpa),
                study_duration_sum: parseFloat(student.duration),
                thesis_duration_sum: parseFloat(student.thesis.duration),
            });
        } else {
            sums[index].count += 1;
            sums[index].gpa_sum += parseFloat(student.gpa);
            sums[index].study_duration_sum += parseFloat(student.duration);
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

    return results?.length > 0 ? (
        results.map((result) => {
            return (
                <tr>
                    <td>{result.generation}</td>
                    <td>{result.count}</td>
                    <td>{result.gpa_sum}</td>
                    <td>{result.gpa_avg}</td>
                    <td>{result.study_duration_sum}</td>
                    <td>{result.study_duration_avg}</td>
                    <td>{result.thesis_duration_sum}</td>
                    <td>{result.thesis_duration_avg}</td>
                </tr>
            );
        })
    ) : (
        <DataNotFound colSpan="8" />
    );
}

export default DataThesesClassification;
