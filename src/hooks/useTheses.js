import { useQuery } from 'react-query';
import { getThesesClassification } from '../api/thesesApi';

export const useThesesClassification = () =>
    useQuery(['thesesClassification'], getThesesClassification, {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });
