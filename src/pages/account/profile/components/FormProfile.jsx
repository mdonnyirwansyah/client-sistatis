import { useState } from 'react';
import { FormInput, FormButton } from '../../../../components';
import toast from 'react-hot-toast';
import { profileUpdate } from '../../../../api/accountsApi';
import { useMutation, useQueryClient } from 'react-query';

const FormProfile = ({ data }) => {
    const queryClient = useQueryClient();
    const [errors, setErrors] = useState({});

    const [form, setForm] = useState({
        email: data.email,
        name: data.name,
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
                    name: e.target.value,
                }));
                break;
        }
    };

    const mutation = useMutation({
        mutationFn: profileUpdate,
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
            queryClient.setQueryData(['account'], data.data.data);
            toast.success(data.data.message);
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        mutation.mutate(form);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="hidden" name="_method" value="put" />
            <FormInput
                label="Email"
                name="email"
                id="email"
                type="text"
                onChange={handleForm}
                value={form.email}
                errors={errors?.email}
            />
            <FormInput
                label="Name"
                name="name"
                id="name"
                type="text"
                onChange={handleForm}
                value={form.name}
                errors={errors?.name}
            />
            <FormButton
                label={mutation.isLoading ? 'Loading..' : 'Simpan'}
                type="submit"
            />
        </form>
    );
};

export default FormProfile;
