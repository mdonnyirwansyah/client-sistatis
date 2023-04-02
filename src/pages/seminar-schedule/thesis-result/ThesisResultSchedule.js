import React from 'react';
import { Card, Main } from '../../../components';
import { DataThesisSeminarsSchedule } from '../../../fetch';

function ThesisResultSchedule() {
    const data = {
        name: 'Seminar Hasil Tugas Akhir',
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

export default ThesisResultSchedule;
