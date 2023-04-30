import React, { useState } from 'react';
import { Auth } from '../../components';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';
import { login } from '../../api/authsApi';
import { storeAuthentication } from '../../api';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [failed, setFailed] = useState('');

    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const handleForm = (e) => {
        switch (e.target.id) {
            case 'email':
                setForm((form) => ({
                    ...form,
                    email: e.target.value,
                }));
                break;

            default:
                setForm((form) => ({
                    ...form,
                    password: e.target.value,
                }));
                break;
        }
    };

    const mutation = useMutation({
        mutationFn: login,
        onError: (error) => {
            if (error.response) {
                if (error.response.status === 422) {
                    const message = error.response.data.data;
                    let newErrors = {};
                    for (const key in message) {
                        newErrors[`${key.replace(/\./g, '_')}`] = message[key];
                    }
                    setErrors(newErrors);
                    toast.error(error.response.data.message);
                } else if (error.response.status === 401) {
                    const message = error.response.data.data;
                    setFailed(message);
                    toast.error(error.response.data.message);
                }
            } else {
                toast.error(error.message);
            }
        },
        onSuccess: (data) => {
            storeAuthentication(data.data.data.access_token);

            toast.success(data.data.message);

            return navigate(`/`, { replace: true });
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        mutation.mutate(form);
    };

    return (
        <Auth title="Login">
            <form onSubmit={handleSubmit}>
                {failed && (
                    <div className="alert alert-danger" role="alert">
                        {failed}
                    </div>
                )}
                <div className="mb-3">
                    <input
                        type="email"
                        id="email"
                        className={`form-control ${
                            errors.email?.length > 0 && 'is-invalid'
                        }`}
                        name="email"
                        onChange={handleForm}
                        placeholder="Email"
                    />
                    <small className="invalid-feedback">
                        {errors.email?.map((error) => error)}
                    </small>
                </div>
                <div className="mb-3">
                    <input
                        type="password"
                        id="password"
                        className={`form-control ${
                            errors.password?.length > 0 && 'is-invalid'
                        }`}
                        name="password"
                        onChange={handleForm}
                        placeholder="Password"
                    />
                    <small className="invalid-feedback">
                        {errors.password?.map((error) => error)}
                    </small>
                </div>
                <button type="submit" className="btn btn-block btn-primary">
                    {mutation.isLoading ? 'Loading..' : 'Login'}
                </button>
            </form>
        </Auth>
    );
}

export default Login;
