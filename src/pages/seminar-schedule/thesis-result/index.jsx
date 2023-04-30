import React from 'react';
import { Card, Main } from '../../../components';
import { ThesisSeminarScheduleTable } from '../components';

function ThesisResultSchedule() {
    const seminar = {
        type: 'Seminar Hasil Tugas Akhir',
        key: 'thesisResultSchedules',
    };

    return (
        <Main title={`Penjadwalan ${seminar.type}`}>
            <Card>
                <ThesisSeminarScheduleTable seminar={seminar} />
            </Card>
        </Main>
    );
}

export default ThesisResultSchedule;
