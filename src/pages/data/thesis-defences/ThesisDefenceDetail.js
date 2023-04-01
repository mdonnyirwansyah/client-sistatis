import React from 'react';
import { Card, Main } from '../../../components';
import { DataThesisSeminar } from '../../../fetch';

function ThesisDefenceDetail() {
    return (
        <Main title="Lihat Sidang TA">
            <Card>
                <DataThesisSeminar />
            </Card>
        </Main>
    );
}

export default ThesisDefenceDetail;
