import React, { useState } from 'react';
import { FaEye, FaPen, FaTrashAlt } from 'react-icons/fa';
import { useQuery } from 'react-query';
import thesesApi, { getTheses } from '../api/thesesApi';
import {
    ButtonIcon,
    DataError,
    DataLoading,
    DataNotFound,
    FormButtonDelete,
    FormThesesFilter,
    Pagination,
} from '../components';
import swal from 'sweetalert';
import sistatisApi from '../api';
import toast from 'react-hot-toast';

function DataTheses() {
    const [params, setParams] = useState({
        field: '',
        status: '',
        page: '',
    });

    const {
        isLoading,
        isError,
        refetch,
        data: theses,
    } = useQuery(['theses', params], () => getTheses(params), { retry: false });

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

    const handleFilter = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const field = formData.get('field');
        const status = formData.get('status');

        setParams((params) => ({
            ...params,
            field: field,
            status: status,
        }));
    };

    const handlePage = (e) => {
        const page = e.target.getAttribute('data-value');

        setParams((params) => ({
            ...params,
            page: page,
        }));
    };

    return (
        <>
            <FormThesesFilter onSubmit={handleFilter} />
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Tanggal Daftar</th>
                            <th>NIM</th>
                            <th>Nama</th>
                            <th>Judul</th>
                            <th>Status</th>
                            <th>Lama TA</th>
                            <th>Tanggal Sidang</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading ? (
                            <DataLoading colSpan="8" />
                        ) : isError ? (
                            <DataError colSpan="8" />
                        ) : theses.data.length > 0 ? (
                            theses.data.map((item, index) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{theses.meta.from + index}</td>
                                        <td>{item.thesis.register_date}</td>
                                        <td>{item.student.nim}</td>
                                        <td>{item.student.name}</td>
                                        <td>{item.thesis.title}</td>
                                        <td>{item.thesis.status}</td>
                                        <td>{item.thesis.duration}</td>
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
                                                    type={
                                                        'btn-outline-success mr-1'
                                                    }
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
                                                    onClick={() =>
                                                        handleDelete(item.id)
                                                    }
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                            <DataNotFound colSpan="8" />
                        )}
                    </tbody>
                </table>
            </div>
            {theses ? (
                <Pagination data={theses.meta} onClick={(e) => handlePage(e)} />
            ) : null}
        </>
    );
}

export default DataTheses;
