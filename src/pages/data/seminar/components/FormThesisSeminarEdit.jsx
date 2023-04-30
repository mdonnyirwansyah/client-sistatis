import { useEffect, useState } from 'react';
import { FormInput, FormSelect, FormButton } from '../../../../components';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useLecturers } from '../../../../hooks/useLecturers';
import { useLocations } from '../../../../hooks/useLocations';
import { useMutation } from 'react-query';
import { thesisSeminarUpdate } from '../../../../api/seminarsApi';

const FormThesisSeminarEdit = ({ data }) => {
    const { data: lecturers } = useLecturers();
    const { data: locations } = useLocations();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    let status;
    switch (data.seminar.status) {
        case 'Validasi':
            status = '2';
            break;

        case 'Penjadwalan':
            status = '1';
            break;

        default:
            status = '0';
            break;
    }

    const [form, setForm] = useState({
        id: data.id,
        seminar: {
            register_date: data.seminar.register_date,
            date: data.seminar.date,
            time: data.seminar.time,
            location_id: data.seminar.location.id,
            semester: data.seminar.semester,
            status: status,
            examiners: [
                {
                    lecturer_id: data.seminar.examiners[0].id,
                    status: 'Penguji 1',
                },
                {
                    lecturer_id: data.seminar.examiners[1].id,
                    status: 'Penguji 2',
                },
                {
                    lecturer_id: data.seminar.examiners[2].id,
                    status: 'Penguji 3',
                },
            ],
        },
    });

    useEffect(() => {
        if (data.seminar.chief_of_examiner) {
            setForm((form) => ({
                ...form,
                seminar: {
                    ...form.seminar,
                    examiners: {
                        ...form.seminar.examiners,
                        [3]: {
                            lecturer_id: data.seminar.chief_of_examiner.id,
                            status: 'Ketua Sidang',
                        },
                    },
                },
            }));
        }
    }, []);

    const handleForm = (e) => {
        switch (e.target.id) {
            case 'register_date':
                setForm((form) => ({
                    ...form,
                    seminar: {
                        ...form.seminar,
                        register_date: e.target.value,
                    },
                }));
                break;

            case 'date':
                setForm((form) => ({
                    ...form,
                    seminar: {
                        ...form.seminar,
                        date: e.target.value,
                    },
                }));
                break;

            case 'time':
                setForm((form) => ({
                    ...form,
                    seminar: {
                        ...form.seminar,
                        time: e.target.value,
                    },
                }));
                break;

            case 'location_id':
                setForm((form) => ({
                    ...form,
                    seminar: {
                        ...form.seminar,
                        location_id: e.target.value,
                    },
                }));
                break;

            case 'status':
                setForm((form) => ({
                    ...form,
                    seminar: {
                        ...form.seminar,
                        status: e.target.value,
                    },
                }));
                break;

            case 'semester':
                setForm((form) => ({
                    ...form,
                    seminar: {
                        ...form.seminar,
                        semester: e.target.value,
                    },
                }));
                break;

            case 'penguji_1':
                setForm((form) => ({
                    ...form,
                    seminar: {
                        ...form.seminar,
                        examiners: {
                            ...form.seminar.examiners,
                            [0]: {
                                ...form.seminar.examiners[0],
                                lecturer_id: e.target.value,
                            },
                        },
                    },
                }));
                break;

            case 'penguji_2':
                setForm((form) => ({
                    ...form,
                    seminar: {
                        ...form.seminar,
                        examiners: {
                            ...form.seminar.examiners,
                            [1]: {
                                ...form.seminar.examiners[1],
                                lecturer_id: e.target.value,
                            },
                        },
                    },
                }));
                break;

            case 'penguji_3':
                setForm((form) => ({
                    ...form,
                    seminar: {
                        ...form.seminar,
                        examiners: {
                            ...form.seminar.examiners,
                            [2]: {
                                ...form.seminar.examiners[2],
                                lecturer_id: e.target.value,
                            },
                        },
                    },
                }));
                break;

            default:
                setForm((form) => ({
                    ...form,
                    seminar: {
                        ...form.seminar,
                        examiners: {
                            ...form.seminar.examiners,
                            [3]: {
                                ...form.seminar.examiners[3],
                                lecturer_id: e.target.value,
                            },
                        },
                    },
                }));
                break;
        }
    };

    const mutation = useMutation({
        mutationFn: thesisSeminarUpdate,
        onError: (error) => {
            if (error.response) {
                if (error.response.status === 422) {
                    const message = error.response.data.data;
                    let newErrors = {};
                    for (const key in message) {
                        newErrors[`${key.replace(/\./g, '_')}`] = message[key];
                    }
                    setErrors(newErrors);
                }
                if (error.response.data) {
                    toast.error(error.response.data.message);
                } else {
                    toast.error(error.response.statusText);
                }
            } else {
                toast.error(error.message);
            }
        },
        onSuccess: (data) => {
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
            <input type="hidden" name="_method" value="put" />
            <input type="hidden" name="thesis_id" value={data.thesis.id} />
            <h2 className="lead">
                <strong>Seminar</strong>
            </h2>
            <hr />
            <FormInput
                label="Tanggal Daftar"
                name="register_date"
                id="register_date"
                type="date"
                onChange={handleForm}
                value={form.seminar.register_date}
                errors={errors?.seminar_register_date}
            />
            <FormInput
                label="Tanggal Seminar"
                name="date"
                id="date"
                type="date"
                onChange={handleForm}
                value={form.seminar.date}
                errors={errors?.seminar_date}
            />
            <FormInput
                label="Jam Seminar"
                name="time"
                id="time"
                type="time"
                onChange={handleForm}
                value={form.seminar.time}
                errors={errors?.seminar_time}
            />
            <FormSelect
                label="Lokasi"
                name="location"
                id="location"
                onChange={handleForm}
                value={form.seminar.location_id}
                errors={errors?.seminar_location_id}
            >
                {locations?.length > 0 ? (
                    locations?.map((location, index) => {
                        return (
                            <option key={index} value={location.id}>
                                {location.name}
                            </option>
                        );
                    })
                ) : (
                    <option disabled>Data not found.</option>
                )}
            </FormSelect>
            <FormSelect
                label={form.seminar.examiners[0].status}
                name={form.seminar.examiners[0].status
                    .toLowerCase()
                    .replace(/ /g, '_')}
                id={form.seminar.examiners[0].status
                    .toLowerCase()
                    .replace(/ /g, '_')}
                onChange={handleForm}
                value={form.seminar.examiners[0].lecturer_id}
                errors={errors?.seminar_examiners_0_lecturer_id}
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
                label={form.seminar.examiners[1].status}
                name={form.seminar.examiners[1].status
                    .toLowerCase()
                    .replace(/ /g, '_')}
                id={form.seminar.examiners[1].status
                    .toLowerCase()
                    .replace(/ /g, '_')}
                onChange={handleForm}
                value={form.seminar.examiners[1].lecturer_id}
                errors={errors?.seminar_examiners_1_lecturer_id}
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
                label={form.seminar.examiners[2].status}
                name={form.seminar.examiners[2].status
                    .toLowerCase()
                    .replace(/ /g, '_')}
                id={form.seminar.examiners[2].status
                    .toLowerCase()
                    .replace(/ /g, '_')}
                onChange={handleForm}
                value={form.seminar.examiners[2].lecturer_id}
                errors={errors?.seminar_examiners_2_lecturer_id}
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
            {form.seminar.examiners[3] ? (
                <FormSelect
                    label={form.seminar.examiners[3].status}
                    name={form.seminar.examiners[3].status
                        .toLowerCase()
                        .replace(/ /g, '_')}
                    id={form.seminar.examiners[3].status
                        .toLowerCase()
                        .replace(/ /g, '_')}
                    onChange={handleForm}
                    value={form.seminar.examiners[3].lecturer_id}
                    errors={errors?.seminar_examiners_3_lecturer_id}
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
            ) : null}
            <FormInput
                label="Semester"
                name="semester"
                id="semester"
                type="text"
                onChange={handleForm}
                value={form.seminar.semester}
                errors={errors?.seminar_semester}
            />
            <FormSelect
                label="Status"
                name="status"
                id="status"
                onChange={handleForm}
                value={form.seminar.status}
                errors={errors?.seminar_status}
            >
                <option value="0">Pendaftaran</option>
                <option value="1">Penjadwalan</option>
                <option value="2">Validasi</option>
            </FormSelect>
            <FormButton
                label={mutation.isLoading ? 'Loading...' : 'Simpan'}
                type="submit"
                disabled={mutation.isLoading ? true : false}
            />
        </form>
    );
};

export default FormThesisSeminarEdit;
