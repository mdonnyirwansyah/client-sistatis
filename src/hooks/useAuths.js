import { useQuery } from 'react-query';
import { getMe } from '../api/authsApi';

export const useGetMe = () =>
    useQuery(['account'], getMe, {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });
