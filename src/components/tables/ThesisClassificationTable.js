import { DataThesesClassification } from '../../fetch';

const ThesisClassificationTable = () => {
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
                    <DataThesesClassification />
                </tbody>
            </table>
        </div>
    );
};

export default ThesisClassificationTable;
