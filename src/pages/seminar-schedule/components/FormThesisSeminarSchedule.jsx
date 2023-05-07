import { useState } from 'react';
import { FormInput, FormSelect, FormButton } from '../../../components';
import toast from 'react-hot-toast';
import { thesisSeminarSchedule } from '../../../api/seminarsApi';
import { useNavigate } from 'react-router-dom';
import { useLocations } from '../../../hooks/useLocations';
import { useMutation, useQueryClient } from 'react-query';
import { useThesisSeminars } from '../../../hooks/useSeminars';

const FormThesisSeminarSchedule = ({ data }) => {
    const navigate = useNavigate();
    const { data: locations } = useLocations();
    const [errors, setErrors] = useState({});
    const queryClient = useQueryClient();
    const params = {
        type: data.seminar.type,
        status: '0',
        page: '',
    };

    let queryKey;

    switch (data.seminar.type) {
        case 'Seminar Proposal Tugas Akhir':
            queryKey = 'thesisProposalSchedules';
            break;

        case 'Seminar Hasil Tugas Akhir':
            queryKey = 'thesisResultSchedules';
            break;

        default:
            queryKey = 'thesisDefenceSchedules';
            break;
    }

    const { refetch } = useThesisSeminars(params, queryKey);

    const [form, setForm] = useState({
        id: data.id,
        seminar: {
            date: '',
            time: '',
            location_id: '',
        },
    });

    const handleForm = (e) => {
        switch (e.target.id) {
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

            default:
                setForm((form) => ({
                    ...form,
                    seminar: {
                        ...form.seminar,
                        location_id: e.target.value,
                    },
                }));
                break;
        }
    };

    const mutation = useMutation({
        mutationFn: thesisSeminarSchedule,
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
                ['thesisSeminar', form.id.toString()],
                data.data.data
            );
            refetch();
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
                <strong>Jadwal</strong>
            </h2>
            <hr />
            <FormInput
                label="Tanggal"
                name="date"
                id="date"
                type="date"
                onChange={handleForm}
                value={form.seminar.date}
                errors={errors?.seminar_date}
            />
            <FormInput
                label="Jam"
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
            <FormButton label="Simpan" type="submit" />
        </form>
    );
};

export default FormThesisSeminarSchedule;
