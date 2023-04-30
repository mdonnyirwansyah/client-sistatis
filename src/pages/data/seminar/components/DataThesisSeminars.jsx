import { FaEye, FaPen, FaTrashAlt } from 'react-icons/fa';
import seminarsApi from '../../../../api/seminarsApi';
import {
    ButtonIcon,
    DataError,
    DataLoading,
    DataNotFound,
    FormButtonDelete,
} from '../../../../components';
import swal from 'sweetalert';
import toast from 'react-hot-toast';
import sistatisApi from '../../../../api';
import { useThesisSeminars } from '../../../../hooks/useSeminars';

function DataThesisSeminars({ params, queryKey }) {
    const { isLoading, isError, refetch, data } = useThesisSeminars(
        params,
        queryKey
    );

    const handleDelete = (id) => {
        swal({
            title: 'Are you sure?',
            text: 'Once deleted, you will not be able to recover this data!',
            icon: 'warning',
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                const toastDeleteData = toast.loading('Loading...');
                const deleteData = async (id) => {
                    try {
                        const response = await sistatisApi.delete(
                            `${seminarsApi}/${id}`
                        );
                        const data = response.data;
                        refetch();
                        toast.success(data.message, {
                            id: toastDeleteData,
                        });
                    } catch (error) {
                        if (error.response) {
                            if (error.response) {
                                toast.error('Something when wrong...', {
                                    id: toastDeleteData,
                                });
                            }
                        } else {
                            toast.error(error.message, {
                                id: toastDeleteData,
                            });
                        }
                    }
                };

                deleteData(id);
            } else {
                swal('Your data is safe!');
            }
        });
    };

    if (isLoading) {
        return <DataLoading colSpan="7" />;
    }

    if (isError) {
        return <DataError colSpan="7" />;
    }

    return data.data.length > 0 ? (
        data.data.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{data.meta.from + index}</td>
                    <td>{item.seminar.register_date}</td>
                    <td>
                        {item.seminar.date ? (
                            item.seminar.date
                        ) : (
                            <span className="badge badge-warning text-white">
                                Belum Ditentukan
                            </span>
                        )}
                    </td>
                    <td>{item.student.nim}</td>
                    <td>{item.student.name}</td>
                    <td>{item.thesis.title}</td>
                    <td>
                        <div className="d-flex align-items-center justify-content-center">
                            <ButtonIcon
                                title="Lihat"
                                type="btn-outline-success mr-1"
                                icon={<FaEye />}
                                url={`show/${item.id}`}
                            />
                            <ButtonIcon
                                title="Edit"
                                type="btn-outline-warning mx-1"
                                icon={<FaPen />}
                                url={`edit/${item.id}`}
                            />
                            <FormButtonDelete
                                title="Hapus"
                                icon={<FaTrashAlt />}
                                onClick={() => handleDelete(item.id)}
                            />
                        </div>
                    </td>
                </tr>
            );
        })
    ) : (
        <DataNotFound colSpan="7" />
    );
}

export default DataThesisSeminars;
