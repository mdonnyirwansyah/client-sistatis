import { useMutation, useQueryClient } from 'react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { thesisSeminarValidate } from '../../../api/seminarsApi';
import { useThesisSeminars } from '../../../hooks/useSeminars';

const FormThesisSeminarValidate = ({ data }) => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const params = {
        type: data.seminar.type,
        status: '1',
        page: '',
    };

    let queryKey;

    switch (data.seminar.type) {
        case 'Seminar Proposal Tugas Akhir':
            queryKey = 'thesisProposalValidates';
            break;

        case 'Seminar Hasil Tugas Akhir':
            queryKey = 'thesisResultValidates';
            break;

        default:
            queryKey = 'thesisDefenceValidates';
            break;
    }

    const { refetch } = useThesisSeminars(params, queryKey);

    const mutation = useMutation({
        mutationFn: thesisSeminarValidate,
        onError: (error) => {
            if (error.response) {
                if (error.response.status === 422) {
                    toast.error(error.response.data.message);
                }
            } else {
                toast.error(error.message);
            }
        },
        onSuccess: (data) => {
            queryClient.setQueryData(
                ['thesisSeminar', data.data.data.id.toString()],
                data.data.data
            );
            refetch();
            toast.success(data.data.message);

            return navigate(-1);
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        mutation.mutate(data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="row mt-sm-0 mt-3">
                <div className="col-sm-12">
                    <h2 className="lead">
                        <strong>Validasi</strong>
                    </h2>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-sm-12 d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary">
                        Validasi
                    </button>
                </div>
            </div>
        </form>
    );
};

export default FormThesisSeminarValidate;
