import { useEffect, useState } from 'react';
import { FormInput, FormButton } from '..';
import toast from 'react-hot-toast';
import sistatisApi from '../../api';
import usersApi from '../../api/usersApi';

const FormProfile = ({ data }) => {
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (data) {
            setId(data.id);
            setEmail(data.email);
            setName(data.name);
        }
    }, [data]);

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleClearForm = () => {
        setErrors({});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const toastUpdateData = toast.loading('Loading...');
        const formData = new FormData(e.target);
        const updateData = async () => {
            try {
                await sistatisApi.post(`${usersApi}/${id}`, formData);
                handleClearForm();
                toast.success(`Successfully saved!`, {
                    id: toastUpdateData,
                });
            } catch (error) {
                if (error.response) {
                    if (error.response.status === 422) {
                        const data = error.response.data;
                        toast.error(data.status, {
                            id: toastUpdateData,
                        });
                        setErrors(data.data);
                    } else {
                        toast.error('Something when wrong...', {
                            id: toastUpdateData,
                        });
                    }
                } else {
                    toast.error(error.message, {
                        id: toastUpdateData,
                    });
                }
            }
        };

        updateData();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="hidden" name="_method" value="put" />
            <FormInput
                label="Email"
                name="email"
                id="email"
                type="text"
                onChange={handleEmail}
                value={email}
                errors={errors?.email}
            />
            <FormInput
                label="Name"
                name="name"
                id="name"
                type="text"
                onChange={handleName}
                value={name}
                errors={errors?.name}
            />
            <FormButton label="Simpan Perubahan" type="submit" />
        </form>
    );
};

export default FormProfile;
