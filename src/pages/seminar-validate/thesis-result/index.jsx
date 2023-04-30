import React from 'react';
import { Card, Main } from '../../../components';
import { ThesisSeminarValidateTable } from '../components';

function ThesisResultValidate() {
    const seminar = {
        type: 'Seminar Hasil Tugas Akhir',
        key: 'thesisResultValidates',
    };

    return (
        <Main title={`Validasi ${seminar.type}`}>
            <Card>
                <ThesisSeminarValidateTable seminar={seminar} />
            </Card>
        </Main>
    );
}

export default ThesisResultValidate;
