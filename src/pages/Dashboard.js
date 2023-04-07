import {
    Card,
    Main,
    ThesisClassificationBar,
    ThesisClassificationTable,
} from '../components';
import { useSelector } from 'react-redux';

function Dashboard() {
    const { user } = useSelector((state) => state.auth);

    return (
        <Main title="Dashboard">
            <div className="callout callout-info">
                <p className="text-center my-3">
                    Selamat Datang {user && user.name}
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
