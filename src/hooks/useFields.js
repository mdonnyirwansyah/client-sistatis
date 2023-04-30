import { useQuery } from 'react-query';
import { getFields } from '../api/fieldsApi';

export const useFields = () =>
    useQuery(['fields'], getFields, {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });
