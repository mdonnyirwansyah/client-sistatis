import { FaEye, FaPen, FaTrashAlt } from 'react-icons/fa';
import thesesApi from '../../../../api/thesesApi';
import {
    ButtonIcon,
    DataError,
    DataLoading,
    DataNotFound,
    FormButtonDelete,
} from '../../../../components';
import swal from 'sweetalert';
import sistatisApi from '../../../../api';
import toast from 'react-hot-toast';
import { useTheses } from '../../../../hooks/useTheses';

function DataTheses({ params }) {
    const { isLoading, isError, refetch, data } = useTheses(params);

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
                            `${thesesApi}/${id}`
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
        return <DataLoading colSpan="10" />;
    }

    if (isError) {
        return <DataError colSpan="10" />;
    }

    return data.data.length > 0 ? (
        data.data.map((item, index) => {
            return (
                <tr key={item.id}>
                    <td>{data.meta.from + index}</td>
                    <td>{item.thesis.register_date}</td>
                    <td>{item.nim}</td>
                    <td>{item.name}</td>
                    <td>{item.thesis.title}</td>
                    <td>{item.thesis.field.name}</td>
                    <td>{item.thesis.status}</td>
                    <td>{item.thesis.thesis_duration}</td>
                    <td>
                        {item.thesis.finish_date ? (
                            item.thesis.finish_date
                        ) : (
                            <span className="badge badge-warning text-white">
                                Belum Ditentukan
                            </span>
                        )}
                    </td>
                    <td>
                        <div className="d-flex align-items-center justify-content-center">
                            <ButtonIcon
                                title="Lihat"
                                type={'btn-outline-success mr-1'}
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
        <DataNotFound colSpan="10" />
    );
}

export default DataTheses;
