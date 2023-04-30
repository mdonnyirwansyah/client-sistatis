import { useState } from 'react';
import { Pagination } from '../../../components/molecules';
import { useThesisClassificationTables } from '../../../hooks/useTheses';
import DataThesisClassifications from './DataThesisClassifications';

const ThesisClassificationTable = () => {
    const [params, setParams] = useState({
        page: '',
    });

    const { data } = useThesisClassificationTables(params);

    const handlePage = (e) => {
        const page = e.target.getAttribute('data-value');

        setParams((params) => ({
            ...params,
            page: page,
        }));
    };

    return (
        <div className="table-responsive">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th
                            rowSpan="2"
                            style={{
                                verticalAlign: 'middle',
                                textAlign: 'center',
                            }}
                        >
                            Angkatan
                        </th>
                        <th
                            rowSpan="2"
                            style={{
                                verticalAlign: 'middle',
                                textAlign: 'center',
                            }}
                        >
                            Mahasiswa
                        </th>
                        <th colSpan="2" style={{ textAlign: 'center' }}>
                            IPK
                        </th>
                        <th colSpan="2" style={{ textAlign: 'center' }}>
                            Lama Study (Tahun)
                        </th>
                        <th colSpan="2" style={{ textAlign: 'center' }}>
                            Lama TA (Bulan)
                        </th>
                    </tr>
                    <tr>
                        <th>SUM</th>
                        <th>AVG</th>
                        <th>SUM</th>
                        <th>AVG</th>
                        <th>SUM</th>
                        <th>AVG</th>
                    </tr>
                </thead>
                <tbody>
                    <DataThesisClassifications params={params} />
                </tbody>
            </table>
            {data && (
                <Pagination data={data.meta} onClick={(e) => handlePage(e)} />
            )}
        </div>
    );
};

export default ThesisClassificationTable;
