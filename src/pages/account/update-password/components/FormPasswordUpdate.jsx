import { useState } from 'react';
import { FormButton, FormInput } from '../../../../components';
import { useMutation } from 'react-query';
import { passwordUpdate } from '../../../../api/accountsApi';
import { toast } from 'react-hot-toast';

const FormPasswordUpdate = () => {
    const [errors, setErrors] = useState({});

    const [form, setForm] = useState({
        current_password: '',
        new_password: '',
        new_password_confirmation: '',
    });

    const handleForm = (e) => {
        switch (e.target.id) {
            case 'current_password':
                setForm((form) => ({
                    ...form,
                    current_password: e.target.value,
                }));
                break;

            case 'new_password':
                setForm((form) => ({
                    ...form,
                    new_password: e.target.value,
                }));
                break;

            default:
                setForm((form) => ({
                    ...form,
                    new_password_confirmation: e.target.value,
                }));
                break;
        }
    };

    const mutation = useMutation({
        mutationFn: passwordUpdate,
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
                }
            } else {
                toast.error(error.message);
            }
        },
        onSuccess: (data) => {
            toast.success(data.data.message);
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        mutation.mutate(form);
    };
    return (
        <form onSubmit={handleSubmit}>
            <FormInput
                label="Current Password"
                name="current_password"
                id="current_password"
                type="password"
                onChange={handleForm}
                value={form.current_password}
                errors={errors?.current_password}
            />
            <FormInput
                label="New Password"
                name="new_password"
                id="new_password"
                type="new_password"
                onChange={handleForm}
                value={form.new_password}
                errors={errors?.new_password}
            />
            <FormInput
                label="Confirm Password"
                name="new_password_confirmation"
                id="new_password_confirmation"
                type="password"
                onChange={handleForm}
                value={form.new_password_confirmation}
                errors={errors?.new_password_confirmation}
            />
            <FormButton
                label={mutation.isLoading ? 'Loading..' : 'Simpan'}
                type="submit"
            />
        </form>
    );
};

export default FormPasswordUpdate;
