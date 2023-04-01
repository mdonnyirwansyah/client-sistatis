import React from 'react';
import { Card, Main } from '../../../components';
import { DataThesisSeminar } from '../../../fetch';

function ThesisResultEdit() {
    return (
        <Main title="Edit Seminar Hasil TA">
            <Card>
                <DataThesisSeminar />
            </Card>
        </Main>
    );
}

export default ThesisResultEdit;
