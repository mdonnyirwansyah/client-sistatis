import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { useQuery } from 'react-query';
import { getThesisSeminarsSchedule } from '../api/seminarsApi';
import {
    ButtonIcon,
    DataError,
    DataLoading,
    DataNotFound,
    Pagination,
} from '../components';

function DataThesisSeminarsSchedule({ data }) {
    const [params, setParams] = useState({
        name: data.name,
        status: data.status,
        page: '',
    });

    const {
        isLoading,
        isError,
        data: thesisSeminarsSchedule,
    } = useQuery(
        ['thesisSeminarsSchedule', params],
        () => getThesisSeminarsSchedule(params),
        {
            retry: false,
        }
    );

    const handlePage = (e) => {
        const page = e.target.getAttribute('data-value');

        setParams((params) => ({
            ...params,
            page: page,
        }));
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
                        ) : thesisSeminarsSchedule.data.length > 0 ? (
                            thesisSeminarsSchedule.data.map((item, index) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{thesisSeminarsSchedule.meta.from + index}</td>
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
                                                <ButtonIcon
                                                    title="Lihat"
                                                    type="btn-outline-success"
                                                    icon={<FaEye />}
                                                    url={`show/${item.id}`}
                                                />
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
            {thesisSeminarsSchedule ? (
                <Pagination
                    data={thesisSeminarsSchedule.meta}
                    onClick={(e) => handlePage(e)}
                />
            ) : null}
        </>
    );
}

export default DataThesisSeminarsSchedule;
