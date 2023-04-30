import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { getMe } from '../../api/authsApi';

const ProtectedRoutes = ({ children }) => {
    const navigate = useNavigate();
    const effect = useRef(false);
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: getMe,
        onError: () => {
            navigate(`/login`, { replace: true });
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
