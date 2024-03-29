import { useState } from 'react';
import { useLecturerClassifications } from '../../../../hooks/useLecturers';
import { Pagination } from '../../../../components/molecules';
import FormLecturerClassificationFilter from './FormLecturerClassificationFilter';
import DataLecturerClassifications from './DataLecturerClassifications';

const LecturerClassificationTable = () => {
    const [params, setParams] = useState({
        semester: '',
        page: '',
    });

    const { data } = useLecturerClassifications(params);

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
            <FormLecturerClassificationFilter onSubmit={handleFilter} />
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
                        <DataLecturerClassifications params={params} />
                    </tbody>
                </table>
            </div>
            {data && (
                <Pagination data={data.meta} onClick={(e) => handlePage(e)} />
            )}
        </>
    );
};

export default LecturerClassificationTable;
