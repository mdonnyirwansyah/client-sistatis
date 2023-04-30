import { useQuery } from 'react-query';
import { getSemesters } from '../api/semestersApi';

export const useSemesters = () =>
    useQuery(['semesters'], getSemesters, {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });
