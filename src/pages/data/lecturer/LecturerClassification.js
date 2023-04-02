import { Card, Main } from '../../../components';
import { DataLecturersClassification } from '../../../fetch';

function LecturerClassification() {
    return (
        <Main title="Data Dosen">
            <Card>
                <DataLecturersClassification />
            </Card>
        </Main>
    );
}

export default LecturerClassification;
