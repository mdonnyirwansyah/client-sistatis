import React from 'react';
import { Card, Main } from '../../../components';
import { DataThesisSeminarsValidate } from '../../../fetch';

function ThesisProposalValidate() {
    const data = {
        name: 'Seminar Proposal Tugas Akhir',
        status: 'Penjadwalan',
    };

    return (
        <Main title={`Validasi ${data.name}`}>
            <Card>
                <DataThesisSeminarsValidate data={data} />
            </Card>
        </Main>
    );
}

export default ThesisProposalValidate;
