import { Card, Main } from '../components';
import { useSelector } from 'react-redux';
import { DataThesesClassification } from '../fetch';

function Dashboard() {
    const { user } = useSelector((state) => state.auth);

    return (
        <Main title="Dashboard">
            <div className="callout callout-info">
                <p className="text-center my-3">
                    Selamat Datang {user && user.name}
                </p>
            </div>
            <Card>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th
                                    rowSpan="2"
                                    style={{
                                        'vertical-align': 'middle',
                                        'text-align': 'center',
                                    }}
                                >
                                    Angkatan
                                </th>
                                <th
                                    rowSpan="2"
                                    style={{
                                        'vertical-align': 'middle',
                                        'text-align': 'center',
                                    }}
                                >
                                    Mahasiswa
                                </th>
                                <th
                                    colSpan="2"
                                    style={{ 'text-align': 'center' }}
                                >
                                    IPK
                                </th>
                                <th
                                    colSpan="2"
                                    style={{ 'text-align': 'center' }}
                                >
                                    Lama Study (Tahun)
                                </th>
                                <th
                                    colSpan="2"
                                    style={{ 'text-align': 'center' }}
                                >
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
            </Card>
        </Main>
    );
}

export default Dashboard;
