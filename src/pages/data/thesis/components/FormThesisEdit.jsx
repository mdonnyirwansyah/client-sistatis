import { FormInput, FormSelect, FormButton } from '../../../../components';
import { useNavigate } from 'react-router-dom';
import { useFields } from '../../../../hooks/useFields';
import { useLecturers } from '../../../../hooks/useLecturers';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useMutation, useQueryClient } from 'react-query';
import { thesisUpdate } from '../../../../api/thesesApi';

const FormThesisEdit = ({ data }) => {
    const navigate = useNavigate();
    const { data: fields } = useFields();
    const { data: lecturers } = useLecturers();
    let studentStatus = '';
    let thesisStatus = '';

    switch (data?.status) {
        case 'Lulus':
            studentStatus = '1';
            break;

        default:
            studentStatus = '0';
            break;
    }

    switch (data?.thesis?.status) {
        case 'Sidang Tugas Akhir':
            thesisStatus = '3';
            break;

        case 'Seminar Hasil Tugas Akhir':
            thesisStatus = '2';
            break;

        case 'Seminar Proposal Tugas Akhir':
            thesisStatus = '1';
            break;

        default:
            thesisStatus = '0';
            break;
    }

    const [form, setForm] = useState({
        id: data.id,
        student: {
            name: data.name,
            nim: data.nim,
            phone: data.phone,
            register_date: data.register_date,
            generation: data.generation,
            status: studentStatus,
            graduate_date: data.graduate_date,
            gpa: data.gpa,
            thesis: {
                title: data.thesis.title,
                field_id: data.thesis.field.id,
                register_date: data.thesis.register_date,
                semester: data.thesis.semester,
                finish_date: data.thesis.finish_date,
                status: thesisStatus,
                supervisors: [
                    {
                        lecturer_id: data.thesis.supervisors[0].id,
                        status: data.thesis.supervisors[0].status,
                    },
                    {
                        lecturer_id: data.thesis.supervisors[1].id,
                        status: data.thesis.supervisors[1].status,
                    },
                ],
            },
        },
    });

    const handleForm = (e) => {
        switch (e.target.id) {
            case 'student_register_date':
                setForm((form) => ({
                    ...form,
                    student: {
                        ...form.student,
                        register_date: e.target.value,
                    },
                }));
                break;

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

            case 'generation':
                setForm((form) => ({
                    ...form,
                    student: {
                        ...form.student,
                        generation: e.target.value,
                    },
                }));
                break;

            case 'student_status':
                setForm((form) => ({
                    ...form,
                    student: {
                        ...form.student,
                        status: e.target.value,
                    },
                }));
                break;

            case 'gpa':
                setForm((form) => ({
                    ...form,
                    student: {
                        ...form.student,
                        gpa: e.target.value,
                    },
                }));
                break;

            case 'graduate_date':
                setForm((form) => ({
                    ...form,
                    student: {
                        ...form.student,
                        graduate_date: e.target.value,
                    },
                }));
                break;

            case 'thesis_register_date':
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
                            field_id: e.target.value,
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

            case 'pembimbing_2':
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

            case 'thesis_status':
                setForm((form) => ({
                    ...form,
                    student: {
                        ...form.student,
                        thesis: {
                            ...form.student.thesis,
                            status: e.target.value,
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
                            finish_date: e.target.value,
                        },
                    },
                }));
                break;
        }
    };

    const [errors, setErrors] = useState({});
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: thesisUpdate,
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
            queryClient.setQueryData(
                ['thesis', form.id.toString()],
                data.data.data
            );
            toast.success(data.data.message);
            return navigate(-1);
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
                label="Tanggal Daftar"
                name="student_register_date"
                id="student_register_date"
                type="date"
                onChange={handleForm}
                value={form.student.register_date}
                errors={errors?.student_register_date}
            />
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
            <FormInput
                label="Angkatan"
                name="generation"
                id="generation"
                type="number"
                onChange={handleForm}
                value={form.student.generation}
                errors={errors?.student_generation}
            />
            <FormSelect
                label="Status"
                name="student_status"
                id="student_status"
                onChange={handleForm}
                value={form.student.status}
                errors={errors?.student_status}
            >
                <option value="0">Belum Lulus</option>
                <option value="1">Lulus</option>
            </FormSelect>
            {form.student.status === '1' ? (
                <>
                    <FormInput
                        label="IPK"
                        name="gpa"
                        id="gpa"
                        type="text"
                        onChange={handleForm}
                        value={form.student.gpa}
                        errors={errors?.student_gpa}
                    />
                    <FormInput
                        label="Tanggal Lulus"
                        name="graduate_date"
                        id="graduate_date"
                        type="date"
                        onChange={handleForm}
                        value={form.student.graduate_date}
                        errors={errors?.student_graduate_date}
                    />
                </>
            ) : null}
            <h2 className="lead">
                <strong>Tugas Akhir</strong>
            </h2>
            <hr />
            <FormInput
                label="Tanggal Daftar"
                name="thesis_register_date"
                id="thesis_register_date"
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
                errors={errors?.student_thesis_supervisors_1_lecturer_id}
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
            <FormSelect
                label="Status"
                name="thesis_status"
                id="thesis_status"
                onChange={handleForm}
                value={form.student.thesis.status}
                errors={errors?.student_thesis_status}
            >
                <option value="0">Pendaftaran Tugas Akhir</option>
                <option value="1">Seminar Proposal Tugas Akhir</option>
                <option value="2">Seminar Hasil Tugas Akhir</option>
                <option value="3">Sidang Tugas Akhir</option>
            </FormSelect>
            {form.student.thesis.status === '3' ? (
                <>
                    <FormInput
                        label="Tanggal Selesai"
                        name="finish_date"
                        id="finish_date"
                        type="date"
                        onChange={handleForm}
                        value={form.student.thesis.finish_date}
                        errors={errors?.student_thesis_finish_date}
                    />
                </>
            ) : null}
            <FormButton
                label={mutation.isLoading ? 'Loading' : 'Simpan'}
                type="submit"
                disabled={mutation.isLoading ? true : false}
            />
        </form>
    );
};

export default FormThesisEdit;
