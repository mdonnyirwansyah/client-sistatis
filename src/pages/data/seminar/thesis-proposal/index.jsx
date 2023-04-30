import React from 'react';
import { Card, Main } from '../../../../components';
import { ThesisSeminarTable } from '../components';

function ThesisProposal() {
    const seminar = {
        type: 'Seminar Proposal Tugas Akhir',
        key: 'thesisProposals',
    };

    return (
        <Main title={`Data ${seminar.type}`}>
            <Card>
                <ThesisSeminarTable seminar={seminar} />
            </Card>
        </Main>
    );
}

export default ThesisProposal;
