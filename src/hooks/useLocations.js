import { useQuery } from 'react-query';
import { getLocations } from '../api/locationsApi';

export const useLocations = () =>
    useQuery(['locations'], getLocations, {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });
