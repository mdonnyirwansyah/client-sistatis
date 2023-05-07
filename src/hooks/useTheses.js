import { useQuery } from 'react-query';
import {
    getTheses,
    getThesisFilters,
    getThesisClassificationCharts,
    getThesisClassificationTables,
    getThesis,
} from '../api/thesesApi';

export const useTheses = (params) =>
    useQuery(['theses', params], () => getTheses(params), {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        keepPreviousData: true,
    });

export const useThesis = (id) =>
    useQuery(['thesis', id], () => getThesis(id), {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });

export const useThesisFilters = (params) =>
    useQuery(['thesisFilter', params], () => getThesisFilters(params), {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        keepPreviousData: true,
    });

export const useThesisClassificationCharts = () =>
    useQuery(['thesisClassificationCharts'], getThesisClassificationCharts, {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });

export const useThesisClassificationTables = (params) =>
    useQuery(
        ['thesisClassificationTables', params],
        () => getThesisClassificationTables(params),
        {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            keepPreviousData: true,
        }
    );
