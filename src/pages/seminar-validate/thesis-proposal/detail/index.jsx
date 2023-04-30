import React from 'react';
import { Card, Main } from '../../../../components';
import { DataThesisSeminarValidate } from '../../components';

function ThesisProposalValidateDetail() {
    return (
        <Main title="Lihat Validasi Seminar Proposal TA">
            <Card>
                <DataThesisSeminarValidate />
            </Card>
        </Main>
    );
}

export default ThesisProposalValidateDetail;
