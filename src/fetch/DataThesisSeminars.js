import React, { useState } from 'react';
import { FaEye, FaPen, FaTrashAlt } from 'react-icons/fa';
import { useQuery } from 'react-query';
import seminarsApi, { getThesisSeminars } from '../api/seminarsApi';
import {
    ButtonIcon,
    DataError,
    DataLoading,
    DataNotFound,
    FormButtonDelete,
    Pagination,
} from '../components';
import swal from 'sweetalert';
import toast from 'react-hot-toast';
import sistatisApi from '../api';
import { useSelector } from 'react-redux';

function DataThesisSeminars({ name }) {
    const [params, setParams] = useState({
        name: name,
        page: '',
    });

    const {
        isLoading,
        isError,
        refetch,
        data: thesisSeminars,
    } = useQuery(['thesisSeminars', params], () => getThesisSeminars(params), {
        retry: false,
    });
    const { user } = useSelector((state) => state.auth);

    const handlePage = (e) => {
        const page = e.target.getAttribute('data-value');

        setParams((params) => ({
            ...params,
            page: page,
        }));
    };

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

    return (
        <>
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Tanggal Daftar</th>
                            <th>Tanggal Seminar</th>
                            <th>NIM</th>
                            <th>Nama</th>
                            <th>Judul</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading ? (
                            <DataLoading colSpan="7" />
                        ) : isError ? (
                            <DataError colSpan="7" />
                        ) : thesisSeminars.data.length > 0 ? (
                            thesisSeminars.data.map((item, index) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{thesisSeminars.meta.from + index}</td>
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
                                        <td>{item.thesis.student.nim}</td>
                                        <td>{item.thesis.student.name}</td>
                                        <td>{item.thesis.title}</td>
                                        <td>
                                            <div className="d-flex align-items-center justify-content-center">
                                                {user?.role ===
                                                    'Administrator' ||
                                                user?.role === 'Coordinator' ||
                                                user?.role ===
                                                    'Head of Department' ? (
                                                    <ButtonIcon
                                                        title="Lihat"
                                                        type="btn-outline-success mr-1"
                                                        icon={<FaEye />}
                                                        url={`show/${item.id}`}
                                                    />
                                                ) : null}

                                                {user?.role ===
                                                    'Administrator' ||
                                                user?.role === 'Coordinator' ? (
                                                    <>
                                                        <ButtonIcon
                                                            title="Edit"
                                                            type={`btn-outline-warning ${
                                                                user?.role ===
                                                                'Administrator'
                                                                    ? 'mx-1'
                                                                    : 'mr-1'
                                                            }`}
                                                            icon={<FaPen />}
                                                            url={`edit/${item.id}`}
                                                        />
                                                        <FormButtonDelete
                                                            title="Hapus"
                                                            icon={
                                                                <FaTrashAlt />
                                                            }
                                                            onClick={() =>
                                                                handleDelete(
                                                                    item.id
                                                                )
                                                            }
                                                        />
                                                    </>
                                                ) : null}
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                            <DataNotFound colSpan="7" />
                        )}
                    </tbody>
                </table>
            </div>
            {thesisSeminars ? (
                <Pagination
                    data={thesisSeminars.meta}
                    onClick={(e) => handlePage(e)}
                />
            ) : null}
        </>
    );
}

export default DataThesisSeminars;
