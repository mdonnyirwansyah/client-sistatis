import React from 'react';
import { Card, Main } from '../../../components';
import { ThesisSeminarValidateTable } from '../components';

function ThesisDefenceValidate() {
    const seminar = {
        type: 'Sidang Tugas Akhir',
        key: 'thesisDefenceValidates',
    };

    return (
        <Main title={`Validasi ${seminar.type}`}>
            <Card>
                <ThesisSeminarValidateTable seminar={seminar} />
            </Card>
        </Main>
    );
}

export default ThesisDefenceValidate;
