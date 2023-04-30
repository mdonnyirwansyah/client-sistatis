import React from 'react';
import { Card, Main } from '../../../components';
import { ThesisSeminarValidateTable } from '../components';

function ThesisProposalValidate() {
    const seminar = {
        type: 'Seminar Proposal Tugas Akhir',
        key: 'thesisProposalValidates',
    };

    return (
        <Main title={`Validasi ${seminar.type}`}>
            <Card>
                <ThesisSeminarValidateTable seminar={seminar} />
            </Card>
        </Main>
    );
}

export default ThesisProposalValidate;
