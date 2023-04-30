import { useState } from 'react';
import DataTheses from './DataTheses';
import { useTheses } from '../../../../hooks/useTheses';
import { Pagination } from '../../../../components/molecules';
import FormThesisFilter from './FormThesisFilter';

const ThesisTable = () => {
    const [params, setParams] = useState({
        field_id: '',
        thesis_status: '',
        page: '',
    });

    const { data } = useTheses(params);

    const handleFilter = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const fieldId = formData.get('field_id');
        const thesisStatus = formData.get('thesis_status');

        setParams((params) => ({
            ...params,
            field_id: fieldId,
            thesis_status: thesisStatus,
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
            <FormThesisFilter onSubmit={handleFilter} />
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
                        <DataTheses params={params} />
                    </tbody>
                </table>
            </div>
            {data && (
                <Pagination data={data.meta} onClick={(e) => handlePage(e)} />
            )}
        </>
    );
};

export default ThesisTable;
