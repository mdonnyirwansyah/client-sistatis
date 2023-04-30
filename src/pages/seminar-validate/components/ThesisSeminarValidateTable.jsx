import { useState } from 'react';
import { Pagination } from '../../../components/molecules';
import { useThesisSeminars } from '../../../hooks/useSeminars';
import DataThesisSeminarValidates from './DataThesisSeminarValidates';

const ThesisSeminarValidateTable = ({ seminar }) => {
    const [params, setParams] = useState({
        type: seminar.type,
        status: '1',
        page: '',
    });

    const { data } = useThesisSeminars(params, seminar.key);

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
                        <DataThesisSeminarValidates
                            params={params}
                            queryKey={seminar.key}
                        />
                    </tbody>
                </table>
            </div>
            {data && (
                <Pagination data={data.meta} onClick={(e) => handlePage(e)} />
            )}
        </>
    );
};

export default ThesisSeminarValidateTable;
