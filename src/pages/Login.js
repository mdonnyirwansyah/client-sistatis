import React, { useEffect, useState } from 'react';
import { Auth } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, reset } from '../features/authSlice';
import toast from 'react-hot-toast';

function Login() {
    const [errors, setErrors] = useState({});
    const [failed, setFailed] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, isError, isSuccess, isLoading, message } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        if (isError) {
            if (message === 'Network Error') {
                toast.error(message);
            }
            if (message.code === '401') {
                setErrors({});
                setFailed(message.data.failed);
            }
            if (message.code === '422') {
                setErrors(message.data);
                setFailed('');
            }
        }
        if (user || isSuccess) {
            navigate('/');
        }
        dispatch(reset());
    }, [user, isSuccess, isError, message, dispatch, navigate]);

    const handleLogin = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');
        dispatch(login({ email, password }));
    };

    return (
        <Auth title="Login">
            <form onSubmit={handleLogin}>
                {failed && (
                    <div className="alert alert-danger" role="alert">
                        {failed}
                    </div>
                )}
                <div className="mb-3">
                    <input
                        type="email"
                        className={`form-control ${
                            errors.email?.length > 0 && 'is-invalid'
                        }`}
                        name="email"
                        placeholder="Email"
                    />
                    <small className="invalid-feedback">
                        {errors.email?.map((error) => error)}
                    </small>
                </div>
                <div className="mb-3">
                    <input
                        type="password"
                        className={`form-control ${
                            errors.password?.length > 0 && 'is-invalid'
                        }`}
                        name="password"
                        placeholder="Password"
                    />
                    <small className="invalid-feedback">
                        {errors.password?.map((error) => error)}
                    </small>
                </div>
                <button type="submit" className="btn btn-block btn-primary">
                    {isLoading ? 'Loading..' : 'Login'}
                </button>
            </form>
        </Auth>
    );
}

export default Login;
