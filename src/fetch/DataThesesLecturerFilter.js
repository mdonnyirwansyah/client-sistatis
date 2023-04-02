import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { useQuery } from 'react-query';
import { getThesesLecturerFilter } from '../api/thesesApi';
import {
    ButtonIcon,
    DataError,
    DataLoading,
    DataNotFound,
    FormSelect,
    Pagination,
} from '../components';
import DataLecturers from './DataLecturers';

function DataThesesLecturerFilter() {
    const [params, setParams] = useState({
        semester: '',
        page: '',
    });

    const {
        isLoading,
        isError,
        data: thesesLecturerFilter,
    } = useQuery(
        ['thesesLecturerFilter', params],
        () => getThesesLecturerFilter(params),
        { retry: false }
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
            <form className="mt-3" onSubmit={handleFilter}>
                <div className="row">
                    <div className="col-sm-3">
                        <FormSelect
                            label="Dosen"
                            type="no-label"
                            name="lecturer_id"
                            id="lecturer_id"
                        >
                            <DataLecturers />
                        </FormSelect>
                    </div>
                    <div className="col-sm-3">
                        <FormSelect
                            label="Status Dosen"
                            type="no-label"
                            name="lecturer_status"
                            id="lecturer_status"
                        >
                            <option value="Pembimbing 1">Pembimbing 1</option>
                            <option value="Pembimbing 2">Pembimbing 2</option>
                            <option value="Penguji">Penguji</option>
                        </FormSelect>
                    </div>
                    <div className="col-sm-3">
                        <FormSelect
                            label="Status Mahasiswa"
                            type="no-label"
                            name="student_status"
                            id="student_status"
                        >
                            <option value="Belum Lulus">Belum Lulus</option>
                            <option value="Lulus">Lulus</option>
                        </FormSelect>
                    </div>
                    <div className="col-sm-3">
                        <button
                            type="submit"
                            className="btn btn-block btn-primary"
                        >
                            Filter
                        </button>
                    </div>
                </div>
            </form>
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
                            <DataLoading colSpan="12" />
                        ) : isError ? (
                            <DataError colSpan="12" />
                        ) : thesesLecturerFilter.data.length > 0 ? (
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
