import React from 'react';
import { Card, Main } from '../../../components';
import { DataThesisSeminar } from '../../../fetch';

function ThesisResultDetail() {
    return (
        <Main title="Lihat Seminar Hasil TA">
            <Card>
                <DataThesisSeminar />
            </Card>
        </Main>
    );
}

export default ThesisResultDetail;
