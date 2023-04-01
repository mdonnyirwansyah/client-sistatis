import React from 'react';
import { Card, Main } from '../../../components';
import { DataThesisSeminar } from '../../../fetch';

function ThesisProposalDetail() {
    return (
        <Main title="Lihat Seminar Proposal TA">
            <Card>
                <DataThesisSeminar />
            </Card>
        </Main>
    );
}

export default ThesisProposalDetail;
