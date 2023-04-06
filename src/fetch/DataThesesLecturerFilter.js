import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { useQuery } from 'react-query';
import { getThesesLecturerFilter } from '../api/thesesApi';
import {
    ButtonIcon,
    DataError,
    DataLoading,
    DataNotFound,
    FormThesesLecturerFilter,
    Pagination,
} from '../components';

function DataThesesLecturerFilter() {
    const [params, setParams] = useState({
        lecturer_id: '',
        lecturer_status: '',
        student_status: '',
        page: '',
    });

    const {
        isLoading,
        isError,
        refetch,
        data: thesesLecturerFilter,
    } = useQuery(
        ['thesesLecturerFilter', params],
        () => getThesesLecturerFilter(params),
        { retry: false, enabled: false }
    );

    const handleFilter = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const lecturerId = formData.get('lecturer_id');
        const lecturerStatus = formData.get('lecturer_status');
        const studentStatus = formData.get('student_status');

        setParams((params) => ({
            ...params,
            lecturer_id: lecturerId,
            lecturer_status: lecturerStatus,
            student_status: studentStatus,
        }));

        refetch();
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
            <FormThesesLecturerFilter onSubmit={handleFilter} />
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Tanggal Daftar</th>
                            <th>NIM</th>
                            <th>Nama</th>
                            <th>Judul</th>
                            <th>KBK</th>
                            <th>Status</th>
                            <th>Lama TA</th>
                            <th>Tanggal Sidang</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading ? (
                            <DataLoading colSpan="12" />
                        ) : isError ? (
                            <DataError colSpan="12" />
                        ) : thesesLecturerFilter?.data.length > 0 ? (
                            thesesLecturerFilter.data.map((item, index) => {
                                return (
                                    <tr key={item.id}>
                                        <td>
                                            {thesesLecturerFilter.meta.from +
                                                index}
                                        </td>
                                        <td>{item.thesis.register_date}</td>
                                        <td>{item.student.nim}</td>
                                        <td>{item.student.name}</td>
                                        <td>{item.thesis.title}</td>
                                        <td>{item.thesis.field.name}</td>
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
                                                    type={'btn-outline-success'}
                                                    icon={<FaEye />}
                                                    url={`show/${item.id}`}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                            <DataNotFound colSpan="12" />
                        )}
                    </tbody>
                </table>
            </div>
            {thesesLecturerFilter ? (
                <Pagination
                    data={thesesLecturerFilter.meta}
                    onClick={(e) => handlePage(e)}
                />
            ) : null}
        </>
    );
}

export default DataThesesLecturerFilter;