import { useQuery } from 'react-query';
import { getThesisSeminar, getThesisSeminars } from '../api/seminarsApi';

export const useThesisSeminars = (params, key) =>
    useQuery([key, params], () => getThesisSeminars(params, key), {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        keepPreviousData: true,
    });

export const useThesisSeminar = (id) =>
    useQuery(['thesisSeminar', id], () => getThesisSeminar(id), {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });
