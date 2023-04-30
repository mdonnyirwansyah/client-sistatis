import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { getMe } from '../../api/authsApi';
import { toast } from 'react-hot-toast';
import { removeAccount, removeAuthentication } from '../../api';

const ProtectedRoutes = ({ children }) => {
    const navigate = useNavigate();
    const effect = useRef(false);
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: getMe,
        onError: (error) => {
            if (error.response) {
                if (error.response.status === 401) {
                    removeAuthentication();
                    removeAccount();

                    toast.error(error.response.data.message);
                    navigate(`/login`, { replace: true });
                }
            }
        },
        onSuccess: (data) => {
            queryClient.setQueryData(['account'], data);
        },
    });

    useEffect(() => {
        if (effect.current === false) {
            mutation.mutate();

            return () => (effect.current = true);
        }
    }, []);

    return <>{children}</>;
};

export default ProtectedRoutes;
