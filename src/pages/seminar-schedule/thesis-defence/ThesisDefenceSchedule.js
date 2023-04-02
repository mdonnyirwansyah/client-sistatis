import React from 'react';
import { Card, Main } from '../../../components';
import { DataThesisSeminarsSchedule } from '../../../fetch';

function ThesisDefenceSchedule() {
    const data = {
        name: 'Sidang Tugas Akhir',
        status: 'Pendaftaran',
    };

    return (
        <Main title={`Penjadwalan ${data.name}`}>
            <Card>
                <DataThesisSeminarsSchedule data={data} />
            </Card>
        </Main>
    );
}

export default ThesisDefenceSchedule;
