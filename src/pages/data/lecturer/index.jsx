import { Card, Main } from '../../../components';
import { LecturerClassificationTable } from './components';

function LecturerClassification() {
    return (
        <Main title="Data Dosen">
            <Card>
                <LecturerClassificationTable />
            </Card>
        </Main>
    );
}

export default LecturerClassification;
