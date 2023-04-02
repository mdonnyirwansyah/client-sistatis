import React from 'react';
import { Card, Main } from '../../../components';
import { DataThesisSeminarsValidate } from '../../../fetch';

function ThesisDefenceValidate() {
    const data = {
        name: 'Sidang Tugas Akhir',
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

export default ThesisDefenceValidate;
