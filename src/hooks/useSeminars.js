import { useQuery } from 'react-query';
import {
    getThesisSeminar,
    getThesisSeminars,
    thesisSeminarRegister,
} from '../api/seminarsApi';

export const useThesisSeminars = (params, key) =>
    useQuery([key, params], () => getThesisSeminars(params, key), {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });

export const useThesisSeminar = (id) =>
    useQuery(['thesisSeminar', id], () => getThesisSeminar(id), {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });
