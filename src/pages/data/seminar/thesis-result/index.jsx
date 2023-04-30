import { Card, Main } from '../../../../components';
import { ThesisSeminarTable } from '../components';

function ThesisResult() {
    const seminar = {
        type: 'Seminar Hasil Tugas Akhir',
        key: 'thesisResults',
    };

    return (
        <Main title={`Data ${seminar.type}`}>
            <Card>
                <ThesisSeminarTable seminar={seminar} />
            </Card>
        </Main>
    );
}

export default ThesisResult;
