import { useState } from 'react';
import { useThesisFilters } from '../../../../../hooks/useTheses';
import { Pagination } from '../../../../../components/molecules';
import FormThesisLecturerFilter from './FormThesisLecturerFilter';
import DataThesisFilters from './DataThesisFilters';

const ThesisFilterTable = () => {
    const [params, setParams] = useState({
        lecturer_id: '',
        lecturer_status: '',
        student_status: '',
        page: '',
    });

    const { data } = useThesisFilters(params);

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
            <FormThesisLecturerFilter onSubmit={handleFilter} />
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
                            <th>Lama TA (Bulan)</th>
                            <th>Tanggal Sidang</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <DataThesisFilters params={params} />
                    </tbody>
                </table>
            </div>
            {data && (
                <Pagination data={data.meta} onClick={(e) => handlePage(e)} />
            )}
        </>
    );
};

export default ThesisFilterTable;
