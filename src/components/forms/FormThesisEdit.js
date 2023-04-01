import { useState } from 'react';
import { FormInput, FormSelect, FormButton } from '../../components';
import { DataFields, DataLecturers } from '../../fetch';
import toast from 'react-hot-toast';
import sistatisApi from '../../api';
import thesesApi from '../../api/thesesApi';
import { useNavigate, useParams } from 'react-router-dom';

const FormThesisEdit = ({ data }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState(data.student.name);
    const [nim, setNim] = useState(data.student.nim);
    const [phone, setPhone] = useState(data.student.phone);
    const [registerDate, setRegisterDate] = useState(data.thesis.register_date);
    const [title, setTitle] = useState(data.thesis.title);
    const [field, setField] = useState(data.thesis.field_id);
    const [supervisor1, setSupervisor1] = useState(
        data.thesis.supervisors[0].id
    );
    const [supervisor2, setSupervisor2] = useState(
        data.thesis.supervisors[1].id
    );
    const [errors, setErrors] = useState({});
    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleNim = (e) => {
        setNim(e.target.value);
    };
    const handlePhone = (e) => {
        setPhone(e.target.value);
    };
    const handleRegisterDate = (e) => {
        setRegisterDate(e.target.value);
    };
    const handleTitle = (e) => {
        setTitle(e.target.value);
    };
    const handleField = (e) => {
        setField(e.target.value);
    };
    const handleSupervisor1 = (e) => {
        setSupervisor1(e.target.value);
    };
    const handleSupervisor2 = (e) => {
        setSupervisor2(e.target.value);
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
                const response = await sistatisApi.post(
                    `${thesesApi}/${id}`,
                    formData
                );
                const data = response.data;
                handleClearForm();
                toast.success(data.message, {
                    id: toastUpdateData,
                });
                return navigate(-1);
            } catch (error) {
                if (error.response) {
                    if (error.response.status === 422) {
                        const data = error.response.data;
                        toast.error(data.status, {
                            id: toastUpdateData,
                        });
                        setErrors(data.data);
                    }

                    toast.error(error.response.statusText, {
                        id: toastUpdateData,
                    });
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
            <h2 className="lead">
                <strong>Mahasiswa</strong>
            </h2>
            <hr />
            <FormInput
                label="Nama"
                name="name"
                id="name"
                type="text"
                onChange={handleName}
                value={name}
                errors={errors?.name}
            />
            <FormInput
                label="Nim"
                name="nim"
                id="nim"
                type="text"
                onChange={handleNim}
                value={nim}
                errors={errors?.nim}
            />
            <FormInput
                label="No. HP"
                name="phone"
                id="phone"
                type="text"
                onChange={handlePhone}
                value={phone}
                errors={errors?.phone}
            />
            <h2 className="lead">
                <strong>Tugas Akhir</strong>
            </h2>
            <hr />
            <FormInput
                label="Tanggal Daftar"
                name="register_date"
                id="register_date"
                type="date"
                onChange={handleRegisterDate}
                value={registerDate}
                errors={errors?.register_date}
            />
            <FormInput
                label="Judul"
                name="title"
                id="title"
                type="text"
                onChange={handleTitle}
                value={title}
                errors={errors?.title}
            />
            <FormSelect
                label="KBK"
                name="field"
                id="field"
                onChange={handleField}
                value={field}
                errors={errors?.field}
            >
                <DataFields data={field} />
            </FormSelect>
            <FormSelect
                label="Pembimbing 1"
                name="supervisor_1"
                id="supervisor_1"
                onChange={handleSupervisor1}
                value={supervisor1}
                errors={errors?.supervisor_1}
            >
                <DataLecturers disabled={supervisor2} />
            </FormSelect>
            <FormSelect
                label="Pembimbing 2"
                name="supervisor_2"
                id="supervisor_2"
                onChange={handleSupervisor2}
                value={supervisor2}
                errors={errors?.supervisor_2}
            >
                <DataLecturers disabled={supervisor1} />
            </FormSelect>
            <FormButton label="Simpan Perubahan" type="submit" />
        </form>
    );
};

export default FormThesisEdit;
