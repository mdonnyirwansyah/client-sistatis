import { useQuery } from 'react-query';
import { getLecturerClassifications, getLecturers } from '../api/lecturersApi';

export const useLecturers = () =>
    useQuery(['lecturers'], getLecturers, {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });

export const useLecturerClassifications = (params) =>
    useQuery(
        ['lecturerClassifications', params],
        () => getLecturerClassifications(params),
        { refetchOnMount: false, refetchOnWindowFocus: false }
    );
