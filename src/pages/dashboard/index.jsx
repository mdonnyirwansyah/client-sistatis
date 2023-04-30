import { Card, Main } from '../../components';
import { useGetMe } from '../../hooks/useAuths';
import {
    ThesisClassificationBar,
    ThesisClassificationTable,
} from './components';

function Dashboard() {
    const { data } = useGetMe();

    return (
        <Main title="Dashboard">
            <div className="callout callout-info">
                <p className="text-center my-3">
                    Selamat Datang {data && data.name}
                </p>
            </div>
            <ThesisClassificationBar />
            <Card>
                <ThesisClassificationTable />
            </Card>
        </Main>
    );
}

export default Dashboard;
