import React from 'react';
import { Card, Main } from '../../../../components';
import { DataThesisSeminar } from '../../../../fetch';

function ThesisProposalEdit() {
    return (
        <Main title="Edit Seminar Proposal TA">
            <Card>
                <DataThesisSeminar />
            </Card>
        </Main>
    );
}

export default ThesisProposalEdit;
