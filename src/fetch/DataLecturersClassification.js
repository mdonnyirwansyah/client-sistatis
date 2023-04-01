import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { useQuery } from 'react-query';
import { getLecturersClassification } from '../api/lecturersApi';
import {
    ButtonIcon,
    DataError,
    DataLoading,
    DataNotFound,
    FormSelect,
    Pagination,
} from '../components';
import DataSemesters from './DataSemesters';

function DatalecturersClassification() {
    const [params, setParams] = useState({
        semester: '',
        page: '',
    });

    const {
        isLoading,
        isError,
        data: lecturersClassification,
    } = useQuery(
        ['lecturersClassification', params],
        () => getLecturersClassification(params),
        { retry: false }
    );

    const handleFilter = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const semester = formData.get('semester');

        setParams((params) => ({
            ...params,
            semester: semester,
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
                    <div className="col-sm-10">
                        <FormSelect
                            label="Semester"
                            type="no-label"
                            name="semester"
                            id="semester"
                        >
                            <DataSemesters />
                        </FormSelect>
                    </div>
                    <div className="col-sm-2">
                        <button
                            type="submit"
                            className="btn btn-block btn-primary"
                        >
                            Cari
                        </button>
                    </div>
                </div>
            </form>
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>NIP</th>
                            <th>Nama</th>
                            <th>P1</th>
                            <th>P2</th>
                            <th>P</th>
                            <th>KS</th>
                            <th>Total P1</th>
                            <th>Total P2</th>
                            <th>Total P</th>
                            <th>Total KS</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading ? (
                            <DataLoading colSpan="12" />
                        ) : isError ? (
                            <DataError colSpan="12" />
                        ) : lecturersClassification.data.length > 0 ? (
                            lecturersClassification.data.map((item, index) => {
                                return (
                                    <tr key={item.id}>
                                        <td>
                                            {lecturersClassification.meta.from +
                                                index}
                                        </td>
                                        <td>{item.nip}</td>
                                        <td>{item.name}</td>
                                        <td>
                                            {
                                                item.supervisors_1_by_semester_count
                                            }
                                        </td>
                                        <td>
                                            {
                                                item.supervisors_2_by_semester_count
                                            }
                                        </td>
                                        <td>
                                            {item.examiners_by_semester_count}
                                        </td>
                                        <td>
                                            {
                                                item.chief_of_examiners_by_semester_count
                                            }
                                        </td>
                                        <td>{item.supervisors1_count}</td>
                                        <td>{item.supervisors2_count}</td>
                                        <td>{item.examiners_count}</td>
                                        <td>{item.chief_of_examiners_count}</td>
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
            {lecturersClassification ? (
                <Pagination
                    data={lecturersClassification.meta}
                    onClick={(e) => handlePage(e)}
                />
            ) : null}
        </>
    );
}

export default DatalecturersClassification;
