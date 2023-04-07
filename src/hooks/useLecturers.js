import { useQuery } from 'react-query';
import { getLecturersClassification } from '../api/lecturersApi';

export const useLecturersClassification = (params) =>
    useQuery(
        ['lecturersClassification', params],
        () => getLecturersClassification(params),
        { refetchOnMount: false, refetchOnWindowFocus: false }
    );
