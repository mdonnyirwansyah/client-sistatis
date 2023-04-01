import { Main } from '../../../components';
import { DataLecturersClassification } from '../../../fetch';

function LecturerClassification() {
    return (
        <Main title="Data Dosen">
            <div className="card">
                <div className="card-body">
                    <DataLecturersClassification />
                </div>
            </div>
        </Main>
    );
}

export default LecturerClassification;
