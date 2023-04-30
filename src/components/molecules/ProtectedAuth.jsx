import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../../api/authsApi';
import { useMutation } from 'react-query';

const ProtectedAuth = ({ children }) => {
    const navigate = useNavigate();
    const effect = useRef(false);
    const mutation = useMutation({
        mutationFn: getMe,
        onSuccess: () => {
            navigate(`/`, { replace: true });
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

export default ProtectedAuth;
