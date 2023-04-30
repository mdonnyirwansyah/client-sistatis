import { useState } from 'react';
import { FormInput, FormSelect, FormButton } from '../../../../components';
import { useMutation } from 'react-query';
import { thesisRegister } from '../../../../api/thesesApi';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useFields } from '../../../../hooks/useFields';
import { useLecturers } from '../../../../hooks/useLecturers';

const FormThesisRegister = () => {
    const navigate = useNavigate();
    const { data: fields } = useFields();
    const { data: lecturers } = useLecturers();
    const [form, setForm] = useState({
        student: {
            name: '',
            nim: '',
            phone: '',
            thesis: {
                title: '',
                field_id: '',
                register_date: '',
                semester: '',
                supervisors: [
                    {
                        lecturer_id: '',
                        status: 'Pembimbing 1',
                    },
                    {
                        lecturer_id: '',
                        status: 'Pembimbing 2',
                    },
                ],
            },
        },
    });

    const handleForm = (e) => {
        switch (e.target.id) {
            case 'name':
                setForm((form) => ({
                    ...form,
                    student: {
                        ...form.student,
                        name: e.target.value,
                    },
                }));
                break;

            case 'nim':
                setForm((form) => ({
                    ...form,
                    student: {
                        ...form.student,
                        nim: e.target.value,
                    },
                }));
                break;

            case 'phone':
                setForm((form) => ({
                    ...form,
                    student: {
                        ...form.student,
                        phone: e.target.value,
                    },
                }));
                break;

            case 'register_date':
                setForm((form) => ({
                    ...form,
                    student: {
                        ...form.student,
                        thesis: {
                            ...form.student.thesis,
                            register_date: e.target.value,
                        },
                    },
                }));
                break;

            case 'title':
                setForm((form) => ({
                    ...form,
                    student: {
                        ...form.student,
                        thesis: {
                            ...form.student.thesis,
                            title: e.target.value,
                        },
                    },
                }));
                break;

            case 'field_id':
                setForm((form) => ({
                    ...form,
                    student: {
                        ...form.student,
                        thesis: {
                            ...form.student.thesis,
                            field_id: parseInt(e.target.value),
                        },
                    },
                }));
                break;

            case 'semester':
                setForm((form) => ({
                    ...form,
                    student: {
                        ...form.student,
                        thesis: {
                            ...form.student.thesis,
                            semester: e.target.value,
                        },
                    },
                }));
                break;

            case 'pembimbing_1':
                setForm((form) => ({
                    ...form,
                    student: {
                        ...form.student,
                        thesis: {
                            ...form.student.thesis,
                            supervisors: {
                                ...form.student.thesis.supervisors,
                                [0]: {
                                    ...form.student.thesis.supervisors[0],
                                    lecturer_id: e.target.value,
                                },
                            },
                        },
                    },
                }));
                break;

            default:
                setForm((form) => ({
                    ...form,
                    student: {
                        ...form.student,
                        thesis: {
                            ...form.student.thesis,
                            supervisors: {
                                ...form.student.thesis.supervisors,
                                [1]: {
                                    ...form.student.thesis.supervisors[1],
                                    lecturer_id: e.target.value,
                                },
                            },
                        },
                    },
                }));
                break;
        }
    };

    const [errors, setErrors] = useState({});

    const mutation = useMutation({
        mutationFn: thesisRegister,
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
            return navigate('/data/thesis', { replace: true });
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        mutation.mutate(form);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="lead">
                <strong>Mahasiswa</strong>
            </h2>
            <hr />
            <FormInput
                label="Nama"
                name="name"
                id="name"
                type="text"
                onChange={handleForm}
                value={form.student.name}
                errors={errors?.student_name}
            />
            <FormInput
                label="Nim"
                name="nim"
                id="nim"
                type="text"
                onChange={handleForm}
                value={form.student.nim}
                errors={errors?.student_nim}
            />
            <FormInput
                label="No. HP"
                name="phone"
                id="phone"
                type="text"
                onChange={handleForm}
                value={form.student.phone}
                errors={errors?.student_phone}
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
                onChange={handleForm}
                value={form.student.thesis.register_date}
                errors={errors?.student_thesis_register_date}
            />
            <FormInput
                label="Judul"
                name="title"
                id="title"
                type="text"
                onChange={handleForm}
                value={form.student.thesis.title}
                errors={errors?.student_thesis_title}
            />
            <FormSelect
                label="KBK"
                name="field_id"
                id="field_id"
                onChange={handleForm}
                value={form.student.thesis.field_id}
                errors={errors?.student_thesis_field_id}
            >
                {fields?.length > 0 ? (
                    fields?.map((field, index) => {
                        return (
                            <option key={index} value={field.id}>
                                {field.name}
                            </option>
                        );
                    })
                ) : (
                    <option disabled>Data not found.</option>
                )}
            </FormSelect>
            <FormSelect
                label={form.student.thesis.supervisors[0].status}
                name={form.student.thesis.supervisors[0].status
                    .toLowerCase()
                    .replace(/ /g, '_')}
                id={form.student.thesis.supervisors[0].status
                    .toLowerCase()
                    .replace(/ /g, '_')}
                onChange={handleForm}
                value={form.student.thesis.supervisors[0].lecturer_id}
                errors={errors?.student_thesis_supervisors_0_lecturer_id}
            >
                {lecturers?.length > 0 ? (
                    lecturers?.map((lecturer, index) => {
                        return (
                            <option key={index} value={lecturer.id}>
                                {lecturer.name}
                            </option>
                        );
                    })
                ) : (
                    <option disabled>Data not found.</option>
                )}
            </FormSelect>
            <FormSelect
                label={form.student.thesis.supervisors[1].status}
                name={form.student.thesis.supervisors[1].status
                    .toLowerCase()
                    .replace(/ /g, '_')}
                id={form.student.thesis.supervisors[1].status
                    .toLowerCase()
                    .replace(/ /g, '_')}
                onChange={handleForm}
                value={form.student.thesis.supervisors[1].lecturer_id}
                errors={errors?.student_thesis_supervisors_0_lecturer_id}
            >
                {lecturers?.length > 0 ? (
                    lecturers?.map((lecturer, index) => {
                        return (
                            <option key={index} value={lecturer.id}>
                                {lecturer.name}
                            </option>
                        );
                    })
                ) : (
                    <option disabled>Data not found.</option>
                )}
            </FormSelect>
            <FormInput
                label="Semester"
                name="semester"
                id="semester"
                type="text"
                onChange={handleForm}
                value={form.student.thesis.semester}
                errors={errors?.student_thesis_semester}
            />
            <FormButton
                label={mutation.isLoading ? 'Loading' : 'Submit'}
                type="submit"
                disabled={mutation.isLoading ? true : false}
            />
        </form>
    );
};

export default FormThesisRegister;
