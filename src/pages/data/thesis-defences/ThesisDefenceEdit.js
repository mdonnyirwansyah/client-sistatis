import React from 'react';
import { Card, Main } from '../../../components';
import { DataThesisSeminar } from '../../../fetch';

function ThesisDefenceEdit() {
    return (
        <Main title="Edit Sidang TA">
            <Card>
                <DataThesisSeminar />
            </Card>
        </Main>
    );
}

export default ThesisDefenceEdit;
